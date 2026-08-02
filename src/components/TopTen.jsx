import React, { useState, useEffect } from 'react';
import { Eye, MessageCircle, Flame, TrendingUp } from 'lucide-react';
import { newsService } from '../services/newsService';
import { useTranslation, pick, formatCount } from '../translations/i18n';
import SmartImage from './SmartImage';

const REGIONS = ['local', 'national', 'international'];

export default function TopTen({ currentLang, onArticleClick, compact = false }) {
  const t = useTranslation(currentLang);
  const [region, setRegion] = useState('local');
  const [sortBy, setSortBy] = useState('popular');
  const [items, setItems] = useState([]);

  useEffect(() => {
    let alive = true;
    newsService.getTop10(region, sortBy).then((data) => {
      if (alive) setItems(data);
    });
    return () => {
      alive = false;
    };
  }, [region, sortBy]);

  const list = compact ? items.slice(0, 5) : items;

  return (
    <section className="rounded-2xl bg-white dark:bg-slate-800 shadow overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 pb-0">
        <div className="flex items-center gap-2 mb-1">
          <Flame size={20} className="text-orange-500" aria-hidden="true" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white">
            {t.top10.title}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">
          {t.top10.subtitle}
        </p>

        {/* Region tabs */}
        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide -mx-1 px-1">
          {REGIONS.map((r) => (
            <button
              key={r}
              onClick={() => setRegion(r)}
              aria-pressed={region === r}
              className={`px-3.5 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors min-h-[36px] ${
                region === r
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300'
              }`}
            >
              {t.top10[r]}
            </button>
          ))}

          {/* Sort toggle */}
          <div className="ml-auto flex items-center rounded-full bg-gray-100 dark:bg-slate-700 p-0.5 flex-shrink-0">
            <button
              onClick={() => setSortBy('popular')}
              aria-pressed={sortBy === 'popular'}
              title={t.top10.byPopular}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${
                sortBy === 'popular'
                  ? 'bg-white dark:bg-slate-900 text-orange-500 shadow'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <TrendingUp size={13} />
              <span className="hidden sm:inline">{t.top10.byPopular}</span>
            </button>
            <button
              onClick={() => setSortBy('comments')}
              aria-pressed={sortBy === 'comments'}
              title={t.top10.byComments}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${
                sortBy === 'comments'
                  ? 'bg-white dark:bg-slate-900 text-emerald-500 shadow'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <MessageCircle size={13} />
              <span className="hidden sm:inline">{t.top10.byComments}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Ranked list */}
      <ol className="divide-y divide-gray-100 dark:divide-slate-700 mt-3">
        {list.map((a, idx) => (
          <li key={a.id}>
            <button
              onClick={() => onArticleClick(a)}
              className="w-full flex items-center gap-3 px-4 sm:px-5 py-3 text-left hover:bg-gray-50 dark:hover:bg-slate-700/60 active:bg-gray-100 dark:active:bg-slate-700 transition-colors group"
            >
              {/* Rank */}
              <span
                className={`w-8 text-center text-xl font-display font-bold flex-shrink-0 ${
                  idx === 0
                    ? 'text-amber-500'
                    : idx === 1
                    ? 'text-gray-400'
                    : idx === 2
                    ? 'text-orange-400'
                    : 'text-gray-300 dark:text-slate-600'
                }`}
              >
                {idx + 1}
              </span>

              {/* Thumb */}
              <SmartImage
                src={a.image}
                alt=""
                category={a.category}
                className="w-14 h-14 rounded-lg flex-shrink-0 hidden xs:block"
              />

              {/* Text */}
              <span className="flex-1 min-w-0">
                <span className="block font-semibold text-sm sm:text-base text-gray-900 dark:text-white line-clamp-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {pick(a.title, currentLang)}
                </span>
                <span className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span className="truncate">{a.source}</span>
                  <span className="flex items-center gap-1 flex-shrink-0">
                    <Eye size={12} aria-hidden="true" />
                    {formatCount(a.views)}
                  </span>
                  <span
                    className={`flex items-center gap-1 flex-shrink-0 ${
                      sortBy === 'comments' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''
                    }`}
                  >
                    <MessageCircle size={12} aria-hidden="true" />
                    {formatCount(a.comments)}
                  </span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
