import React, { useState, useMemo } from 'react';
import {
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaDirections,
  FaClock,
  FaSearch,
  FaFilter,
  FaCheckCircle,
  FaGavel,
  FaBuilding
} from 'react-icons/fa';
import Card, { CardHeader, CardBody, CardFooter } from '../components/common/Card';
import Badge from '../components/common/Badge';
import SearchBar from '../components/common/SearchBar';
import { LEGAL_AID_CENTERS, INDIAN_STATES } from '../data/mockData';

export const LegalAidDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const types = ['All', 'DLSA', 'TLSC', 'NGO'];

  const filteredCenters = useMemo(() => {
    return LEGAL_AID_CENTERS.filter((center) => {
      const matchSearch =
        searchTerm === '' ||
        center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        center.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        center.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        center.services.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchState =
        selectedState === 'All' || center.state === selectedState;

      const matchType =
        selectedType === 'All' || center.type === selectedType;

      return matchSearch && matchState && matchType;
    });
  }, [searchTerm, selectedState, selectedType]);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedState('All');
    setSelectedType('All');
  };

  const getBadgeVariant = (type) => {
    if (type === 'DLSA') return 'primary';
    if (type === 'TLSC') return 'saffron';
    return 'green';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Badge variant="green" size="lg" className="mb-3">
          Constitutional Free Legal Aid (Article 39A)
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          District Legal Services Authority (DLSA) Directory
        </h1>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          Locate free legal aid counsel, Taluk committees, and mediation clinics across Indian district courts. Low-income families, women, children, and persons in custody are entitled to 100% free defense representation.
        </p>

        {/* Toll-Free National Legal Aid Helpline Alert Box */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-primary-900 text-white px-5 py-3 rounded-2xl shadow-md text-xs sm:text-sm">
          <span className="flex items-center gap-2 font-bold text-secondary-400">
            <FaPhoneAlt className="w-3.5 h-3.5 animate-bounce" />
            National Legal Aid Toll-Free Helpline:
          </span>
          <a href="tel:15100" className="text-base sm:text-lg font-extrabold text-white hover:text-secondary-400 underline">
            15100 (24x7)
          </a>
          <span className="text-slate-300 hidden sm:inline">| Free Legal Advice in 12 Indian Languages</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Bar */}
          <div className="md:col-span-6">
            <SearchBar
              placeholder="Search by center name, city or service (e.g. Tis Hazari, Mumbai, bail, mediation)..."
              onSearch={setSearchTerm}
            />
          </div>

          {/* State Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full rounded-xl border border-slate-300 py-3 px-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-primary-500 bg-white"
            >
              <option value="All">All States / UTs</option>
              {INDIAN_STATES.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full rounded-xl border border-slate-300 py-3 px-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-primary-500 bg-white"
            >
              <option value="All">All Types (DLSA / TLSC / NGO)</option>
              <option value="DLSA">DLSA (District Authority)</option>
              <option value="TLSC">TLSC (Taluk Committee)</option>
              <option value="NGO">Legal Aid NGO</option>
            </select>
          </div>
        </div>

        {/* Active Filter Indicators */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span>Found <strong className="text-slate-800">{filteredCenters.length}</strong> legal aid authorities</span>
          {(selectedState !== 'All' || selectedType !== 'All' || searchTerm) && (
            <button
              type="button"
              onClick={handleReset}
              className="text-secondary-600 hover:text-secondary-700 font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Centers Grid */}
      {filteredCenters.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <FaBuilding className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold text-slate-700">No Legal Aid Centers matching criteria</h3>
          <p className="text-xs text-slate-500">Try choosing "All States" or call national legal helpline 15100 directly.</p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-2 px-4 py-2 text-xs font-bold text-primary-800 bg-primary-50 rounded-lg hover:bg-primary-100"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCenters.map((center) => {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${center.name}, ${center.address}`)}`;

            return (
              <Card key={center.id} hoverEffect={true} className="flex flex-col justify-between bg-white border-slate-200">
                <div>
                  {/* Badge & City */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant={getBadgeVariant(center.type)} size="sm">
                      {center.type === 'DLSA' ? 'District Authority' : center.type === 'TLSC' ? 'Taluk Committee' : 'Empaneled NGO'}
                    </Badge>
                    <span className="text-xs font-bold text-slate-500">
                      {center.city}, {center.state}
                    </span>
                  </div>

                  {/* Center Name */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {center.name}
                  </h3>

                  {/* Address */}
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed flex items-start gap-2">
                    <span className="text-secondary-500 font-bold shrink-0 mt-0.5">📍</span>
                    <span>{center.address}</span>
                  </p>

                  {/* Phone & Timings */}
                  <div className="mt-4 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt className="w-3 h-3 text-primary-800 shrink-0" />
                      <a href={`tel:${center.phone.split('/')[0].trim()}`} className="hover:text-primary-800 font-semibold">
                        {center.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="text-[11px] text-slate-500">{center.timings}</span>
                    </div>
                  </div>

                  {/* Pro-Bono Services List */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Free Services Provided:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {center.services.map((svc, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] bg-slate-50 text-slate-700 px-2.5 py-0.5 rounded-full border border-slate-200 font-medium"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Directions & Call Actions */}
                <CardFooter className="mt-6 pt-3">
                  <a
                    href={`tel:${center.phone.split('/')[0].trim()}`}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <FaPhoneAlt className="w-3 h-3 text-secondary-500" />
                    <span>Call Center</span>
                  </a>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1.5 rounded-lg bg-accent-600 hover:bg-accent-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
                  >
                    <FaDirections className="w-3 h-3" />
                    <span>Get Directions</span>
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LegalAidDirectory;
