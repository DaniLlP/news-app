import React, { useState } from "react";
import { Search, Sun, Moon, X } from "lucide-react";
import { useTranslation, pick } from "../translations/i18n";

export default function Header({
  currentLang,
  onLangChange,
  isDark,
  onThemeChange,
  onSearch,
  onClearSearch,
  searchActive,
  breakingArticle,
  onBreakingClick,
}) {
  const t = useTranslation(currentLang);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const languages = ["es", "en", "ca"];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) onSearch(searchQuery.trim());
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchOpen(false);
    onClearSearch?.();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-gray-200 dark:border-slate-700 pt-safe">
      {/* Breaking ticker — real headline, translated, tappable */}
      {breakingArticle && (
        <button
          onClick={() => onBreakingClick?.(breakingArticle)}
          className="w-full bg-red-600 text-white px-3 py-1.5 text-xs sm:text-sm flex items-center gap-2 hover:bg-red-700 transition-colors"
        >
          <span className="flex items-center gap-1 font-bold flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            {t.breaking.title}
          </span>
          <span className="truncate text-left flex-1 font-medium">
            {pick(breakingArticle.title, currentLang)}
          </span>
        </button>
      )}

      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 h-14">
          {/* Logo */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-2xl">{"\ud83d\udcf0"}</span>
            <div className="min-w-0">
              <h1 className="text-base sm:text-xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                NEWS HUB
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 truncate hidden xs:block">
                {t.appTagline}
              </p>
            </div>
          </div>

          {/* Desktop search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-md mx-4"
          >
            <div className="relative w-full">
              <input
                type="search"
                placeholder={t.search.placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                aria-label={t.search.placeholder}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
              >
                <Search size={18} />
              </button>
            </div>
          </form>

          {/* Controls */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {/* Language segmented control — always visible (key feature) */}
            <div className="flex items-center rounded-full bg-gray-100 dark:bg-slate-800 p-0.5">
              {languages.map((code) => (
                <button
                  key={code}
                  onClick={() => onLangChange(code)}
                  aria-pressed={currentLang === code}
                  className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-full transition-colors min-w-[32px] ${
                    currentLang === code
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile search toggle */}
            <button
              onClick={() =>
                searchOpen || searchActive ? clearSearch() : setSearchOpen(true)
              }
              aria-label={t.search.placeholder}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300"
            >
              {searchOpen || searchActive ? (
                <X size={20} />
              ) : (
                <Search size={20} />
              )}
            </button>

            {/* Theme toggle */}
            <button
              onClick={onThemeChange}
              aria-label="Toggle theme"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile search bar (expandable) */}
        {searchOpen && (
          <form
            onSubmit={handleSearch}
            className="md:hidden pb-3 animate-slide-in"
          >
            <div className="relative">
              <input
                type="search"
                autoFocus
                placeholder={t.search.placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 rounded-full border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                aria-label={t.search.placeholder}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                <Search size={18} />
              </button>
            </div>
          </form>
        )}
      </div>
    </header>
  );
}
