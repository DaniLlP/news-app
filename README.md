# 📰 NEWS HUB - Premium News Aggregation App

A modern, professional news aggregation application built with React, Vite, and Tailwind CSS. Features breaking news, local Barcelona/Catalonia coverage, international news, finance tracking, and more in Spanish, English, and Catalan.

![News Hub Preview](https://images.unsplash.com/photo-1495087689492-21aab60d2e16?w=800&h=400&fit=crop)

## ✨ Features

### 🎯 Core Features
- **Multi-language Support**: Spanish (ES), English (EN), Catalan (CA)
- **Dark/Light Mode**: Elegant theme switching with system preference detection
- **Responsive Design**: Mobile-first, works perfectly on all devices
- **Progressive Web App (PWA)**: Installable on phones, offline support
- **Real-time Search**: Search across all articles
- **Article Detail View**: Full article preview with related articles

### 📰 News Categories
- 🔴 Breaking News (with live indicators)
- 🏙️ Barcelona & Catalonia
- 🇪🇸 Spain
- 🌍 International
- 💻 Technology
- 📈 Finance & Markets
- ⚽ Sports
- 🔬 Science
- ✨ Lifestyle
- 💬 Opinion

### 💰 Finance Features
- Real-time market data (IBEX 35, S&P 500, Nasdaq, etc.)
- Cryptocurrency tracking (Bitcoin, Ethereum)
- Currency exchange rates
- 24-hour price changes with visual indicators
- Mini chart previews

### 🎨 Design Features
- Professional newspaper aesthetic
- Category color coding
- Smooth animations and transitions
- Loading skeletons
- Feature article highlight
- Trending articles section
- Most read ranking
- Share and bookmark functionality

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn
- Git (for deployment)

### Installation

1. **Clone or extract the repository**
```bash
cd news-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Create .env file** (optional, for API keys)
```bash
cp .env.example .env
# Edit .env and add your API keys
```

4. **Start development server**
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## 🔌 API Integration

### Included by Default
The app works with **mock data** out of the box. No API keys required for initial testing.

### Adding Real News APIs

1. **NewsAPI.org** (Recommended)
   - Get free API key: https://newsapi.org/
   - Add to `.env`:
     ```
     VITE_NEWS_API_KEY=your_key_here
     ```

2. **Alpha Vantage** (Finance data)
   - Get free API key: https://www.alphavantage.co/
   - Add to `.env`:
     ```
     VITE_ALPHA_VANTAGE_KEY=your_key_here
     ```

3. **Polygon.io** (Stock market)
   - Get API key: https://polygon.io/
   - Add to `.env`:
     ```
     VITE_POLYGON_KEY=your_key_here
     ```

### API Architecture Notes
- **RSS Feeds**: Server-side consumption only (no CORS issues)
- **Public APIs**: Use services like NewsAPI, Alpha Vantage
- **Mock Data**: Always fallback included for testing
- **CORS**: Handled properly - no direct article scraping

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

## 🌐 GitHub Pages Deployment

### Method 1: GitHub CLI (Easiest)

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json** (already done in this project)
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. **Deploy**
```bash
npm run deploy
```

### Method 2: Manual GitHub Pages

1. **Build the project**
```bash
npm run build
```

2. **Create GitHub repository**
   - Create a new repo named `news-app`
   - Push this folder to `main` branch

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Set source to `gh-pages` branch
   - Deploy workflow runs automatically

4. **Your app will be live at**
```
https://yourusername.github.io/news-app/
```

### GitHub Actions (Automatic Deployment)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm install
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: yourdomain.com  # Optional: if using custom domain
```

Push this file and GitHub will auto-deploy on every push to `main`.

## 🗂️ Project Structure

```
news-app/
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── ArticleCard.jsx
│   │   ├── ArticleDetail.jsx
│   │   └── FinanceSection.jsx
│   ├── pages/              # Page components (optional)
│   ├── services/           # API services
│   │   └── newsService.js
│   ├── data/               # Mock data
│   │   └── mockArticles.js
│   ├── translations/       # i18n strings
│   │   └── i18n.js
│   ├── assets/             # Images, icons
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── public/
│   ├── manifest.json      # PWA manifest
│   └── sw.js              # Service worker
├── index.html             # HTML template
├── vite.config.js         # Vite config
├── tailwind.config.js     # Tailwind config
├── postcss.config.js      # PostCSS config
├── package.json           # Dependencies
└── README.md             # This file
```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'breaking': '#EF4444',  // Change breaking news color
      'tech': '#3B82F6',      // Change tech color
      // etc...
    }
  }
}
```

### Change Languages
Add translations to `src/translations/i18n.js`:
```javascript
const translations = {
  'fr': {  // French example
    nav: { home: 'Accueil', ... },
    // ...
  }
}
```

### Add News Sources
Edit `src/data/mockArticles.js` or integrate new API sources in `src/services/newsService.js`

## 🔐 Security & Privacy

- ✅ No server-side code executed on GitHub Pages (static only)
- ✅ All API calls use HTTPS
- ✅ API keys should never be committed (use `.env`)
- ✅ No user data collection
- ✅ Local storage only for preferences (theme, language)
- ✅ Service worker enables offline-first approach

## 🚀 Performance

- ⚡ Vite provides instant HMR
- ⚡ Tree-shaking removes unused code
- ⚡ Images optimized and lazy-loaded
- ⚡ Service worker caches assets
- ⚡ Gzip compression on deployment
- ⚡ ~50KB total bundle size (with Tailwind)

## 📱 PWA Features

The app is installable as a Progressive Web App:

1. **Desktop**: Click "Install" in browser address bar
2. **Mobile**: Open in browser → Share → "Add to Home Screen"
3. **Features**:
   - Works offline (cached content)
   - App-like experience
   - Home screen icon
   - Push notification ready (future feature)
   - Background sync ready (future feature)

## 🛠️ Development

### Available Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

### Adding New Components

1. Create component in `src/components/`
2. Import `useTranslation` for multilingual support
3. Use `lucide-react` icons for consistency
4. Follow existing styling patterns with Tailwind

### Adding New Articles

Mock articles are in `src/data/mockArticles.js`. Structure:

```javascript
{
  id: 'unique-id',
  title: 'Article Title',
  category: 'technology',
  subcategory: 'ai',  // optional
  summary: 'Short summary...',
  content: 'Full content...',
  image: 'https://...',
  source: 'News Source',
  author: 'Author Name',
  published: new Date(),
  readTime: 5,  // minutes
  featured: false,
}
```

## 🐛 Troubleshooting

### Styles not loading?
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### GitHub Pages shows blank page?
- Check `vite.config.js` has correct `base` path
- Ensure repository is public
- Check Settings → Pages → gh-pages branch selected

### APIs not working?
- Add API keys to `.env`
- Check console for CORS errors
- Verify API credentials are valid
- App still works with mock data

### Build issues?
```bash
# Clear Vite cache
rm -rf .vite dist
npm run build
```

## 📚 Technology Stack

- **React 18**: UI library
- **Vite 4**: Build tool (lightning fast)
- **Tailwind CSS 3**: Utility-first styling
- **Lucide React**: Icon library
- **date-fns**: Date formatting with i18n
- **NewsAPI**: News data (optional)

## 📄 License

MIT License - Feel free to use this for personal or commercial projects

## 🤝 Contributing

Ideas for improvements:

- [ ] Add more news sources (RSS aggregation)
- [ ] Implement user accounts (Firebase/Supabase)
- [ ] Add commenting system
- [ ] Save articles to read later
- [ ] Email newsletter signup
- [ ] Podcast section
- [ ] Video section
- [ ] AI-powered news summarization
- [ ] Reader mode with adjustable fonts
- [ ] Custom news feed preferences
- [ ] Push notifications
- [ ] Article recommendations

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review `vite.config.js` and `tailwind.config.js`
3. Check console for error messages
4. Verify all dependencies are installed

## 🎯 Deployment Checklist

Before going live:

- [ ] API keys added to `.env` (if using external APIs)
- [ ] GitHub Pages enabled in repository settings
- [ ] `base` path in `vite.config.js` matches repository name
- [ ] Test on mobile devices
- [ ] Dark mode tested
- [ ] All languages tested
- [ ] Images load correctly
- [ ] Offline mode works (PWA)
- [ ] Search functionality tested
- [ ] Share buttons work

## 🚀 Performance Optimization

Current optimizations:
- Code splitting with Vite
- Tree-shaking unused code
- Image lazy loading
- Service worker caching
- Gzip compression (GitHub Pages)
- No external frameworks (only React)

## 📊 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

---

**Made with ❤️ for news enthusiasts**

🎉 Happy deploying! Questions? Check the troubleshooting section or review the code comments.
