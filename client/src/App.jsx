import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import LegalChatbot from './pages/LegalChatbot';
import SchemesFinder from './pages/SchemesFinder';
import SchemeDetail from './pages/SchemeDetail';
import RightsAwareness from './pages/RightsAwareness';
import RightsCategory from './pages/RightsCategory';
import DocumentGenerator from './pages/DocumentGenerator';
import LegalAidDirectory from './pages/LegalAidDirectory';
import LegalNews from './pages/LegalNews';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1a365d',
            color: '#ffffff',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
          },
          success: {
            iconTheme: {
              primary: '#2d6a4f',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#e67e22',
              secondary: '#ffffff',
            },
          },
        }}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chatbot" element={<LegalChatbot />} />
          <Route path="/schemes" element={<SchemesFinder />} />
          <Route path="/schemes/:id" element={<SchemeDetail />} />
          <Route path="/rights" element={<RightsAwareness />} />
          <Route path="/rights/:category" element={<RightsCategory />} />
          <Route path="/documents" element={<DocumentGenerator />} />
          <Route path="/legal-aid" element={<LegalAidDirectory />} />
          <Route path="/news" element={<LegalNews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
