import React, { useState, useEffect } from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { es, enUS, ca } from 'date-fns/locale';
import { newsService } from '../services/newsService';
import { useTranslation, pick } from '../translations/i18n';

const locales = { es, en: enUS, ca };

const REGION_EMOJI = { local: '\ud83c\udfd9\ufe0f', national: '\ud83c\uddea\ud83c\uddf8', international: '\ud83c\udf0d' };

// AI Daily Briefing: what today's news is saying per region + our take.
// `expanded` also renders per-story AI insights for the day's top stories.
export default function AIBriefing({ currentLang, onArticleClick, expanded = false }) {
  const t = useTranslation(currentLang);
  const locale = locales[currentLang] || enUS;
  const [briefing, setBriefing] = useState(null);
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    newsService.getDailyBriefing().then(setBriefing);
    if (expanded) {
      newsService.getTrendingArticles(6).then(setTopStories);
    }
  }, [expanded]);

  if (!briefing) return null;

  const openById = async (id) => {
    const a = await newsService.getArticleById(id);
    if (a) onArticleClick(a);
  };

  return (
    <section className="rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 text-white shadow-lg">
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-1">
          <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-display font-bold">
            <Sparkles size={22} className="text-yellow-300" aria-hidden="true" />
            {t.briefing.title}
          </h2>
          <span className="text-[11px] sm:text-xs opacity-80 whitespace-nowrap">
            {t.briefing.updated}{' '}
            {formatDistanceToNow(new Date(briefing.updated), { addSuffix: true, locale })}
          </span>
        </div>
        <p className="text-xs sm:text-sm opacity-90 mb-4">{t.briefing.subtitle}</p>

        {/* Headline of the day */}
        <p className="text-base sm:text-lg font-semibold leading-snug mb-4 [text-wrap:balance]">
          {pick(briefing.headline, currentLang)}
        </p>

        {/* Per-region synthesis — tappable */}
        <div className="space-y-2 mb-4">
          {briefing.regions.map((r) => (
            <button
              key={r.region}
              onClick={() => openById(r.articleId)}
              className="w-full flex items-start gap-2.5 p-3 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 transition-colors text-left"
            >
              <span className="text-lg flex-shrink-0" aria-hidden="true">
                {REGION_EMOJI[r.region]}
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-wide opacity-80">
                  {t.region[r.region]}
                </span>
                <span className="block text-sm leading-snug">{pick(r.text, currentLang)}</span>
              </span>
              <ChevronRight size={16} className="flex-shrink-0 mt-1 opacity-70" aria-hidden="true" />
            </button>
          ))}
        </div>

        {/* Our take */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-black/25 border border-white/20">
          <h3 className="text-[11px] font-bold uppercase tracking-wide text-yellow-300 mb-1.5">
            {t.briefing.ourTake}
          </h3>
          <p className="text-sm sm:text-base leading-relaxed">
            {pick(briefing.opinion, currentLang)}
          </p>
        </div>
      </div>

      {/* Expanded mode: per-story AI insights */}
      {expanded && topStories.length > 0 && (
        <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white p-4 sm:p-6 space-y-3">
          <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            {t.briefing.whatTheySay}
          </h3>
          {topStories.map((a) => (
            <button
              key={a.id}
              onClick={() => onArticleClick(a)}
              className="w-full text-left p-3.5 rounded-xl bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              <p className="font-semibold text-sm sm:text-base line-clamp-2 leading-snug mb-1.5">
                {pick(a.title, currentLang)}
              </p>
              {a.insight && (
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-1.5">
                  {pick(a.insight.synthesis, currentLang)}
                </p>
              )}
              <span className="inline-flex items-center gap-1 text-xs font-bold text-violet-600 dark:text-violet-400">
                {t.briefing.readAnalysis}
                <ChevronRight size={13} aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
