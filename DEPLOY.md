# 🚀 GitHub Pages Deployment Guide

Complete step-by-step guide to deploy this news app to GitHub Pages.

## Prerequisites

- GitHub account (free or paid)
- Git installed on your computer
- Node.js 16+

## Step 1: Prepare Your Repository

### 1.1 Create a new GitHub repository

1. Go to https://github.com/new
2. Create a repository named `news-app`
3. **IMPORTANT**: Make sure it's **PUBLIC** (required for GitHub Pages free tier)
4. Don't initialize with README (we have one)

### 1.2 Clone this project

```bash
cd /path/to/where/you/want/the/project
```

## Step 2: Update Project Configuration

### 2.1 Check Vite config

The `vite.config.js` already has GitHub Pages configuration:

```javascript
export default defineConfig({
  base: '/news-app/',  // ← This must match your repository name
  // ... rest of config
})
```

**⚠️ IMPORTANT**: If you named your repository differently, change `'/news-app/'` to `'/your-repo-name/'`

### 2.2 Update index.html references (if needed)

If you renamed the repo, update these paths in `index.html`:

```html
<link rel="manifest" href="/news-app/manifest.json" />
<!-- Change to: -->
<link rel="manifest" href="/your-repo-name/manifest.json" />

<!-- And in the script: -->
<script type="module" src="/news-app/src/main.jsx"></script>
<!-- Change to: -->
<script type="module" src="/your-repo-name/src/main.jsx"></script>
```

## Step 3: Push to GitHub

### 3.1 Initialize git in project folder

```bash
cd news-app
git init
git add .
git commit -m "Initial commit: News app with React, Vite, Tailwind"
```

### 3.2 Add remote and push

```bash
git remote add origin https://github.com/yourusername/news-app.git
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

### 4.1 Repository Settings

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll to **Pages** section (left sidebar)

### 4.2 Configure GitHub Pages

1. Under "Build and deployment" section:
   - **Source**: Select "GitHub Actions" or "Deploy from a branch"
   
2. If using "Deploy from a branch":
   - Branch: `main` (or your branch name)
   - Folder: `/ (root)`

### 4.3 Wait for deployment

- GitHub will automatically run a build
- You should see a green checkmark and a link like:
  ```
  https://yourusername.github.io/news-app/
  ```

## Step 5: Automatic Deployment with GitHub Actions (Recommended)

For automatic deployment on every push:

### 5.1 Create workflow file

Create a new file: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

### 5.2 Enable GitHub Actions

1. Go to Settings → Actions → General
2. Allow all actions and workflows
3. Click "Save"

### 5.3 Push the workflow

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

GitHub will automatically deploy after each push!

## Step 6: Alternative - Using gh-pages CLI

If you prefer automatic publishing:

### 6.1 Install gh-pages

```bash
npm install --save-dev gh-pages
```

### 6.2 Add deploy script

Already in `package.json`:
```json
"deploy": "npm run build && gh-pages -d dist"
```

### 6.3 Create GitHub token

1. Go to https://github.com/settings/tokens
2. Click "Generate new token"
3. Select scopes: `repo`, `workflow`
4. Copy the token

### 6.4 Deploy

```bash
npm run deploy
```

## Step 7: Verify Deployment

### Check if live

1. Open `https://yourusername.github.io/news-app/`
2. You should see the news app loading
3. Test all features:
   - [ ] Navigation works
   - [ ] Dark mode toggles
   - [ ] Language switcher works
   - [ ] Search functions
   - [ ] Article detail view opens
   - [ ] On mobile, app is responsive

### Troubleshooting deployment

**Page shows 404?**
- Wait 5-10 minutes for GitHub Pages to build
- Check Settings → Pages → Shows the correct URL
- Verify `base: '/news-app/'` in `vite.config.js`

**Blank page?**
- Open browser DevTools (F12)
- Check Console tab for errors
- Check Network tab for failed requests
- Verify base path matches repository name

**Styles missing (unstyled)?**
- Check Tailwind CSS build completed
- Verify CSS file is in `dist/` folder
- Clear browser cache (Ctrl+Shift+Del)

**Images not loading?**
- Verify image URLs start with `/news-app/`
- Check that external URLs (Unsplash) work
- Look for CORS errors in console

## Step 8: Update and Maintain

### Making changes

1. Edit files locally
2. Test with `npm run dev`
3. Commit changes:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
4. GitHub automatically deploys! ✅

### Adding API keys

1. Don't commit `.env` file (in `.gitignore`)
2. Add keys to GitHub Secrets:
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add each key
3. Reference in workflow:
   ```yaml
   env:
     VITE_NEWS_API_KEY: ${{ secrets.NEWS_API_KEY }}
   ```

## Step 9: Custom Domain (Optional)

To use a custom domain (e.g., news.yourdomain.com):

### 9.1 Update DNS

Add a CNAME record pointing to:
```
yourusername.github.io
```

### 9.2 Update GitHub Pages

1. Settings → Pages
2. Under "Custom domain"
3. Enter your domain name
4. GitHub will create a CNAME file automatically

## Performance Tips

1. **Cache busting**: GitHub Pages serves with cache headers
   - Use versioned URLs for content
   - Service worker handles static asset caching

2. **Monitor speed**: 
   - Use https://pagespeed.web.dev/
   - Check Lighthouse score
   - Aim for >90 on all metrics

3. **Optimize images**:
   - Use Unsplash URLs (CDN cached)
   - Compress before adding locally
   - Use WebP format if possible

## Advanced: CI/CD Improvements

### Add pre-deployment checks

```yaml
# In .github/workflows/deploy.yml

- name: Run linter
  run: npm run lint  # If you add eslint

- name: Run tests
  run: npm run test  # If you add tests
```

### Automatic version bumping

Consider using semantic versioning:
```bash
npm install -D @semantic-release/github
```

## Summary

You now have:
✅ App deployed to GitHub Pages
✅ Automatic builds on every push
✅ Dark mode, multilingual support
✅ PWA installable on mobile
✅ Offline capability with service worker
✅ Professional news app layout

Your URL: `https://yourusername.github.io/news-app/`

## Next Steps

1. **Add content**: Update mock articles or connect to real APIs
2. **Customize**: Change colors, add more categories
3. **Promote**: Share your news app on social media
4. **Monitor**: Check GitHub Actions tab for build status
5. **Iterate**: Make improvements based on feedback

## Support & Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Blank page | Check base path in vite.config.js |
| 404 error | Wait 5 mins for build, check URL spelling |
| Styles missing | Clear cache, rebuild with `npm run build` |
| Images broken | Check URL starts with `/news-app/` |
| Search not working | Check console for errors |

### Resources

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)

---

**🎉 Congratulations! Your news app is now live on the internet!**

Share the link: `https://yourusername.github.io/news-app/`
