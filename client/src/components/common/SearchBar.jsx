import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

/**
 * Reusable debounced SearchBar component
 */
export const SearchBar = ({
  placeholder = 'Search by keyword, law, scheme or section...',
  onSearch,
  initialValue = '',
  debounceTime = 300,
  className = '',
  size = 'md',
  autoFocus = false,
}) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  // Sync if initialValue changes externally
  useEffect(() => {
    setSearchTerm(initialValue);
  }, [initialValue]);

  // Debounced effect
  useEffect(() => {
    const handler = setTimeout(() => {
      if (onSearch) {
        onSearch(searchTerm.trim());
      }
    }, debounceTime);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, debounceTime, onSearch]);

  const handleClear = () => {
    setSearchTerm('');
    if (onSearch) onSearch('');
  };

  const sizeClasses = {
    sm: 'py-2 pl-9 pr-8 text-xs',
    md: 'py-3 pl-11 pr-10 text-sm',
    lg: 'py-4 pl-12 pr-12 text-base shadow-md',
  };

  const iconSizes = {
    sm: 'left-3 w-3.5 h-3.5',
    md: 'left-4 w-4 h-4',
    lg: 'left-4 w-5 h-5',
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className={`absolute top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none ${iconSizes[size] || iconSizes.md}`}>
        <FaSearch />
      </div>
      <input
        type="text"
        autoFocus={autoFocus}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-100 ${
          sizeClasses[size] || sizeClasses.md
        }`}
      />
      {searchTerm && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          aria-label="Clear search"
        >
          <FaTimes className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
