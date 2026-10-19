import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaFilter,
  FaHandHoldingHeart,
  FaCheckCircle,
  FaBookmark,
  FaRegBookmark,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaSlidersH,
  FaUndo
} from 'react-icons/fa';
import Card, { CardHeader, CardBody, CardFooter } from '../components/common/Card';
import Badge from '../components/common/Badge';
import SearchBar from '../components/common/SearchBar';
import { SCHEMES_DATA, INDIAN_STATES } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

export const SchemesFinder = () => {
  const { user, toggleSaveScheme } = useAuth();

  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedState, setSelectedState] = useState('All');

  // Eligibility Calculator Inputs
  const [showEligibilityDrawer, setShowEligibilityDrawer] = useState(false);
  const [userAge, setUserAge] = useState('');
  const [userGender, setUserGender] = useState('All');
  const [userIncome, setUserIncome] = useState('');
  const [userCategory, setUserCategory] = useState('All');

  const categories = [
    'All',
    'Healthcare',
    'Legal Justice',
    'Agriculture & Farmers',
    'Housing',
    'Women & Child',
    'Business & Self Employment'
  ];

  // Calculate Match % based on user criteria
  const calculateMatch = (scheme) => {
    let score = 100;
    let criteriaCount = 0;

    if (userAge) {
      criteriaCount++;
      const age = parseInt(userAge, 10);
      if (age < scheme.eligibilityCriteria.minAge || age > scheme.eligibilityCriteria.maxAge) {
        score -= 40;
      }
    }

    if (userIncome) {
      criteriaCount++;
      const income = parseInt(userIncome, 10);
      if (income > scheme.eligibilityCriteria.maxIncome) {
        score -= 40;
      }
    }

    if (userGender !== 'All' && scheme.eligibilityCriteria.gender !== 'All') {
      criteriaCount++;
      if (scheme.eligibilityCriteria.gender !== userGender) {
        score -= 50;
      }
    }

    if (criteriaCount === 0) return null; // No eligibility test run yet
    return Math.max(10, Math.min(score, 100));
  };

  const filteredSchemes = useMemo(() => {
    return SCHEMES_DATA.filter((scheme) => {
      // Search text filter
      const matchesSearch =
        searchTerm === '' ||
        scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.ministry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.summary.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory =
        selectedCategory === 'All' || scheme.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedState('All');
    setUserAge('');
    setUserGender('All');
    setUserIncome('');
    setUserCategory('All');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Banner */}
      <div className="mb-8">
        <Badge variant="green" size="lg" className="mb-3">
          Direct Benefit Welfare Portal
        </Badge>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Government Schemes & Citizen Entitlements
            </h1>
            <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">
              Explore Central & State government schemes, verify eligibility criteria, and find required documentation to claim direct financial support and benefits.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowEligibilityDrawer(!showEligibilityDrawer)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-bold text-sm shadow-md transition-all shrink-0"
          >
            <FaSlidersH className="w-4 h-4" />
            <span>{showEligibilityDrawer ? 'Hide Eligibility Form' : 'Check My Eligibility'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar: Filter & Eligibility Check Form */}
        <div className={`lg:col-span-1 space-y-6 ${showEligibilityDrawer ? 'block' : 'hidden lg:block'}`}>
          {/* Eligibility Calculator Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                <FaFilter className="text-primary-800" />
                Eligibility Calculator
              </h3>
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs text-secondary-600 hover:text-secondary-700 flex items-center gap-1 font-semibold"
              >
                <FaUndo className="w-3 h-3" />
                Reset
              </button>
            </div>

            <form className="mt-4 space-y-4 text-xs">
              {/* Age */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Your Age (Years)</label>
                <input
                  type="number"
                  min="0"
                  max="120"
                  value={userAge}
                  onChange={(e) => setUserAge(e.target.value)}
                  placeholder="e.g., 28"
                  className="w-full rounded-lg border border-slate-200 p-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary-500"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Gender</label>
                <select
                  value={userGender}
                  onChange={(e) => setUserGender(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 p-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary-500"
                >
                  <option value="All">All Genders</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </div>

              {/* Annual Household Income */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Annual Household Income (₹)</label>
                <input
                  type="number"
                  value={userIncome}
                  onChange={(e) => setUserIncome(e.target.value)}
                  placeholder="e.g., 200000"
                  className="w-full rounded-lg border border-slate-200 p-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary-500"
                />
                <p className="text-[10px] text-slate-400 mt-1">Leave blank if unsure</p>
              </div>

              {/* State Filter */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">State / UT</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 p-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary-500"
                >
                  <option value="All">All States / Central</option>
                  {INDIAN_STATES.map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              {/* Sector / Category Filter */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Scheme Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 p-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary-500"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </form>
          </div>
        </div>

        {/* Right Main Content: Schemes Grid */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search bar & Category tags */}
          <div className="space-y-4">
            <SearchBar
              placeholder="Search schemes by name, keyword (e.g. Ayushman, Kisan, Awas, Mudra)..."
              onSearch={setSearchTerm}
              size="lg"
            />

            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-secondary-500 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Result Count */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>Showing <strong className="text-slate-800">{filteredSchemes.length}</strong> matching welfare schemes</span>
            {(userAge || userIncome) && (
              <span className="text-accent-600 font-bold flex items-center gap-1">
                <FaCheckCircle className="w-3 h-3" /> Eligibility algorithm active
              </span>
            )}
          </div>

          {/* Schemes Grid */}
          {filteredSchemes.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
              <FaHandHoldingHeart className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-700">No matching schemes found</h3>
              <p className="text-xs text-slate-500">Try modifying your search terms or clearing the eligibility filters.</p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-2 px-4 py-2 text-xs font-bold text-primary-800 bg-primary-50 rounded-lg hover:bg-primary-100"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSchemes.map((scheme) => {
                const matchScore = calculateMatch(scheme);
                const isSaved = user?.savedSchemes?.includes(scheme.id);

                return (
                  <Card key={scheme.id} hoverEffect={true} className="flex flex-col justify-between border-slate-200 bg-white">
                    <div>
                      {/* Top Badges & Save button */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <Badge variant="primary" size="sm">
                            {scheme.category}
                          </Badge>
                          {matchScore !== null && (
                            <Badge
                              variant={matchScore >= 80 ? 'green' : matchScore >= 50 ? 'saffron' : 'red'}
                              size="sm"
                            >
                              {matchScore}% Match
                            </Badge>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleSaveScheme(scheme.id)}
                          className="p-1.5 text-slate-400 hover:text-secondary-500 transition-colors"
                          title={isSaved ? 'Remove from bookmarks' : 'Save scheme'}
                        >
                          {isSaved ? (
                            <FaBookmark className="w-4 h-4 text-secondary-500" />
                          ) : (
                            <FaRegBookmark className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Title & Ministry */}
                      <Link to={`/schemes/${scheme.id}`} className="block group">
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-primary-800 transition-colors line-clamp-2">
                          {scheme.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">{scheme.ministry}</p>
                      </Link>

                      {/* Summary */}
                      <p className="mt-3 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {scheme.summary}
                      </p>

                      {/* Benefits Snapshot */}
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Key Benefits:
                        </p>
                        <ul className="space-y-1 text-xs text-slate-700">
                          {scheme.benefits.slice(0, 2).map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-1.5">
                              <span className="text-accent-600 font-bold shrink-0">✓</span>
                              <span className="line-clamp-1">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <CardFooter className="mt-5 pt-3">
                      <span className="text-[11px] text-slate-500 font-medium">
                        Max Income: {scheme.eligibilityCriteria.maxIncome > 5000000 ? 'No Limit' : `₹${(scheme.eligibilityCriteria.maxIncome / 100000).toFixed(1)}L/yr`}
                      </span>
                      <Link
                        to={`/schemes/${scheme.id}`}
                        className="px-3.5 py-1.5 rounded-lg bg-primary-800 hover:bg-primary-900 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <span>View Details</span>
                        <FaExternalLinkAlt className="w-2.5 h-2.5" />
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemesFinder;
