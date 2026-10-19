import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaShareAlt,
  FaBookmark,
  FaRegBookmark,
  FaCheckCircle,
  FaFileAlt,
  FaExternalLinkAlt,
  FaPhoneAlt,
  FaInfoCircle,
  FaHandHoldingHeart,
  FaCheck
} from 'react-icons/fa';
import Badge from '../components/common/Badge';
import { SCHEMES_DATA } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export const SchemeDetail = () => {
  const { id } = useParams();
  const { user, toggleSaveScheme } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const scheme = SCHEMES_DATA.find((s) => s.id === id) || SCHEMES_DATA[0];
  const isSaved = user?.savedSchemes?.includes(scheme.id);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: scheme.name,
        text: scheme.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Scheme URL copied to clipboard!');
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview & Highlights' },
    { id: 'benefits', label: 'Financial & Social Benefits' },
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'process', label: 'Step-by-Step Application' },
    { id: 'documents', label: 'Mandatory Documents' }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
        <Link to="/" className="hover:text-primary-800">Home</Link>
        <span>/</span>
        <Link to="/schemes" className="hover:text-primary-800">Government Schemes</Link>
        <span>/</span>
        <span className="text-slate-800 font-semibold truncate max-w-xs">{scheme.name}</span>
      </nav>

      {/* Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <Badge variant="primary" size="md">
            {scheme.category}
          </Badge>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <FaShareAlt className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
            <button
              type="button"
              onClick={() => toggleSaveScheme(scheme.id)}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-secondary-600 bg-secondary-50 hover:bg-secondary-100 rounded-xl transition-colors border border-secondary-200"
            >
              {isSaved ? (
                <>
                  <FaBookmark className="w-3.5 h-3.5 text-secondary-500" />
                  <span>Saved</span>
                </>
              ) : (
                <>
                  <FaRegBookmark className="w-3.5 h-3.5" />
                  <span>Save Scheme</span>
                </>
              )}
            </button>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
          {scheme.name}
        </h1>
        <p className="mt-2 text-sm text-slate-500 font-medium">{scheme.ministry}</p>

        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
          {scheme.summary}
        </p>

        {/* Quick Highlights Bar */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs">
          <div className="bg-slate-50 p-3.5 rounded-xl">
            <span className="text-slate-400 block font-medium">Target Beneficiaries</span>
            <span className="text-slate-800 font-bold mt-0.5 block">{scheme.targetGroup}</span>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-xl">
            <span className="text-slate-400 block font-medium">Citizen Helpline</span>
            <span className="text-slate-800 font-bold mt-0.5 block">{scheme.helpline}</span>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-slate-400 block font-medium">Official Portal</span>
              <span className="text-primary-800 font-bold mt-0.5 block">National Registry</span>
            </div>
            {scheme.officialLink && (
              <a
                href={scheme.officialLink}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-primary-50 text-primary-800 hover:bg-primary-100"
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto scrollbar-none mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`shrink-0 py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 transition-all ${
              activeTab === tab.id
                ? 'border-secondary-500 text-secondary-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Panels */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Scheme Overview</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {scheme.summary}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-2">Key Highlights</h4>
              <ul className="space-y-2">
                {scheme.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <FaCheckCircle className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'benefits' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Entitlements & Coverage</h3>
            <div className="grid grid-cols-1 gap-3">
              {scheme.benefits.map((benefit, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-accent-50/50 border border-accent-100 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-slate-800 leading-relaxed font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'eligibility' && (
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-slate-900">Eligibility Criteria</h3>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {scheme.eligibilityText}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <span className="text-xs text-slate-500 font-semibold block">Age Requirements</span>
                <span className="text-sm font-bold text-slate-800 mt-1 block">
                  {scheme.eligibilityCriteria.minAge} to {scheme.eligibilityCriteria.maxAge} Years
                </span>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <span className="text-xs text-slate-500 font-semibold block">Maximum Income Limit</span>
                <span className="text-sm font-bold text-slate-800 mt-1 block">
                  {scheme.eligibilityCriteria.maxIncome > 5000000 ? 'No strict ceiling' : `Up to ₹${(scheme.eligibilityCriteria.maxIncome).toLocaleString('en-IN')}`}
                </span>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <span className="text-xs text-slate-500 font-semibold block">Gender Entitlement</span>
                <span className="text-sm font-bold text-slate-800 mt-1 block">
                  {scheme.eligibilityCriteria.gender}
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900">How to Apply (Official Process)</h3>
            <div className="relative border-l-2 border-primary-200 ml-4 pl-6 space-y-6">
              {scheme.applicationProcess.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-primary-800 text-white text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 mb-1">Step {idx + 1}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Required Supporting Documents</h3>
            <p className="text-xs text-slate-500">
              Ensure you possess self-attested photocopies of the following documents prior to submission:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {scheme.requiredDocuments.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                  <FaFileAlt className="w-4 h-4 text-secondary-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
        <div>
          <h4 className="font-bold text-base">Ready to apply or have questions?</h4>
          <p className="text-xs text-slate-400 mt-0.5">Ask our AI chatbot for assistance regarding documentation or appeal processes.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to={`/chatbot?q=${encodeURIComponent(`What is the step by step process to apply for ${scheme.name}?`)}`}
            className="px-5 py-2.5 rounded-xl bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-xs sm:text-sm transition-all"
          >
            Ask AI about this Scheme
          </Link>
          {scheme.officialLink && (
            <a
              href={scheme.officialLink}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 border border-white/20"
            >
              <span>Official Portal</span>
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemeDetail;
