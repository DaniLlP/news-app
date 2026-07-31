import React, { useState } from 'react';
import { X, Share2, Bookmark, ArrowLeft } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { es, enUS, ca } from 'date-fns/locale';
import { useTranslation } from '../translations/i18n';

const locales = { es, en: enUS, ca };

export default function ArticleDetail({ 
  article, 
  onClose,
  relatedArticles = [],
  currentLang,
  onRelatedClick
}) {
  const t = useTranslation(currentLang);
  const locale = locales[currentLang] || enUS;
  const [isSaved, setIsSaved] = useState(false);

  if (!article) return null;

  const formatDate = (date) => {
    return formatDistanceToNow(new Date(date), { 
      addSuffix: true,
      locale 
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.summary,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      // Fallback: copy to clipboard
      const text = `${article.title}\n${window.location.href}`;
      navigator.clipboard.writeText(text);
      alert('Article link copied to clipboard');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">
      <div className="min-h-screen flex items-start justify-center pt-8 pb-16">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden animate-slide-in">
          
          {/* Header with close button */}
          <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <ArrowLeft size={24} className="text-gray-600 dark:text-gray-400" />
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`p-2 rounded-lg transition-colors ${
                  isSaved
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                    : 'hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400'
                }`}
              >
                <Bookmark size={20} fill={isSaved ? 'currentColor' : 'none'} />
              </button>
              <button
                onClick={handleShare}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-gray-600 dark:text-gray-400"
              >
                <Share2 size={20} />
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-gray-600 dark:text-gray-400"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Article content */}
          <div className="px-6 py-8">
            {/* Category and meta */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                {article.category.toUpperCase()}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(article.published)}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              {article.title}
            </h1>

            {/* Author and source info */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-slate-700">
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {article.author}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t.article.source}: {article.source}
                </p>
              </div>
            </div>

            {/* Featured image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Summary */}
            <div className="mb-6 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border-l-4 border-blue-600">
              <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t.article.summary}:
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {article.summary}
              </p>
            </div>

            {/* Main content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                {article.content}
              </p>

              {/* Placeholder for full article content */}
              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <p className="text-sm text-yellow-900 dark:text-yellow-200">
                  📰 {t.article.readMore} <a href="#" className="text-yellow-700 dark:text-yellow-300 font-semibold hover:underline">{article.source}</a>
                </p>
              </div>

              {/* Article stats */}
              <div className="mt-8 grid grid-cols-2 gap-4 pt-8 border-t border-gray-200 dark:border-slate-700">
                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Reading time</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{article.readTime} min</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Published</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{formatDate(article.published)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div className="px-6 py-8 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50">
              <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                {t.article.related}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedArticles.map((related) => (
                  <button
                    key={related.id}
                    onClick={() => onRelatedClick(related)}
                    className="text-left group"
                  >
                    <div className="mb-2 rounded-lg overflow-hidden h-32">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {related.source}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
