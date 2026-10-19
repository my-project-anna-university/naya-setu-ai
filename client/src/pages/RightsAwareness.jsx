import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  FaShoppingCart,
  FaHardHat,
  FaGavel,
  FaBalanceScale,
  FaFemale,
  FaHome,
  FaLaptopCode,
  FaUsers,
  FaArrowRight,
  FaBookOpen,
  FaSearch
} from 'react-icons/fa';
import Card, { CardHeader, CardBody, CardFooter } from '../components/common/Card';
import Badge from '../components/common/Badge';
import SearchBar from '../components/common/SearchBar';
import { RIGHTS_CATEGORIES_DATA } from '../data/mockData';

export const RightsAwareness = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'FaShoppingCart':
        return <FaShoppingCart className="w-6 h-6 text-secondary-500" />;
      case 'FaHardHat':
        return <FaHardHat className="w-6 h-6 text-accent-600" />;
      case 'FaGavel':
        return <FaGavel className="w-6 h-6 text-primary-800" />;
      case 'FaBalanceScale':
        return <FaBalanceScale className="w-6 h-6 text-secondary-500" />;
      case 'FaFemale':
        return <FaFemale className="w-6 h-6 text-accent-600" />;
      case 'FaHome':
        return <FaHome className="w-6 h-6 text-primary-800" />;
      case 'FaLaptopCode':
        return <FaLaptopCode className="w-6 h-6 text-secondary-500" />;
      case 'FaUsers':
        return <FaUsers className="w-6 h-6 text-accent-600" />;
      default:
        return <FaBalanceScale className="w-6 h-6 text-primary-800" />;
    }
  };

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return RIGHTS_CATEGORIES_DATA;
    const term = searchTerm.toLowerCase();

    return RIGHTS_CATEGORIES_DATA.filter((cat) => {
      const matchName = cat.name.toLowerCase().includes(term);
      const matchDesc = cat.description.toLowerCase().includes(term);
      const matchLaws = cat.lawsGoverning.some((law) => law.toLowerCase().includes(term));
      const matchSections = cat.sections.some(
        (sec) => sec.title.toLowerCase().includes(term) || sec.content.toLowerCase().includes(term)
      );
      return matchName || matchDesc || matchLaws || matchSections;
    });
  }, [searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Badge variant="primary" size="lg" className="mb-3">
          Know Your Legal Rights
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Citizen Rights & Legal Literacy Hub
        </h1>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          Statutory protections simplified into actionable guidance. Learn what laws protect you in consumer disputes, workplace conflicts, police interactions, and matrimonial proceedings.
        </p>

        {/* Global Rights Search */}
        <div className="mt-8 max-w-xl mx-auto">
          <SearchBar
            placeholder="Search rights by law, section or scenario (e.g. arrest, MRP, eviction, salary)..."
            onSearch={setSearchTerm}
            size="lg"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCategories.map((category) => (
          <Link key={category.id} to={`/rights/${category.id}`} className="group block">
            <Card
              hoverEffect={true}
              className="h-full flex flex-col justify-between border-slate-200 bg-white group-hover:border-primary-400 group-hover:shadow-card transition-all"
            >
              <div>
                {/* Icon & Tagline */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">
                    {category.sections.length} Key Rights
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-800 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs font-semibold text-secondary-600 mt-1">
                  {category.tagline}
                </p>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {category.description}
                </p>

                {/* Primary Act Governing */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Governing Code:
                  </span>
                  <p className="text-xs text-slate-700 font-medium truncate">
                    {category.lawsGoverning[0]}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary-800 group-hover:text-secondary-600 transition-colors">
                <span>Explore Full Guide</span>
                <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* No results fallback */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <FaBookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800">No matching rights category found</h3>
          <p className="text-xs text-slate-500 mt-1">Try searching for terms like "police", "tenant", "salary", or "cyber".</p>
          <button
            type="button"
            onClick={() => setSearchTerm('')}
            className="mt-4 px-4 py-2 text-xs font-bold text-primary-800 bg-primary-50 rounded-lg hover:bg-primary-100"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default RightsAwareness;
