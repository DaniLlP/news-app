import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ArticleCard from './components/ArticleCard';
import ArticleDetail from './components/ArticleDetail';
import FinanceSection from './components/FinanceSection';
import { newsService } from './services/newsService';
import { useTranslation } from './translations/i18n';

export default function App() {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('language') || 'es';
  });
  
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [activeCategory, setActiveCategory] = useState('home');
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [mostReadArticles, setMostReadArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const t = useTranslation(currentLang);

  // Apply theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Save language preference
  useEffect(() => {
    localStorage.setItem('language', currentLang);
  }, [currentLang]);

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [allArticles, featured, trending, mostRead] = await Promise.all([
        newsService.getAllArticles(),
        newsService.getFeaturedArticle(),
        newsService.getTrendingArticles(),
        newsService.getMostRead(),
      ]);

      setArticles(allArticles);
      setFeaturedArticle(featured);
      setTrendingArticles(trending);
      setMostReadArticles(mostRead);
      setLoading(false);
    };

    loadData();
  }, []);

  // Filter articles by category
  useEffect(() => {
    const filterArticles = async () => {
      if (activeCategory === 'home') {
        setFilteredArticles(articles.slice(0, 12));
      } else if (searchQuery) {
        const results = await newsService.searchArticles(searchQuery);
        setFilteredArticles(results);
      } else {
        const filtered = await newsService.getArticlesByCategory(activeCategory);
        setFilteredArticles(filtered);
      }
    };

    filterArticles();
    setMobileMenuOpen(false);
  }, [activeCategory, articles, searchQuery]);

  // Load related articles when article is selected
  useEffect(() => {
    if (selectedArticle) {
      const loadRelated = async () => {
        const related = await newsService.getRelatedArticles(
          selectedArticle.id,
          selectedArticle.category
        );
        setRelatedArticles(related);
      };
      loadRelated();
    }
  }, [selectedArticle]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setActiveCategory('home');
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'auto';
  };

  const handleRelatedArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleThemeChange = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-slate-900">
        {/* Header */}
        <Header
          currentLang={currentLang}
          onLangChange={setCurrentLang}
          isDark={isDark}
          onThemeChange={handleThemeChange}
          onSearch={handleSearch}
          mobileMenuOpen={mobileMenuOpen}
          onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />

        {/* Navigation */}
        <Navigation
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          currentLang={currentLang}
          isMobileOpen={mobileMenuOpen}
        />

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-96 bg-gray-200 dark:bg-slate-700 rounded-lg"></div>
              ))}
            </div>
          ) : (
            <>
              {/* Home section with featured and trending */}
              {activeCategory === 'home' && !searchQuery && (
                <>
                  {/* Featured article */}
                  {featuredArticle && (
                    <section className="mb-12">
                      <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                        {t.home.featured}
                      </h2>
                      <ArticleCard
                        article={featuredArticle}
                        variant="featured"
                        currentLang={currentLang}
                        onClick={() => handleArticleClick(featuredArticle)}
                      />
                    </section>
                  )}

                  {/* Trending section */}
                  {trendingArticles.length > 0 && (
                    <section className="mb-12">
                      <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                        {t.home.trending}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {trendingArticles.slice(0, 2).map(article => (
                          <ArticleCard
                            key={article.id}
                            article={article}
                            currentLang={currentLang}
                            onClick={() => handleArticleClick(article)}
                          />
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Most read section */}
                  {mostReadArticles.length > 0 && (
                    <section className="mb-12">
                      <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                        {t.home.mostRead}
                      </h2>
                      <div className="space-y-2 bg-white dark:bg-slate-800 rounded-lg divide-y dark:divide-slate-700">
                        {mostReadArticles.slice(0, 5).map((article, index) => (
                          <button
                            key={article.id}
                            onClick={() => handleArticleClick(article)}
                            className="w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors group"
                          >
                            <div className="flex items-start gap-3">
                              <span className="text-2xl font-bold text-gray-300 dark:text-slate-600 flex-shrink-0">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                  {article.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                  {article.source}
                                </p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </section>
                  )}
                </>
              )}

              {/* Finance section */}
              {activeCategory === 'finance' && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                    {t.finance.title}
                  </h2>
                  <FinanceSection currentLang={currentLang} />
                </div>
              )}

              {/* Category articles grid */}
              {activeCategory !== 'home' || searchQuery ? (
                <div>
                  {searchQuery && (
                    <div className="mb-6">
                      <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                        {t.search.placeholder}: "{searchQuery}"
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        {filteredArticles.length} {t.search.noResults.split(' ')[0]}
                      </p>
                    </div>
                  )}

                  {filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredArticles.map(article => (
                        <ArticleCard
                          key={article.id}
                          article={article}
                          currentLang={currentLang}
                          onClick={() => handleArticleClick(article)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <p className="text-gray-600 dark:text-gray-400 text-lg">
                        {t.search.noResults}
                      </p>
                    </div>
                  )}
                </div>
              ) : null}
            </>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-4">
                  📰 NEWS HUB
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Premium news aggregation for Spain, Catalonia, and Barcelona
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Local</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><a href="#" className="hover:text-blue-600">Barcelona</a></li>
                  <li><a href="#" className="hover:text-blue-600">Catalonia</a></li>
                  <li><a href="#" className="hover:text-blue-600">Spain</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Categories</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><a href="#" className="hover:text-blue-600">Technology</a></li>
                  <li><a href="#" className="hover:text-blue-600">Finance</a></li>
                  <li><a href="#" className="hover:text-blue-600">Sports</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">About</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                  <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 pt-8 border-t border-gray-200 dark:border-slate-700">
              <p>&copy; 2024 News Hub. Made with ❤️ for news enthusiasts.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Article detail modal */}
      {selectedArticle && (
        <ArticleDetail
          article={selectedArticle}
          onClose={handleCloseArticle}
          relatedArticles={relatedArticles}
          currentLang={currentLang}
          onRelatedClick={handleRelatedArticleClick}
        />
      )}
    </div>
  );
}
