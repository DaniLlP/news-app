import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { es, enUS, ca } from 'date-fns/locale';
import { Share2, Bookmark } from 'lucide-react';
import { useTranslation } from '../translations/i18n';

const locales = { es, en: enUS, ca };

export default function ArticleCard({ 
  article, 
  variant = 'default',
  currentLang,
  onClick 
}) {
  const t = useTranslation(currentLang);
  const locale = locales[currentLang] || enUS;

  const getCategoryColor = (category) => {
    const colors = {
      breaking: 'from-red-600 to-red-500',
      barcelona: 'from-blue-600 to-blue-500',
      catalonia: 'from-yellow-500 to-yellow-400',
      spain: 'from-purple-600 to-purple-500',
      international: 'from-green-600 to-green-500',
      finance: 'from-emerald-600 to-emerald-500',
      technology: 'from-blue-600 to-blue-500',
      sports: 'from-orange-600 to-orange-500',
      science: 'from-violet-600 to-violet-500',
      lifestyle: 'from-pink-600 to-pink-500',
      opinion: 'from-indigo-600 to-indigo-500',
    };
    return colors[category] || 'from-gray-600 to-gray-500';
  };

  const formatDate = (date) => {
    return formatDistanceToNow(new Date(date), { 
      addSuffix: true,
      locale 
    });
  };

  if (variant === 'featured') {
    return (
      <article 
        onClick={onClick}
        className="group cursor-pointer rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {/* Featured image */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Category badge */}
          <div className={`absolute top-4 left-4 px-4 py-2 rounded-full font-bold text-white text-sm bg-gradient-to-r ${getCategoryColor(article.category)}`}>
            {article.category.toUpperCase()}
          </div>

          {/* Breaking indicator */}
          {article.category === 'breaking' && (
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              {t.breaking.live}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {article.title}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {article.summary}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-3">
              <span className="font-semibold">{article.source}</span>
              <span>•</span>
              <span>{formatDate(article.published)}</span>
            </div>
            <span>{article.readTime} {t.article.minutes}</span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article
        onClick={onClick}
        className="group cursor-pointer flex gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
      >
        {/* Thumbnail */}
        <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
            {article.summary}
          </p>
          <div className="flex items-center gap-2 mt-auto text-xs text-gray-500 dark:text-gray-400">
            <span>{article.source}</span>
            <span>•</span>
            <span>{formatDate(article.published)}</span>
          </div>
        </div>
      </article>
    );
  }

  // Default card variant
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Category badge */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full font-bold text-white text-xs bg-gradient-to-r ${getCategoryColor(article.category)}`}>
          {article.category.toUpperCase()}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-3 flex-1">
          {article.summary}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{article.source}</span>
            <span>•</span>
            <span>{formatDate(article.published)}</span>
          </div>
          <span>{article.readTime}m</span>
        </div>
      </div>
    </article>
  );
}
