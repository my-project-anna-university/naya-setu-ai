import React, { useState, useMemo } from 'react';
import {
  FaNewspaper,
  FaCalendarAlt,
  FaClock,
  FaTag,
  FaExternalLinkAlt,
  FaSearch,
  FaBalanceScale
} from 'react-icons/fa';
import Card, { CardHeader, CardBody, CardFooter } from '../components/common/Card';
import Badge from '../components/common/Badge';
import SearchBar from '../components/common/SearchBar';
import Modal from '../components/common/Modal';
import { LEGAL_NEWS } from '../data/mockData';

export const LegalNews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = [
    'All',
    'Criminal Justice',
    'Consumer Rights',
    'Constitutional Law',
    'Legal Aid & Technology',
    'Property Law'
  ];

  const filteredNews = useMemo(() => {
    return LEGAL_NEWS.filter((item) => {
      const matchSearch =
        searchTerm === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Badge variant="primary" size="lg" className="mb-3">
          Judicial & Statutory Gazette
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Legal News & Landmark Indian Precedents
        </h1>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          Stay informed on Supreme Court and High Court judgments, new administrative gazettes, consumer rights directives, and criminal justice reforms.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-xl mx-auto">
          <SearchBar
            placeholder="Search news by topic, statute or keyword (e.g. BNS, CCPA, RERA, privacy)..."
            onSearch={setSearchTerm}
            size="lg"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-primary-800 text-white shadow'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredNews.map((article) => (
          <Card
            key={article.id}
            hoverEffect={true}
            onClick={() => setActiveArticle(article)}
            className="flex flex-col justify-between bg-white border-slate-200 cursor-pointer"
          >
            <div>
              {/* Category & Read Time */}
              <div className="flex items-center justify-between gap-2 mb-3 text-xs">
                <Badge variant="saffron" size="sm">
                  {article.category}
                </Badge>
                <span className="text-slate-400 flex items-center gap-1 font-medium">
                  <FaClock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-primary-800 transition-colors">
                {article.title}
              </h3>

              {/* Date & Source */}
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="w-3 h-3" />
                  {article.date}
                </span>
                <span>•</span>
                <span className="font-medium text-slate-600">{article.source}</span>
              </div>

              {/* Summary */}
              <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                {article.summary}
              </p>

              {/* Tags */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                {article.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Read Article Link */}
            <CardFooter className="mt-5 pt-3">
              <span className="text-xs font-bold text-primary-800 hover:text-secondary-600 transition-colors flex items-center gap-1.5">
                <span>Read Full Analysis</span>
                <FaExternalLinkAlt className="w-2.5 h-2.5" />
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* No News Found */}
      {filteredNews.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <FaNewspaper className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800">No news articles found</h3>
          <p className="text-xs text-slate-500 mt-1">Try modifying your search or select "All" categories.</p>
        </div>
      )}

      {/* Article Detail Modal */}
      {activeArticle && (
        <Modal
          isOpen={!!activeArticle}
          onClose={() => setActiveArticle(null)}
          title={activeArticle.title}
          subtitle={`${activeArticle.date} • Source: ${activeArticle.source} • ${activeArticle.category}`}
          footer={
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-wrap gap-1.5">
                {activeArticle.tags.map((t, idx) => (
                  <span key={idx} className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                    #{t}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-primary-800 text-white rounded-lg text-xs font-bold hover:bg-primary-900"
              >
                Close
              </button>
            </div>
          }
        >
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <div className="p-4 bg-primary-50 rounded-xl border border-primary-100 text-primary-900 font-medium text-xs sm:text-sm">
              <strong>Key Takeaway: </strong> {activeArticle.summary}
            </div>
            <p className="whitespace-pre-line">{activeArticle.content}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default LegalNews;
