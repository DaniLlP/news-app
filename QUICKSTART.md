# 🚀 Quick Start Guide

Get this news app up and running in 5 minutes!

## Step 1: Download & Extract (2 min)

```bash
cd /path/to/projects
# Extract the ZIP file here
cd news-app
```

## Step 2: Install & Run (2 min)

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser ✅

## Step 3: Deploy to GitHub (1 min)

### Option A: Using GitHub CLI (Easiest)

```bash
# 1. Create GitHub repo (do this on GitHub.com first)
# 2. Add remote
git remote add origin https://github.com/yourusername/news-app.git
git branch -M main

# 3. Push
git push -u origin main

# 4. Go to Settings → Pages
# 5. Set source to "GitHub Actions"
```

Your app is live at: `https://yourusername.github.io/news-app/`

### Option B: Automatic (Most Recommended)

The `.github/workflows/deploy.yml` will auto-deploy every push!

1. Push code to GitHub
2. Wait 2-3 minutes
3. GitHub Actions runs automatically
4. Your app is live! 🎉

## Features to Try

- 🔄 **Switch languages**: Top right corner (ES/EN/CA)
- 🌙 **Dark mode**: Toggle with moon icon
- 🔍 **Search**: Find articles by keyword
- 📱 **Mobile**: Open on phone, tap "Add to Home Screen"
- 🔖 **Save articles**: Click bookmark icon
- 📤 **Share**: Click share button
- 📰 **Categories**: Click navigation items

## Customization (5 min)

### Change app name
Edit `package.json` and `public/manifest.json`:
```json
"name": "My News App",
"description": "Custom description here"
```

### Change colors
Edit `tailwind.config.js`:
```javascript
'breaking': '#FF0000',  // Change colors
'tech': '#0099FF',
```

### Add news sources
Edit `src/data/mockArticles.js` to add more articles

## Deployment Checklist

- [ ] Pushed to GitHub
- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] Deploy workflow succeeded (Actions tab)
- [ ] App loads at yourusername.github.io/news-app/
- [ ] Tested on mobile
- [ ] Tested dark mode
- [ ] Tested language switching
- [ ] Bookmarked the link!

## Common Issues

**Q: Blank page?**
A: Wait 5 minutes, then clear cache (Ctrl+Shift+Del)

**Q: 404 error?**
A: Check Settings → Pages → branch is set to "gh-pages"

**Q: Styles missing?**
A: Rebuild with `npm run build`

**Q: Can't find repo settings?**
A: Make sure repository is PUBLIC

## Need Help?

1. Check `DEPLOY.md` for detailed deployment guide
2. Check `README.md` for full documentation
3. Review browser console for errors (F12)

## Next Level

Once working, try:
- 🔑 Add NewsAPI keys (free at newsapi.org)
- 💾 Save articles to local storage
- 📧 Add newsletter signup
- 🎨 Customize design further
- 📱 Make it a true PWA

## Summary

```
1. npm install          → Get dependencies
2. npm run dev         → Test locally
3. git push           → Deploy to GitHub
4. Check GitHub Pages → App is live!
```

That's it! 🎉

Your news app is now online and ready to share!

**Share your link:** `https://yourusername.github.io/news-app/`
