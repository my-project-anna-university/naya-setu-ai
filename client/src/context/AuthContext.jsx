import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('nyayasetu_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState(() => localStorage.getItem('nyayasetu_token') || null);
  const [loading, setLoading] = useState(true);

  // Load user profile on mount if token exists
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const storedToken = localStorage.getItem('nyayasetu_token');
      if (storedToken) {
        try {
          const res = await api.get('/auth/profile');
          if (res.data?.user) {
            setUser(res.data.user);
            localStorage.setItem('nyayasetu_user', JSON.stringify(res.data.user));
          }
        } catch (error) {
          console.warn('Could not verify profile with server, maintaining cached state:', error.message);
        }
      }
      setLoading(false);
    };

    fetchCurrentUser();
  }, []);

  const login = async (credentials) => {
    try {
      let data;
      try {
        const res = await api.post('/auth/login', credentials);
        data = res.data;
      } catch (err) {
        // Fallback for standalone demo when backend is offline
        if (!err.response) {
          console.log('Backend offline, enabling demo session fallback');
          data = {
            token: 'demo-jwt-token-nyayasetu-' + Date.now(),
            user: {
              _id: 'usr_demo_101',
              fullName: credentials.email.split('@')[0].replace('.', ' ') || 'Priya Sharma',
              email: credentials.email,
              state: 'Delhi (NCT)',
              phone: '+91 98765 43210',
              language: 'English / Hindi',
              savedSchemes: ['pm-jay', 'nalsa-free-legal-aid'],
              savedDocuments: [
                { id: 'doc-1', type: 'RTI Application', title: 'RTI for Road Repair', date: '2026-10-10' }
              ]
            }
          };
        } else {
          throw err;
        }
      }

      const receivedToken = data.token;
      const receivedUser = data.user;

      localStorage.setItem('nyayasetu_token', receivedToken);
      localStorage.setItem('nyayasetu_user', JSON.stringify(receivedUser));
      setToken(receivedToken);
      setUser(receivedUser);

      toast.success(`Welcome back, ${receivedUser.fullName || 'Citizen'}!`);
      return { success: true };
    } catch (error) {
      const msg = error.response?.data?.message || error.message || 'Login failed. Please check credentials.';
      toast.error(msg);
      return { success: false, message: msg };
    }
  };

  const register = async (userData) => {
    try {
      let data;
      try {
        const res = await api.post('/auth/register', userData);
        data = res.data;
      } catch (err) {
        if (!err.response) {
          console.log('Backend offline, enabling demo registration fallback');
          data = {
            token: 'demo-jwt-token-nyayasetu-' + Date.now(),
            user: {
              _id: 'usr_reg_' + Date.now(),
              fullName: userData.fullName,
              email: userData.email,
              state: userData.state || 'Delhi (NCT)',
              phone: userData.phone || '',
              language: userData.language || 'English',
              savedSchemes: [],
              savedDocuments: []
            }
          };
        } else {
          throw err;
        }
      }

      const receivedToken = data.token;
      const receivedUser = data.user;

      localStorage.setItem('nyayasetu_token', receivedToken);
      localStorage.setItem('nyayasetu_user', JSON.stringify(receivedUser));
      setToken(receivedToken);
      setUser(receivedUser);

      toast.success('Registration successful! Welcome to NyayaSetu.');
      return { success: true };
    } catch (error) {
      const msg = error.response?.data?.message || error.message || 'Registration failed. Please try again.';
      toast.error(msg);
      return { success: false, message: msg };
    }
  };

  const logout = () => {
    localStorage.removeItem('nyayasetu_token');
    localStorage.removeItem('nyayasetu_user');
    setToken(null);
    setUser(null);
    toast.success('Logged out successfully.');
  };

  const updateProfile = async (updates) => {
    try {
      let updatedUser;
      try {
        const res = await api.put('/auth/profile', updates);
        updatedUser = res.data.user;
      } catch (err) {
        if (!err.response) {
          updatedUser = { ...user, ...updates };
        } else {
          throw err;
        }
      }

      setUser(updatedUser);
      localStorage.setItem('nyayasetu_user', JSON.stringify(updatedUser));
      toast.success('Profile updated successfully!');
      return { success: true };
    } catch (error) {
      const msg = error.response?.data?.message || 'Could not update profile';
      toast.error(msg);
      return { success: false, message: msg };
    }
  };

  const toggleSaveScheme = (schemeId) => {
    if (!user) {
      toast.error('Please log in to bookmark government schemes.');
      return false;
    }
    const currentSaved = user.savedSchemes || [];
    const isSaved = currentSaved.includes(schemeId);
    const newSaved = isSaved
      ? currentSaved.filter((id) => id !== schemeId)
      : [...currentSaved, schemeId];

    const updatedUser = { ...user, savedSchemes: newSaved };
    setUser(updatedUser);
    localStorage.setItem('nyayasetu_user', JSON.stringify(updatedUser));
    
    // Attempt async sync to backend if online
    api.put('/auth/profile', { savedSchemes: newSaved }).catch(() => {});

    toast.success(isSaved ? 'Scheme removed from bookmarks' : 'Scheme saved to your profile!');
    return !isSaved;
  };

  const saveGeneratedDocument = (docMeta) => {
    if (!user) return;
    const currentDocs = user.savedDocuments || [];
    const newDocs = [
      {
        id: 'doc_' + Date.now(),
        date: new Date().toISOString().split('T')[0],
        ...docMeta
      },
      ...currentDocs
    ];

    const updatedUser = { ...user, savedDocuments: newDocs };
    setUser(updatedUser);
    localStorage.setItem('nyayasetu_user', JSON.stringify(updatedUser));
    api.put('/auth/profile', { savedDocuments: newDocs }).catch(() => {});
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: !!token,
        login,
        register,
        logout,
        updateProfile,
        toggleSaveScheme,
        saveGeneratedDocument
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
export default AuthContext;
