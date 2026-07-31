import React from 'react';
import { useTranslation } from '../translations/i18n';

export default function Navigation({ 
  activeCategory, 
  onCategoryChange, 
  currentLang,
  isMobileOpen 
}) {
  const t = useTranslation(currentLang);

  const categories = [
    { id: 'home', label: t.nav.home, icon: '🏠' },
    { id: 'breaking', label: t.nav.breaking, icon: '🔴', badge: 'LIVE' },
    { id: 'barcelona', label: t.nav.barcelona, icon: '🏙️' },
    { id: 'catalonia', label: t.nav.catalonia, icon: '🟡' },
    { id: 'spain', label: t.nav.spain, icon: '🇪🇸' },
    { id: 'international', label: t.nav.international, icon: '🌍' },
    { id: 'finance', label: t.nav.finance, icon: '📈' },
    { id: 'technology', label: t.nav.technology, icon: '💻' },
    { id: 'sports', label: t.nav.sports, icon: '⚽' },
    { id: 'science', label: t.nav.science, icon: '🔬' },
    { id: 'lifestyle', label: t.nav.lifestyle, icon: '✨' },
    { id: 'opinion', label: t.nav.opinion, icon: '💬' },
  ];

  return (
    <nav className={`
      fixed md:relative md:block
      top-0 left-0 right-0
      md:top-auto md:left-auto md:right-auto
      w-full md:w-auto
      bg-white dark:bg-slate-900
      border-b border-gray-200 dark:border-slate-700
      overflow-x-auto
      ${isMobileOpen ? 'flex flex-col' : 'hidden md:flex'}
      z-30
      md:z-auto
      mt-32 md:mt-0
      md:overflow-visible
    `}>
      <div className="flex md:flex-wrap items-center gap-1 md:gap-0 px-4 md:px-0 py-2 md:py-3 w-full">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`
              flex items-center gap-2 px-3 md:px-4 py-2 md:py-3
              text-sm font-medium whitespace-nowrap
              border-b-2 transition-all
              ${
                activeCategory === category.id
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }
            `}
          >
            <span>{category.icon}</span>
            <span className="hidden sm:inline">{category.label}</span>
            {category.badge && (
              <span className="ml-1 px-2 py-0.5 bg-red-600 text-white text-xs font-bold rounded-full animate-pulse">
                {category.badge}
              </span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
