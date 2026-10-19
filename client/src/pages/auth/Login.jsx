import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaEnvelope, FaLock, FaBalanceScale, FaArrowRight, FaShieldAlt } from 'react-icons/fa';
import Badge from '../../components/common/Badge';

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please provide both email and password.');
      return;
    }

    setLoading(true);
    const res = await login({ email: formData.email, password: formData.password });
    setLoading(false);

    if (res.success) {
      navigate('/profile');
    } else {
      setError(res.message);
    }
  };

  const handleDemoLogin = async () => {
    setFormData({
      email: 'citizen.aarav@nyayasetu.gov.in',
      password: 'DemoPassword@2026',
      rememberMe: true,
    });
    setLoading(true);
    const res = await login({
      email: 'citizen.aarav@nyayasetu.gov.in',
      password: 'DemoPassword@2026',
    });
    setLoading(false);
    if (res.success) {
      navigate('/profile');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
        
        {/* Header */}
        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary-800 text-white flex items-center justify-center text-3xl mx-auto shadow-md">
            ⚖️
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
            Citizen Sign In
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Access your saved schemes, legal drafts, and advisory history
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <FaEnvelope className="w-4 h-4" />
              </div>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="citizen@example.com"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <FaLock className="w-4 h-4" />
              </div>
              <input
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-slate-600">
              <input
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                className="rounded text-primary-800 focus:ring-primary-500"
              />
              <span>Remember this browser</span>
            </label>
            <span className="text-secondary-600 hover:underline cursor-pointer">Forgot password?</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-primary-800 hover:bg-primary-900 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
            <FaArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* 1-Click Demo Citizen Login */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            <FaShieldAlt className="w-3.5 h-3.5 text-secondary-500" />
            <span>Use 1-Click Demo Citizen Account</span>
          </button>
        </div>

        {/* Register link */}
        <div className="text-center pt-4 border-t border-slate-100 text-xs text-slate-600">
          New to NyayaSetu?{' '}
          <Link to="/register" className="font-bold text-primary-800 hover:underline">
            Register Free Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
