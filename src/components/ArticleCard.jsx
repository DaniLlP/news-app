import React from "react";
import { formatDistanceToNow } from "date-fns";
import { es, enUS, ca } from "date-fns/locale";
import { Eye, MessageCircle } from "lucide-react";
import { useTranslation, pick, formatCount } from "../translations/i18n";
import SmartImage from "./SmartImage";

const locales = { es, en: enUS, ca };

const CATEGORY_COLOR = {
  breaking: "from-red-600 to-red-500",
  barcelona: "from-blue-600 to-blue-500",
  catalonia: "from-amber-500 to-yellow-400",
  spain: "from-purple-600 to-purple-500",
  international: "from-emerald-600 to-green-500",
  finance: "from-green-600 to-emerald-500",
  technology: "from-sky-600 to-blue-500",
  sports: "from-orange-600 to-orange-500",
  science: "from-violet-600 to-violet-500",
  lifestyle: "from-pink-600 to-pink-500",
};

export default function ArticleCard({
  article,
  variant = "default",
  currentLang,
  onClick,
}) {
  const t = useTranslation(currentLang);
  const locale = locales[currentLang] || enUS;

  const title = pick(article.title, currentLang);
  const summary = pick(article.summary, currentLang);
  const catLabel = t.nav[article.category] || article.category;
  const gradient =
    CATEGORY_COLOR[article.category] || "from-gray-600 to-gray-500";

  const formatDate = (date) =>
    formatDistanceToNow(new Date(date), { addSuffix: true, locale });

  const Stats = ({ className = "" }) => (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="flex items-center gap-1">
        <Eye size={13} aria-hidden="true" />
        {formatCount(article.views)}
      </span>
      <span className="flex items-center gap-1">
        <MessageCircle size={13} aria-hidden="true" />
        {formatCount(article.comments)}
      </span>
    </span>
  );

  if (variant === "featured") {
    return (
      <article
        onClick={onClick}
        className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl active:scale-[0.99] transition-all duration-300"
      >
        <div className="relative">
          <SmartImage
            src={article.image}
            alt={title}
            category={article.category}
            eager
            className="w-full aspect-[16/10] sm:aspect-[21/10]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

          <div
            className={`absolute top-3 left-3 px-3 py-1 rounded-full font-bold text-white text-xs bg-gradient-to-r ${gradient}`}
          >
            {catLabel.toUpperCase()}
          </div>
          {article.category === "breaking" && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-red-600 text-white px-2.5 py-1 rounded-full text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {t.breaking.live}
            </div>
          )}

          {/* Text over image — fluid sizes, never cut awkwardly */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h2 className="font-display font-bold text-white text-xl sm:text-3xl leading-snug mb-2 [text-wrap:balance]">
              {title}
            </h2>
            <p className="text-gray-200 text-sm sm:text-base line-clamp-2 mb-2">
              {summary}
            </p>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
              <span className="font-semibold">{article.source}</span>
              <span aria-hidden="true">•</span>
              <span>{formatDate(article.published)}</span>
              <Stats className="ml-auto" />
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article
        onClick={onClick}
        className="group cursor-pointer flex gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 active:bg-gray-100 dark:active:bg-slate-700 transition-colors"
      >
        <SmartImage
          src={article.image}
          alt={title}
          category={article.category}
          className="flex-shrink-0 w-24 h-20 sm:w-28 sm:h-24 rounded-lg"
        />
        <div className="flex-1 min-w-0 flex flex-col">
          <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-auto pt-1.5 text-xs text-gray-500 dark:text-gray-400">
            <span className="font-medium truncate">{article.source}</span>
            <span aria-hidden="true">•</span>
            <span className="whitespace-nowrap">
              {formatDate(article.published)}
            </span>
          </div>
        </div>
      </article>
    );
  }

  // Default card
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow hover:shadow-lg active:scale-[0.99] transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative">
        <SmartImage
          src={article.image}
          alt={title}
          category={article.category}
          className="w-full aspect-[16/9]"
        />
        <div
          className={`absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full font-bold text-white text-[11px] bg-gradient-to-r ${gradient}`}
        >
          {catLabel.toUpperCase()}
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white line-clamp-3 mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3 flex-1">
          {summary}
        </p>
        <div className="flex items-center justify-between gap-2 text-xs text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-100 dark:border-slate-700">
          <span className="flex items-center gap-2 min-w-0">
            <span className="font-semibold truncate">{article.source}</span>
            <span className="whitespace-nowrap">
              {formatDate(article.published)}
            </span>
          </span>
          <Stats />
        </div>
      </div>
    </article>
  );
}
