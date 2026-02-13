# 🚀 Deployment Guide

Step-by-step instructions to get your food menu website live on the internet for FREE using GitHub Pages.

## 📋 Prerequisites

Before you begin, make sure you have:
- [ ] A GitHub account (create one at [github.com](https://github.com))
- [ ] Git installed on your computer ([download here](https://git-scm.com/downloads))
- [ ] Your food menu website files ready (you have them!)

---

## 🎯 Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+" icon** in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `foodprojecthtml` (or any name you like)
   - **Description**: "Food menu website for my business"
   - **Visibility**: Choose "Public" (required for free GitHub Pages)
   - **DO NOT** check "Initialize with README" (we already have one)
5. Click **"Create repository"**

---

## 🔧 Step 2: Initialize Git Locally

Open your terminal/command prompt and navigate to your project folder:

```bash
# Navigate to your project folder
cd /home/the-mist/foodprojecthtml

# Initialize git repository
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Food menu website"

# Rename branch to main (GitHub's default)
git branch -M main
```

---

## 🌐 Step 3: Connect to GitHub

Replace `yourusername` with your actual GitHub username:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/yourusername/foodprojecthtml.git

# Push your code to GitHub
git push -u origin main
```

**Troubleshooting**:
- If asked for username/password, use your GitHub username and a [Personal Access Token](https://github.com/settings/tokens)
- If you get an error about remote already exists, use: `git remote set-url origin https://github.com/yourusername/foodprojecthtml.git`

---

## 🎨 Step 4: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/yourusername/foodprojecthtml`
2. Click the **"Settings"** tab (⚙️ gear icon)
3. Scroll down and click **"Pages"** in the left sidebar
4. Under **"Source"**:
   - Select branch: **"main"**
   - Select folder: **"/ (root)"**
5. Click **"Save"**

GitHub will show a message: "Your site is ready to be published"

---

## ✅ Step 5: Wait and Visit Your Site

1. **Wait 1-3 minutes** for GitHub to build your site
2. Refresh the Pages settings page
3. You'll see: "Your site is published at `https://yourusername.github.io/foodprojecthtml/`"
4. Click the link or visit it in your browser

**🎉 Congratulations! Your website is now live!**

---

## 🔄 Updating Your Website

Whenever you make changes to your website:

```bash
# 1. Make your edits to HTML/CSS/JS files

# 2. Stage the changes
git add .

# 3. Commit with a descriptive message
git commit -m "Updated menu prices and added new items"

# 4. Push to GitHub
git push

# 5. Wait 1-2 minutes, then refresh your live site
```

Your changes will automatically appear on your live website!

---

## 🎨 Quick Customization Checklist

Before going live, customize these elements:

### In `index.html`:
- [ ] Change "Tasty Bites" to your business name (lines 9, 16)
- [ ] Update the tagline (line 17)
- [ ] Modify menu items (add/remove/edit)
- [ ] Update contact information (lines 149-159)
- [ ] Change phone number and address

### In `styles.css`:
- [ ] Change color scheme if desired (search for `#667eea` and `#764ba2`)

### In `package.json`:
- [ ] Update author name
- [ ] Update repository URL with your GitHub username

### In `README.md`:
- [ ] Replace `yourusername` with your actual GitHub username

---

## 🌟 Pro Tips

### Custom Domain (Optional)

Want to use your own domain like `www.tastybites.com`?

1. Buy a domain from Namecheap, GoDaddy, or Google Domains
2. In your repository settings > Pages, add your custom domain
3. Update your domain's DNS settings (GitHub provides instructions)
4. Wait 24-48 hours for DNS to propagate

### HTTPS (Automatic)

GitHub Pages automatically provides free HTTPS! Your site will be secure with a padlock 🔒

### Analytics (Optional)

Track visitors by adding Google Analytics:

1. Create a Google Analytics account
2. Get your tracking code
3. Add it to `index.html` before `</head>`

---

## 🐛 Troubleshooting

### Site Not Loading?

- **Wait**: Give it 5-10 minutes after first deployment
- **Check URL**: Make sure you're visiting the correct URL
- **Check Settings**: Ensure Pages is enabled with "main" branch selected
- **Clear Cache**: Try visiting in incognito/private mode

### CSS/JS Not Working?

- **Check Paths**: Ensure `styles.css` and `script.js` are in the same folder as `index.html`
- **Case Sensitive**: File names are case-sensitive on GitHub Pages
- **Hard Refresh**: Press Ctrl+Shift+R (Cmd+Shift+R on Mac)

### Images Not Showing?

- **Relative Paths**: Use relative paths like `./images/food.jpg`
- **File Names**: No spaces in file names (use dashes or underscores)

---

## 📱 Testing

Before deploying, test your site:

### Local Testing

```bash
# Option 1: Simple Python server
python -m http.server 8000

# Option 2: Node.js (if installed)
npx serve .

# Then visit: http://localhost:8000
```

### Mobile Testing

- Use Chrome DevTools (F12) > Toggle Device Toolbar
- Or visit your live site on your phone

### Browser Testing

Test on:
- Chrome ✅
- Firefox ✅
- Safari ✅
- Mobile browsers ✅

---

## 📊 Going Further

### SEO Optimization

1. Add a `sitemap.xml` file
2. Create a `robots.txt` file
3. Submit your site to Google Search Console

### Performance

Your site should score 95+ on [PageSpeed Insights](https://pagespeed.web.dev/)

### Social Media

Add Open Graph tags for better sharing:

```html
<meta property="og:title" content="Tasty Bites - Food Menu">
<meta property="og:description" content="Delicious homemade food">
<meta property="og:image" content="https://yourusername.github.io/foodprojecthtml/preview.jpg">
```

---

## 🆘 Need Help?

- **GitHub Docs**: [pages.github.com](https://pages.github.com/)
- **Git Tutorial**: [git-scm.com/docs/gittutorial](https://git-scm.com/docs/gittutorial)
- **Markdown Guide**: [markdownguide.org](https://www.markdownguide.org/)

---

## ✅ Deployment Checklist

Before deploying:
- [ ] Tested locally in browser
- [ ] Customized all business information
- [ ] Updated menu items and prices
- [ ] Checked mobile responsiveness
- [ ] Fixed any typos or errors
- [ ] Replaced placeholder text
- [ ] Committed all changes to Git
- [ ] Pushed to GitHub
- [ ] Enabled GitHub Pages
- [ ] Visited live site and verified
- [ ] Shared link with friends/customers!

---

**🎉 You're all set! Welcome to the web!**

*Last updated: February 2026*
