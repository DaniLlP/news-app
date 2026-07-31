import React, { useState } from 'react';
import { Search, Menu, X, Sun, Moon } from 'lucide-react';
import { useTranslation } from '../translations/i18n';

export default function Header({ 
  currentLang, 
  onLangChange, 
  isDark, 
  onThemeChange, 
  onSearch,
  mobileMenuOpen,
  onMobileMenuToggle 
}) {
  const t = useTranslation(currentLang);
  const [searchQuery, setSearchQuery] = useState('');

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'ca', name: 'Català' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 shadow-sm">
      {/* Breaking news banner */}
      <div className="bg-red-600 text-white px-4 py-2 text-center text-sm flex items-center justify-center gap-2 animate-pulse-slow">
        <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
        <span className="font-semibold">🔴 BREAKING NEWS - European markets react after ECB announcement</span>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="text-2xl font-display font-bold text-gray-900 dark:text-white">
              📰
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                NEWS HUB
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Spain • Catalonia • Barcelona
              </p>
            </div>
          </div>

          {/* Search bar - hidden on mobile */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder={t.search.placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400"
              >
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language selector */}
            <div className="hidden sm:flex items-center gap-1 border-r border-gray-200 dark:border-slate-700 pr-2 mr-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLangChange(lang.code)}
                  className={`px-2 py-1 text-xs font-semibold rounded ${
                    currentLang === lang.code
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {lang.code.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={onThemeChange}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={onMobileMenuToggle}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <form onSubmit={handleSearch} className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder={t.search.placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              <Search size={20} />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
