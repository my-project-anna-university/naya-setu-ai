import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLanguage,
  FaBookmark,
  FaFileAlt,
  FaHistory,
  FaSignOutAlt,
  FaEdit,
  FaCheck,
  FaDownload,
  FaTrashAlt,
  FaExternalLinkAlt
} from 'react-icons/fa';
import Badge from '../components/common/Badge';
import Modal from '../components/common/Modal';
import { SCHEMES_DATA, INDIAN_STATES } from '../data/mockData';
import toast from 'react-hot-toast';

export const UserProfile = () => {
  const { user, isAuthenticated, logout, updateProfile, toggleSaveScheme } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('saved-schemes');
  const [isEditing, setIsEditing] = useState(false);
  const [profileForm, setProfileForm] = useState({
    fullName: user?.fullName || 'Aarav Sharma',
    phone: user?.phone || '+91 98765 43210',
    state: user?.state || 'Delhi (NCT)',
    language: user?.language || 'English / Hindi',
  });

  const [selectedDocPreview, setSelectedDocPreview] = useState(null);

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-3xl border border-slate-200 text-center shadow-lg">
        <div className="w-16 h-16 rounded-2xl bg-primary-100 text-primary-800 flex items-center justify-center text-3xl mx-auto mb-4">
          ⚖️
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Sign in to Access Citizen Profile</h2>
        <p className="text-sm text-slate-500 mb-6">
          Log in or register to bookmark welfare schemes, track generated RTI/dispute notices, and view personalized rights.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            to="/login"
            className="px-6 py-2.5 rounded-xl bg-primary-800 text-white font-bold text-sm hover:bg-primary-900"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50"
          >
            Register
          </Link>
        </div>
      </div>
    );
  }

  // Get full scheme details for saved IDs
  const savedSchemesList = (user?.savedSchemes || []).map((id) =>
    SCHEMES_DATA.find((s) => s.id === id)
  ).filter(Boolean);

  const savedDocsList = user?.savedDocuments || [];

  const handleProfileSave = async (e) => {
    e.preventDefault();
    await updateProfile(profileForm);
    setIsEditing(false);
  };

  const handleDownloadDoc = (doc) => {
    const element = document.createElement('a');
    const file = new Blob([doc.content || 'NyayaSetu Legal Document'], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${doc.type || 'Legal_Doc'}_${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Document downloaded');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Citizen Profile Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-primary-800 text-white font-black text-2xl flex items-center justify-center shadow-md">
              {user?.fullName?.charAt(0).toUpperCase() || 'C'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-slate-900">{user?.fullName || 'Citizen User'}</h1>
                <Badge variant="green" size="sm">
                  Verified Citizen
                </Badge>
              </div>
              <p className="text-xs text-slate-500 mt-1">{user?.email}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2">
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="w-3 h-3 text-secondary-500" />
                  {user?.state || 'Delhi (NCT)'}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FaLanguage className="w-3 h-3 text-accent-600" />
                  {user?.language || 'English'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
            >
              <FaEdit className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                logout();
                navigate('/');
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 text-xs font-semibold transition-colors"
            >
              <FaSignOutAlt className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Edit Profile Form */}
        {isEditing && (
          <form onSubmit={handleProfileSave} className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                value={profileForm.fullName}
                onChange={(e) => setProfileForm({ ...profileForm, fullName: e.target.value })}
                className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number</label>
              <input
                type="text"
                value={profileForm.phone}
                onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">State / UT</label>
              <select
                value={profileForm.state}
                onChange={(e) => setProfileForm({ ...profileForm, state: e.target.value })}
                className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800 bg-white"
              >
                {INDIAN_STATES.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Language</label>
              <input
                type="text"
                value={profileForm.language}
                onChange={(e) => setProfileForm({ ...profileForm, language: e.target.value })}
                className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800"
              />
            </div>
            <div className="sm:col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-primary-800 hover:bg-primary-900 text-white font-bold text-xs"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-3 border-b border-slate-200 mb-6">
        <button
          type="button"
          onClick={() => setActiveTab('saved-schemes')}
          className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 flex items-center gap-2 transition-all ${
            activeTab === 'saved-schemes'
              ? 'border-secondary-500 text-secondary-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <FaBookmark className="w-3.5 h-3.5" />
          <span>Saved Schemes ({savedSchemesList.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('saved-docs')}
          className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 flex items-center gap-2 transition-all ${
            activeTab === 'saved-docs'
              ? 'border-secondary-500 text-secondary-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <FaFileAlt className="w-3.5 h-3.5" />
          <span>Generated Legal Documents ({savedDocsList.length})</span>
        </button>
      </div>

      {/* Tab Panels */}
      {activeTab === 'saved-schemes' && (
        <div>
          {savedSchemesList.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
              <FaBookmark className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-700">No saved schemes yet</h3>
              <p className="text-xs text-slate-500">
                Browse government schemes and click the bookmark icon to save them for easy access.
              </p>
              <Link
                to="/schemes"
                className="inline-block mt-2 px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-xs font-bold rounded-lg"
              >
                Browse Welfare Schemes
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedSchemesList.map((scheme) => (
                <div key={scheme.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="primary" size="sm">
                        {scheme.category}
                      </Badge>
                      <button
                        type="button"
                        onClick={() => toggleSaveScheme(scheme.id)}
                        className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 font-semibold"
                      >
                        <FaTrashAlt className="w-3 h-3" />
                        <span>Remove</span>
                      </button>
                    </div>
                    <Link to={`/schemes/${scheme.id}`} className="block group">
                      <h3 className="font-bold text-slate-900 group-hover:text-primary-800 transition-colors">
                        {scheme.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">{scheme.ministry}</p>
                    </Link>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2">{scheme.summary}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">{scheme.helpline}</span>
                    <Link
                      to={`/schemes/${scheme.id}`}
                      className="text-primary-800 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'saved-docs' && (
        <div>
          {savedDocsList.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
              <FaFileAlt className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-700">No generated documents saved yet</h3>
              <p className="text-xs text-slate-500">
                Use our Document Generator to draft RTIs, consumer notices, or police complaints and save them to your account.
              </p>
              <Link
                to="/documents"
                className="inline-block mt-2 px-4 py-2 bg-primary-800 hover:bg-primary-900 text-white text-xs font-bold rounded-lg"
              >
                Go to Document Generator
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {savedDocsList.map((doc, idx) => (
                <div
                  key={doc.id || idx}
                  className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex items-center justify-between gap-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-800 flex items-center justify-center text-lg shrink-0">
                      <FaFileAlt />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{doc.title || doc.type}</h4>
                      <p className="text-xs text-slate-500">Saved on {doc.date} • {doc.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {doc.content && (
                      <button
                        type="button"
                        onClick={() => setSelectedDocPreview(doc)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700"
                      >
                        Preview
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDownloadDoc(doc)}
                      className="px-3 py-1.5 rounded-lg bg-secondary-500 hover:bg-secondary-600 text-white text-xs font-bold flex items-center gap-1.5"
                    >
                      <FaDownload className="w-3 h-3" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Document Preview Modal */}
      {selectedDocPreview && (
        <Modal
          isOpen={!!selectedDocPreview}
          onClose={() => setSelectedDocPreview(null)}
          title={selectedDocPreview.title || selectedDocPreview.type}
          subtitle={`Saved Legal Draft • Date: ${selectedDocPreview.date}`}
          footer={
            <div className="flex items-center justify-between w-full">
              <button
                type="button"
                onClick={() => handleDownloadDoc(selectedDocPreview)}
                className="px-4 py-2 bg-secondary-500 text-white text-xs font-bold rounded-lg hover:bg-secondary-600"
              >
                Download TXT
              </button>
              <button
                type="button"
                onClick={() => setSelectedDocPreview(null)}
                className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-300"
              >
                Close
              </button>
            </div>
          }
        >
          <div className="p-4 bg-slate-50 rounded-xl font-serif text-xs text-slate-800 whitespace-pre-wrap leading-relaxed border border-slate-200">
            {selectedDocPreview.content}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UserProfile;
