import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import BottomNav from "./components/BottomNav";
import ArticleCard from "./components/ArticleCard";
import ArticleDetail from "./components/ArticleDetail";
import FinanceSection from "./components/FinanceSection";
import TopTen from "./components/TopTen";
import AIBriefing from "./components/AIBriefing";
import { newsService } from "./services/newsService";
import { useTranslation } from "./translations/i18n";

export default function App() {
  const [currentLang, setCurrentLang] = useState(
    () => localStorage.getItem("language") || "es",
  );
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  });

  const [activeCategory, setActiveCategory] = useState("home");
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const t = useTranslation(currentLang);

  // Theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Language
  useEffect(() => {
    localStorage.setItem("language", currentLang);
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Initial data
  useEffect(() => {
    (async () => {
      setLoading(true);
      const [all, featured, trending] = await Promise.all([
        newsService.getAllArticles(),
        newsService.getFeaturedArticle(),
        newsService.getTrendingArticles(4),
      ]);
      setArticles(all);
      setFeaturedArticle(featured);
      setTrendingArticles(trending);
      setLoading(false);
    })();
  }, []);

  // Category / search filtering
  useEffect(() => {
    (async () => {
      if (searchQuery) {
        setFilteredArticles(
          await newsService.searchArticles(searchQuery, currentLang),
        );
      } else if (activeCategory === "home") {
        setFilteredArticles(articles.slice(0, 12));
      } else if (["top10", "briefing", "finance"].includes(activeCategory)) {
        setFilteredArticles([]);
      } else {
        setFilteredArticles(
          await newsService.getArticlesByCategory(activeCategory),
        );
      }
    })();
  }, [activeCategory, articles, searchQuery, currentLang]);

  // Related articles for detail view
  useEffect(() => {
    if (selectedArticle) {
      newsService
        .getRelatedArticles(
          selectedArticle.id,
          selectedArticle.category,
          selectedArticle.region,
        )
        .then(setRelatedArticles);
    }
  }, [selectedArticle]);

  // Lock body scroll while detail sheet is open
  useEffect(() => {
    document.body.style.overflow = selectedArticle ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedArticle]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setActiveCategory("home");
    window.scrollTo({ top: 0 });
  };

  const handleCategoryChange = (cat) => {
    setSearchQuery("");
    setActiveCategory(cat);
  };

  const showGrid =
    !!searchQuery ||
    !["home", "top10", "briefing", "finance"].includes(activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <Header
        currentLang={currentLang}
        onLangChange={setCurrentLang}
        isDark={isDark}
        onThemeChange={() => setIsDark(!isDark)}
        onSearch={handleSearch}
        onClearSearch={() => setSearchQuery("")}
        searchActive={!!searchQuery}
        breakingArticle={featuredArticle}
        onBreakingClick={setSelectedArticle}
      />

      <Navigation
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        currentLang={currentLang}
      />

      {/* pb for bottom nav on mobile */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 pb-24 md:pb-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-72 bg-gray-200 dark:bg-slate-800 rounded-xl"
              />
            ))}
          </div>
        ) : (
          <>
            {/* ============ HOME ============ */}
            {activeCategory === "home" && !searchQuery && (
              <div className="space-y-6 sm:space-y-10">
                {/* AI Daily Briefing hero */}
                <AIBriefing
                  currentLang={currentLang}
                  onArticleClick={setSelectedArticle}
                />

                {/* Featured */}
                {featuredArticle && (
                  <section>
                    <h2 className="text-lg sm:text-2xl font-display font-bold text-gray-900 dark:text-white mb-3">
                      {t.home.featured}
                    </h2>
                    <ArticleCard
                      article={featuredArticle}
                      variant="featured"
                      currentLang={currentLang}
                      onClick={() => setSelectedArticle(featuredArticle)}
                    />
                  </section>
                )}

                {/* Top 10 */}
                <TopTen
                  currentLang={currentLang}
                  onArticleClick={setSelectedArticle}
                />

                {/* Trending grid */}
                {trendingArticles.length > 0 && (
                  <section>
                    <h2 className="text-lg sm:text-2xl font-display font-bold text-gray-900 dark:text-white mb-3">
                      {t.home.trending}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {trendingArticles.map((a) => (
                        <ArticleCard
                          key={a.id}
                          article={a}
                          currentLang={currentLang}
                          onClick={() => setSelectedArticle(a)}
                        />
                      ))}
                    </div>
                  </section>
                )}

                {/* Latest */}
                <section>
                  <h2 className="text-lg sm:text-2xl font-display font-bold text-gray-900 dark:text-white mb-3">
                    {t.home.latest}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredArticles.map((a) => (
                      <ArticleCard
                        key={a.id}
                        article={a}
                        currentLang={currentLang}
                        onClick={() => setSelectedArticle(a)}
                      />
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* ============ TOP 10 PAGE ============ */}
            {activeCategory === "top10" && !searchQuery && (
              <TopTen
                currentLang={currentLang}
                onArticleClick={setSelectedArticle}
              />
            )}

            {/* ============ AI BRIEFING PAGE ============ */}
            {activeCategory === "briefing" && !searchQuery && (
              <AIBriefing
                currentLang={currentLang}
                onArticleClick={setSelectedArticle}
                expanded
              />
            )}

            {/* ============ FINANCE ============ */}
            {activeCategory === "finance" && !searchQuery && (
              <div>
                <h2 className="text-lg sm:text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  {t.finance.title}
                </h2>
                <FinanceSection currentLang={currentLang} />
              </div>
            )}

            {/* ============ CATEGORY GRID / SEARCH ============ */}
            {showGrid && (
              <div>
                {searchQuery && (
                  <div className="mb-4">
                    <h2 className="text-lg sm:text-2xl font-display font-bold text-gray-900 dark:text-white">
                      "{searchQuery}"
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {filteredArticles.length} {t.search.results}
                    </p>
                  </div>
                )}

                {filteredArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredArticles.map((a) => (
                      <ArticleCard
                        key={a.id}
                        article={a}
                        currentLang={currentLang}
                        onClick={() => setSelectedArticle(a)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-16 text-center">
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      {t.search.noResults}
                    </p>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-8 border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 pb-20 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">
                {"\ud83d\udcf0"} NEWS HUB
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.footer.tagline}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                {t.footer.regions}
              </h4>
              <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                {["barcelona", "catalonia", "spain", "international"].map(
                  (c) => (
                    <li key={c}>
                      <button
                        onClick={() => handleCategoryChange(c)}
                        className="hover:text-blue-600"
                      >
                        {t.nav[c]}
                      </button>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                {t.footer.sections}
              </h4>
              <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                {["technology", "finance", "sports", "science"].map((c) => (
                  <li key={c}>
                    <button
                      onClick={() => handleCategoryChange(c)}
                      className="hover:text-blue-600"
                    >
                      {t.nav[c]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                {t.footer.about}
              </h4>
              <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <button
                    onClick={() => handleCategoryChange("briefing")}
                    className="hover:text-blue-600"
                  >
                    {t.nav.briefing}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryChange("top10")}
                    className="hover:text-blue-600"
                  >
                    {t.nav.top10}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-slate-800">
            <p>&copy; 2026 News Hub. {t.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* Bottom tab bar (mobile) */}
      <BottomNav
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        currentLang={currentLang}
      />

      {/* Article detail sheet */}
      {selectedArticle && (
        <ArticleDetail
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          relatedArticles={relatedArticles}
          currentLang={currentLang}
          onRelatedClick={setSelectedArticle}
        />
      )}
    </div>
  );
}
