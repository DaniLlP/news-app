import React from 'react';
import { Home, Trophy, Sparkles, TrendingUp } from 'lucide-react';
import { useTranslation } from '../translations/i18n';

// iPhone-style bottom tab bar (mobile only) with safe-area padding.
export default function BottomNav({ activeCategory, onCategoryChange, currentLang }) {
  const t = useTranslation(currentLang);

  const tabs = [
    { id: 'home', label: t.nav.home, Icon: Home },
    { id: 'top10', label: t.nav.top10, Icon: Trophy },
    { id: 'briefing', label: t.nav.briefing, Icon: Sparkles },
    { id: 'finance', label: t.nav.finance, Icon: TrendingUp },
  ];

  return (
    <nav
      aria-label="Primary"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-t border-gray-200 dark:border-slate-700 pb-safe"
    >
      <div className="grid grid-cols-4">
        {tabs.map(({ id, label, Icon }) => {
          const active = activeCategory === id;
          return (
            <button
              key={id}
              onClick={() => {
                onCategoryChange(id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-pressed={active}
              className={`flex flex-col items-center gap-0.5 py-2 min-h-[52px] transition-colors ${
                active
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <Icon size={21} strokeWidth={active ? 2.5 : 2} aria-hidden="true" />
              <span className={`text-[10px] leading-none ${active ? 'font-bold' : 'font-medium'}`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
