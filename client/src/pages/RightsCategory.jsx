import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaChevronDown,
  FaChevronUp,
  FaRobot,
  FaGavel,
  FaBalanceScale,
  FaFileContract,
  FaQuestionCircle,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaShareAlt
} from 'react-icons/fa';
import Badge from '../components/common/Badge';
import { RIGHTS_CATEGORIES_DATA, SCHEMES_DATA } from '../data/mockData';
import toast from 'react-hot-toast';

export const RightsCategory = () => {
  const { category: categoryId } = useParams();
  const category = RIGHTS_CATEGORIES_DATA.find((c) => c.id === categoryId) || RIGHTS_CATEGORIES_DATA[0];

  // Accordion state
  const [openSections, setOpenSections] = useState({ 0: true });
  const [openFaqs, setOpenFaqs] = useState({ 0: true });

  const toggleSection = (idx) => {
    setOpenSections((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const toggleFaq = (idx) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: category.name,
        text: category.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  // Find matching schemes
  const relatedSchemesList = SCHEMES_DATA.filter((s) =>
    category.relatedSchemes?.includes(s.id)
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
        <Link to="/" className="hover:text-primary-800">Home</Link>
        <span>/</span>
        <Link to="/rights" className="hover:text-primary-800">Legal Rights Hub</Link>
        <span>/</span>
        <span className="text-slate-800 font-semibold">{category.name}</span>
      </nav>

      {/* Header Banner */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <Badge variant="primary" size="md">
            {category.tagline}
          </Badge>
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <FaShareAlt className="w-3.5 h-3.5" />
            <span>Share Guide</span>
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          {category.name}
        </h1>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          {category.description}
        </p>

        {/* Governing Statutes */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <FaGavel className="w-3.5 h-3.5 text-secondary-500" />
            Statutory Enactments Governing This Domain:
          </h4>
          <div className="flex flex-wrap gap-2">
            {category.lawsGoverning.map((law, idx) => (
              <span
                key={idx}
                className="text-xs bg-slate-100 text-slate-800 px-3 py-1 rounded-lg border border-slate-200 font-medium"
              >
                {law}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Accordion of Rights & FAQs */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Detailed Rights Accordions */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <FaBalanceScale className="text-primary-800" />
              Key Statutory Rights & Legal Protections
            </h2>
            <div className="space-y-3">
              {category.sections.map((sec, idx) => {
                const isOpen = openSections[idx];
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleSection(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-slate-900 text-sm sm:text-base">
                        {sec.title}
                      </span>
                      <span className="text-slate-400">
                        {isOpen ? <FaChevronUp className="w-3.5 h-3.5" /> : <FaChevronDown className="w-3.5 h-3.5" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 space-y-3">
                        <p>{sec.content}</p>
                        {sec.penalty && (
                          <div className="p-3 bg-red-50/70 border border-red-200 rounded-xl text-xs text-red-800 font-medium">
                            <strong>Legal Consequence / Penalty:</strong> {sec.penalty}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <FaQuestionCircle className="text-secondary-500" />
              Frequently Asked Legal Questions
            </h2>
            <div className="space-y-3">
              {category.faqs.map((faq, idx) => {
                const isOpen = openFaqs[idx];
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50"
                    >
                      <span className="font-semibold text-slate-800 text-xs sm:text-sm">
                        {faq.q}
                      </span>
                      <span className="text-slate-400 shrink-0">
                        {isOpen ? <FaChevronUp className="w-3 h-3" /> : <FaChevronDown className="w-3 h-3" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Sidebar: Quick Actions & Schemes */}
        <div className="space-y-6">
          {/* Ask AI Card */}
          <div className="bg-primary-900 text-white rounded-2xl p-6 shadow-md space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-secondary-400 text-xl">
              <FaRobot />
            </div>
            <h3 className="text-lg font-bold">Have a specific dispute?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Describe your exact situation to our AI assistant. Get section-specific guidance under {category.name}.
            </p>
            <Link
              to={`/chatbot?q=${encodeURIComponent(`I have a question about ${category.name}: `)}`}
              className="block w-full text-center py-2.5 px-4 rounded-xl bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-xs transition-all shadow"
            >
              Consult Nyaya AI
            </Link>
          </div>

          {/* Draft Legal Notice Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-primary-800 font-bold text-sm">
              <FaFileContract className="w-4 h-4 text-secondary-500" />
              <span>Take Legal Action</span>
            </div>
            <p className="text-xs text-slate-600">
              Need to send a formal legal demand letter, file an RTI or lodge a police complaint for this issue?
            </p>
            <Link
              to="/documents"
              className="block text-center py-2 px-3 rounded-lg border border-primary-300 text-primary-800 hover:bg-primary-50 text-xs font-bold transition-colors"
            >
              Open Document Generator
            </Link>
          </div>

          {/* Related Government Schemes */}
          {relatedSchemesList.length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Related Welfare Schemes:
              </h4>
              <div className="space-y-2">
                {relatedSchemesList.map((scheme) => (
                  <Link
                    key={scheme.id}
                    to={`/schemes/${scheme.id}`}
                    className="block p-3 rounded-xl border border-slate-100 hover:border-accent-400 bg-slate-50 hover:bg-accent-50/30 transition-all text-xs"
                  >
                    <p className="font-bold text-slate-800">{scheme.name}</p>
                    <p className="text-[11px] text-accent-700 mt-0.5">{scheme.category}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightsCategory;
