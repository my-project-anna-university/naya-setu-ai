import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLanguage,
  FaArrowRight
} from 'react-icons/fa';
import { INDIAN_STATES } from '../../data/mockData';

export const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    state: 'Delhi (NCT)',
    language: 'English',
    agreeTerms: true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const indianLanguages = [
    'Hindi (हिन्दी)',
    'English',
    'Bengali (বাংলা)',
    'Telugu (తెలుగు)',
    'Marathi (मराठी)',
    'Tamil (தமிழ்)',
    'Gujarati (ગુજરાતી)',
    'Kannada (ಕನ್ನಡ)',
    'Malayalam (മലയാളം)',
    'Punjabi (ਪੰਜਾਬੀ)',
    'Odia (ଓଡ଼ିଆ)',
    'Assamese (অসমীয়া)'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password) {
      setError('Please fill in all mandatory fields.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!formData.agreeTerms) {
      setError('Please accept terms of service and privacy policy.');
      return;
    }

    setLoading(true);
    const res = await register({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      state: formData.state,
      language: formData.language,
    });
    setLoading(false);

    if (res.success) {
      navigate('/profile');
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
        
        {/* Header */}
        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-secondary-500 text-white flex items-center justify-center text-3xl mx-auto shadow-md">
            ⚖️
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
            Citizen Registration
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Create your free account to access customized rights, schemes, and legal documents
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <FaUser className="w-4 h-4" />
              </div>
              <input
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Priya Sharma"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
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
                  placeholder="priya@example.com"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* State */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">State / UT *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-500 bg-white"
                >
                  {INDIAN_STATES.map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Language Preference */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Language</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <FaLanguage className="w-4 h-4" />
                </div>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-500 bg-white"
                >
                  {indianLanguages.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Password */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Password *</label>
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
                  placeholder="At least 6 chars"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Confirm Password *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <FaLock className="w-4 h-4" />
                </div>
                <input
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>
          </div>

          <div className="pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
              <input
                name="agreeTerms"
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="rounded text-primary-800 focus:ring-primary-500 mt-0.5"
              />
              <span>
                I agree to the NyayaSetu Terms of Service, Privacy Policy, and understand this platform offers public legal literacy under Indian laws.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <span>{loading ? 'Creating Citizen Account...' : 'Complete Registration'}</span>
            <FaArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Login link */}
        <div className="text-center pt-4 border-t border-slate-100 text-xs text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-primary-800 hover:underline">
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
