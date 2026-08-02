import { mockArticles, marketData, dailyBriefing } from "../data/mockArticles";
import { pick } from "../translations/i18n";

// Trending blends recency, views and discussion volume.
const trendingScore = (a) => {
  const ageHours = Math.max(
    1,
    (Date.now() - new Date(a.published).getTime()) / 3600000,
  );
  return (a.views + a.comments * 40) / Math.pow(ageHours, 0.6);
};

export const newsService = {
  getAllArticles: async () =>
    [...mockArticles].sort(
      (a, b) => new Date(b.published) - new Date(a.published),
    ),

  getArticlesByCategory: async (category) =>
    mockArticles
      .filter((a) => a.category === category)
      .sort((a, b) => new Date(b.published) - new Date(a.published)),

  getArticlesByRegion: async (region) =>
    mockArticles
      .filter((a) => a.region === region)
      .sort((a, b) => new Date(b.published) - new Date(a.published)),

  getFeaturedArticle: async () =>
    mockArticles.find((a) => a.featured) || mockArticles[0],

  getTrendingArticles: async (limit = 6) =>
    [...mockArticles]
      .sort((a, b) => trendingScore(b) - trendingScore(a))
      .slice(0, limit),

  getMostRead: async (limit = 8) =>
    [...mockArticles].sort((a, b) => b.views - a.views).slice(0, limit),

  // Top 10 by region; sortBy: 'popular' (views) | 'comments'
  getTop10: async (region, sortBy = "popular") =>
    mockArticles
      .filter((a) => a.region === region)
      .sort((a, b) =>
        sortBy === "comments" ? b.comments - a.comments : b.views - a.views,
      )
      .slice(0, 10),

  searchArticles: async (query, lang = "en") => {
    const q = query.toLowerCase();
    return mockArticles.filter(
      (a) =>
        pick(a.title, lang).toLowerCase().includes(q) ||
        pick(a.summary, lang).toLowerCase().includes(q) ||
        pick(a.content, lang).toLowerCase().includes(q) ||
        a.source.toLowerCase().includes(q),
    );
  },

  getArticleById: async (id) => mockArticles.find((a) => a.id === id),

  getRelatedArticles: async (articleId, category, region) => {
    const related = mockArticles.filter(
      (a) =>
        a.id !== articleId && (a.category === category || a.region === region),
    );
    // Same category first, then same region, most recent first
    related.sort((a, b) => {
      const catDiff = (b.category === category) - (a.category === category);
      if (catDiff !== 0) return catDiff;
      return new Date(b.published) - new Date(a.published);
    });
    return related.slice(0, 3);
  },

  getMarketData: async () => marketData,

  getDailyBriefing: async () => dailyBriefing,
};

export default newsService;
