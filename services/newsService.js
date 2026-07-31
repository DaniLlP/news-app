import { mockArticles, marketData } from '../data/mockArticles';

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

// Service for fetching news from various sources
// Currently uses mock data, easily switchable to real API

export const newsService = {
  // Get all articles
  getAllArticles: async () => {
    try {
      if (NEWS_API_KEY) {
        const response = await fetch(`${BASE_URL}/everything?q=news&sortBy=publishedAt&language=en&apiKey=${NEWS_API_KEY}`);
        const data = await response.json();
        return data.articles || mockArticles;
      }
    } catch (error) {
      console.warn('API error, using mock data:', error);
    }
    return mockArticles;
  },

  // Get articles by category
  getArticlesByCategory: async (category) => {
    return mockArticles.filter(article => article.category === category);
  },

  // Get featured article
  getFeaturedArticle: async () => {
    const featured = mockArticles.find(article => article.featured);
    return featured || mockArticles[0];
  },

  // Get trending articles
  getTrendingArticles: async () => {
    // In production, this would be based on actual trending metrics
    return mockArticles.slice(0, 5);
  },

  // Get most read articles
  getMostRead: async () => {
    // In production, would be based on actual read counts
    return mockArticles.slice(0, 8);
  },

  // Search articles
  searchArticles: async (query) => {
    const lowercaseQuery = query.toLowerCase();
    return mockArticles.filter(article =>
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.summary.toLowerCase().includes(lowercaseQuery) ||
      article.content.toLowerCase().includes(lowercaseQuery)
    );
  },

  // Get article by ID
  getArticleById: async (id) => {
    return mockArticles.find(article => article.id === id);
  },

  // Get related articles
  getRelatedArticles: async (articleId, category) => {
    return mockArticles
      .filter(article => article.id !== articleId && article.category === category)
      .slice(0, 3);
  },

  // Get market data
  getMarketData: async () => {
    // In production, connect to financial APIs (Alpha Vantage, Polygon.io, Yahoo Finance)
    return marketData;
  },

  // Get market data for specific symbols
  getMarketDataBySymbol: async (symbol) => {
    return marketData.find(item => item.symbol === symbol);
  },
};

export default newsService;
