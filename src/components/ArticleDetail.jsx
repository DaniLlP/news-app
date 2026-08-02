import React, { useState, useEffect } from "react";
import {
  X,
  Share2,
  Bookmark,
  ArrowLeft,
  Eye,
  MessageCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { es, enUS, ca } from "date-fns/locale";
import { useTranslation, pick, formatCount } from "../translations/i18n";
import SmartImage from "./SmartImage";

const locales = { es, en: enUS, ca };

const STANCE_STYLE = {
  supportive:
    "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300",
  critical: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
  balanced:
    "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
};

const TONE_DOT = {
  positive: "bg-emerald-500",
  critical: "bg-red-500",
  neutral: "bg-gray-400",
};

export default function ArticleDetail({
  article,
  onClose,
  relatedArticles = [],
  currentLang,
  onRelatedClick,
}) {
  const t = useTranslation(currentLang);
  const locale = locales[currentLang] || enUS;
  const [isSaved, setIsSaved] = useState(false);
  const [toast, setToast] = useState("");

  // Reset scroll when switching between articles inside the sheet
  useEffect(() => {
    const el = document.getElementById("article-sheet-scroll");
    if (el) el.scrollTop = 0;
  }, [article?.id]);

  if (!article) return null;

  const title = pick(article.title, currentLang);
  const summary = pick(article.summary, currentLang);
  const content = pick(article.content, currentLang);
  const insight = article.insight;

  const formatDate = (date) =>
    formatDistanceToNow(new Date(date), { addSuffix: true, locale });

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2200);
  };

  const handleShare = async () => {
    const shareData = { title, text: summary, url: window.location.href };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        /* user cancelled */
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(`${title}\n${window.location.href}`);
      showToast(t.article.linkCopied);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm sm:overflow-y-auto"
      onClick={onClose}
    >
      {/* Full-screen sheet on mobile; centered card on ≥sm */}
      <div className="min-h-full flex items-stretch sm:items-start justify-center sm:py-8">
        <div
          id="article-sheet-scroll"
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-slate-900 w-full sm:max-w-3xl sm:mx-4 sm:rounded-2xl shadow-2xl overflow-y-auto sm:overflow-visible h-[100dvh] sm:h-auto animate-slide-in"
        >
          {/* Sticky toolbar */}
          <div className="sticky top-0 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-gray-200 dark:border-slate-700 px-3 sm:px-6 py-2.5 pt-safe flex items-center justify-between sm:rounded-t-2xl">
            <button
              onClick={onClose}
              aria-label={t.common.back}
              className="p-2 -ml-1 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors text-gray-600 dark:text-gray-300"
            >
              <ArrowLeft size={22} />
            </button>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsSaved(!isSaved)}
                aria-pressed={isSaved}
                aria-label="Bookmark"
                className={`p-2 rounded-full transition-colors ${
                  isSaved
                    ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                    : "hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300"
                }`}
              >
                <Bookmark size={19} fill={isSaved ? "currentColor" : "none"} />
              </button>
              <button
                onClick={handleShare}
                aria-label={t.article.share}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors text-gray-600 dark:text-gray-300"
              >
                <Share2 size={19} />
              </button>
              <button
                onClick={onClose}
                aria-label={t.common.close}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors text-gray-600 dark:text-gray-300"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="px-4 sm:px-8 py-5 sm:py-8">
            {/* Category + region + date */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold">
                {(t.nav[article.category] || article.category).toUpperCase()}
              </span>
              <span className="px-2.5 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-semibold">
                {t.region[article.region] || article.region}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {formatDate(article.published)}
              </span>
            </div>

            {/* Title — fluid, never clipped */}
            <h1 className="text-2xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-3 [text-wrap:balance]">
              {title}
            </h1>

            {/* Author / source */}
            <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                  {article.author}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {t.article.source}: {article.source}
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 mb-5">
              <div className="flex items-center gap-2 p-2.5 bg-gray-50 dark:bg-slate-800 rounded-xl">
                <Eye size={16} className="text-blue-500 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900 dark:text-white leading-none">
                    {formatCount(article.views)}
                  </p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate">
                    {t.article.views}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-gray-50 dark:bg-slate-800 rounded-xl">
                <MessageCircle
                  size={16}
                  className="text-emerald-500 flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900 dark:text-white leading-none">
                    {formatCount(article.comments)}
                  </p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate">
                    {t.article.comments}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-gray-50 dark:bg-slate-800 rounded-xl">
                <Clock size={16} className="text-purple-500 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900 dark:text-white leading-none">
                    {article.readTime} min
                  </p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate">
                    {t.article.readTime}
                  </p>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <SmartImage
              src={article.image}
              alt={title}
              category={article.category}
              eager
              className="w-full aspect-[16/9] rounded-xl mb-6"
            />

            {/* Summary box */}
            <div className="mb-5 p-4 bg-blue-50 dark:bg-slate-800 rounded-xl border-l-4 border-blue-600">
              <p className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide mb-1">
                {t.article.summary}
              </p>
              <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                {summary}
              </p>
            </div>

            {/* Full content */}
            <div className="text-gray-800 dark:text-gray-200 text-base sm:text-lg leading-relaxed space-y-4 mb-6">
              {content.split("\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mb-8">
              {t.article.readMore}:{" "}
              <span className="font-semibold">{article.source}</span>
            </p>

            {/* ============ AI ANALYSIS ============ */}
            {insight && (
              <section className="rounded-2xl border border-violet-200 dark:border-violet-800 bg-gradient-to-b from-violet-50 to-white dark:from-violet-950/40 dark:to-slate-900 p-4 sm:p-6 mb-6">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <h2 className="flex items-center gap-2 text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white">
                    <Sparkles size={20} className="text-violet-500" />
                    {t.article.aiAnalysis}
                  </h2>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      STANCE_STYLE[insight.stance] || STANCE_STYLE.balanced
                    }`}
                  >
                    {t.stance[insight.stance] || insight.stance}
                  </span>
                </div>

                {/* Synthesis */}
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-5">
                  {pick(insight.synthesis, currentLang)}
                </p>

                {/* Perspectives per outlet */}
                {insight.perspectives?.length > 0 && (
                  <div className="mb-5">
                    <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2.5">
                      {t.article.whatOutletsSay}
                    </h3>
                    <ul className="space-y-2.5">
                      {insight.perspectives.map((p, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 p-3 bg-white/70 dark:bg-slate-800/70 rounded-xl"
                        >
                          <span
                            className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                              TONE_DOT[p.tone] || TONE_DOT.neutral
                            }`}
                            title={t.tone[p.tone] || p.tone}
                          />
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-gray-900 dark:text-white">
                              {p.source}
                              <span className="ml-2 font-medium text-[10px] text-gray-400 dark:text-gray-500 uppercase">
                                {t.tone[p.tone] || p.tone}
                              </span>
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              {pick(p.text, currentLang)}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Strong opinion */}
                <div className="p-4 rounded-xl bg-violet-600 dark:bg-violet-700 text-white">
                  <h3 className="text-xs font-bold uppercase tracking-wide mb-2 opacity-90">
                    {t.article.ourOpinion}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed font-medium">
                    {pick(insight.opinion, currentLang)}
                  </p>
                </div>

                <p className="mt-3 text-[11px] text-gray-500 dark:text-gray-400 italic">
                  {t.article.aiDisclaimer}
                </p>
              </section>
            )}

            {/* Related */}
            {relatedArticles.length > 0 && (
              <section className="pt-5 border-t border-gray-200 dark:border-slate-700 pb-safe">
                <h2 className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                  {t.article.related}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {relatedArticles.map((rel) => (
                    <button
                      key={rel.id}
                      onClick={() => onRelatedClick(rel)}
                      className="text-left group flex sm:block gap-3"
                    >
                      <SmartImage
                        src={rel.image}
                        alt={pick(rel.title, currentLang)}
                        category={rel.category}
                        className="w-24 h-20 sm:w-full sm:h-28 rounded-lg sm:mb-2 flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {pick(rel.title, currentLang)}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {rel.source}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-full shadow-lg z-[60]">
          {toast}
        </div>
      )}
    </div>
  );
}
