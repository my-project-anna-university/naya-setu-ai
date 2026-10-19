import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  FaBalanceScale,
  FaRobot,
  FaHandHoldingHeart,
  FaBookOpen,
  FaFileAlt,
  FaMapMarkedAlt,
  FaNewspaper,
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaChevronDown
} from 'react-icons/fa';

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/', icon: null },
    { name: 'AI Chatbot', path: '/chatbot', icon: <FaRobot className="w-3.5 h-3.5 text-secondary-500" /> },
    { name: 'Schemes', path: '/schemes', icon: <FaHandHoldingHeart className="w-3.5 h-3.5 text-accent-500" /> },
    { name: 'Know Your Rights', path: '/rights', icon: <FaBookOpen className="w-3.5 h-3.5 text-primary-400" /> },
    { name: 'Documents', path: '/documents', icon: <FaFileAlt className="w-3.5 h-3.5 text-secondary-500" /> },
    { name: 'Legal Aid', path: '/legal-aid', icon: <FaMapMarkedAlt className="w-3.5 h-3.5 text-accent-500" /> },
    { name: 'News', path: '/news', icon: <FaNewspaper className="w-3.5 h-3.5 text-primary-400" /> },
  ];

  const handleLogout = () => {
    logout();
    setProfileDropdownOpen(false);
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Indian Tricolor Subtle Top Line */}
      <div className="tiranga-stripe w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center text-white shadow-md shadow-primary-900/20 group-hover:scale-105 transition-transform">
              <span className="text-2xl" role="img" aria-label="Scales of Justice">⚖️</span>
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold text-primary-800 tracking-tight">Nyaya<span className="text-secondary-500">Setu</span></span>
                <span className="text-xs font-semibold text-accent-600 bg-accent-50 px-1.5 py-0.5 rounded border border-accent-200">AI</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">न्यायसेतु • Citizen Legal Bridge</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-primary-800 bg-primary-50/80 font-bold'
                      : 'text-slate-600 hover:text-primary-800 hover:bg-slate-100'
                  }`
                }
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Auth State & Call to Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-slate-200 hover:border-primary-300 hover:bg-slate-50 transition-all text-left"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-800 font-bold flex items-center justify-center text-sm">
                    {user?.fullName?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-800 leading-tight truncate max-w-[110px]">
                      {user?.fullName || 'Citizen User'}
                    </p>
                    <p className="text-slate-500 leading-tight text-[10px]">{user?.state || 'India'}</p>
                  </div>
                  <FaChevronDown className="w-2.5 h-2.5 text-slate-400" />
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-xl border border-slate-100 py-2 z-50 animate-fade-in">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs text-slate-400">Signed in as</p>
                      <p className="text-sm font-semibold text-slate-800 truncate">{user?.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-800 transition-colors"
                    >
                      <FaUserCircle className="w-4 h-4 text-primary-500" />
                      Citizen Profile & Saved
                    </Link>
                    <Link
                      to="/documents"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-800 transition-colors"
                    >
                      <FaFileAlt className="w-4 h-4 text-secondary-500" />
                      My Legal Documents
                    </Link>
                    <div className="border-t border-slate-100 mt-1 pt-1">
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <FaSignOutAlt className="w-4 h-4" />
                        Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-semibold text-primary-800 hover:text-primary-900 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-semibold text-white bg-primary-800 hover:bg-primary-900 rounded-lg shadow-sm hover:shadow transition-all"
                >
                  Register Free
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-primary-800 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-primary-50 hover:text-primary-800"
            >
              {link.icon || <FaBalanceScale className="w-4 h-4 text-primary-600" />}
              <span>{link.name}</span>
            </Link>
          ))}

          <div className="pt-4 border-t border-slate-100">
            {isAuthenticated ? (
              <div className="space-y-2">
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-800 bg-slate-100"
                >
                  <FaUserCircle className="w-4 h-4 text-primary-800" />
                  <span>Profile ({user?.fullName || 'Citizen'})</span>
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  <FaSignOutAlt className="w-4 h-4" />
                  <span>Log Out</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-semibold text-primary-800 border border-slate-300 rounded-lg hover:bg-slate-50"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-semibold text-white bg-primary-800 rounded-lg hover:bg-primary-900"
                >
                  Register Free
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
