import React from "react";
import { useTranslation } from "../translations/i18n";

// Horizontally scrollable category chips — always visible with labels,
// works the same on iPhone and desktop. No hidden hamburger menus.
export default function Navigation({
  activeCategory,
  onCategoryChange,
  currentLang,
}) {
  const t = useTranslation(currentLang);

  const categories = [
    { id: "home", label: t.nav.home, icon: "\ud83c\udfe0" },
    { id: "top10", label: t.nav.top10, icon: "\ud83c\udfc6" },
    { id: "briefing", label: t.nav.briefing, icon: "\ud83e\udd16" },
    { id: "breaking", label: t.nav.breaking, icon: "\ud83d\udd34" },
    { id: "barcelona", label: t.nav.barcelona, icon: "\ud83c\udfd9\ufe0f" },
    { id: "catalonia", label: t.nav.catalonia, icon: "\ud83c\udfdb\ufe0f" },
    { id: "spain", label: t.nav.spain, icon: "\ud83c\uddea\ud83c\uddf8" },
    { id: "international", label: t.nav.international, icon: "\ud83c\udf0d" },
    { id: "finance", label: t.nav.finance, icon: "\ud83d\udcc8" },
    { id: "technology", label: t.nav.technology, icon: "\ud83d\udcbb" },
    { id: "sports", label: t.nav.sports, icon: "\u26bd" },
    { id: "science", label: t.nav.science, icon: "\ud83d\udd2c" },
    { id: "lifestyle", label: t.nav.lifestyle, icon: "\u2728" },
  ];

  return (
    <nav className="sticky top-14 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-1.5 px-3 sm:px-6 lg:px-8 py-2 overflow-x-auto scrollbar-hide snap-x">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => onCategoryChange(c.id)}
              aria-pressed={activeCategory === c.id}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold whitespace-nowrap snap-start transition-all min-h-[38px] ${
                activeCategory === c.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
              }`}
            >
              <span aria-hidden="true">{c.icon}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
