# 🍽️ Tasty Bites - Food Menu Website

A simple, interactive HTML food menu website designed to showcase your food business online. Perfect for small restaurants, cafes, or home-based food businesses.

## 🌟 Live Demo

Visit the live website: `https://yourusername.github.io/foodprojecthtml`

*(Replace `yourusername` with your actual GitHub username after deployment)*

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment to GitHub Pages](#deployment-to-github-pages)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [License](#license)

## 🎯 About

This is a lightweight, fully responsive food menu website built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build processes - just simple, clean code that works everywhere.

The website was created to provide an easy way for food businesses to showcase their menu online without the complexity of modern web frameworks or content management systems.

## ✨ Features

- **📱 Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **🎨 Interactive UI**: Smooth animations and hover effects
- **🔍 Category Filtering**: Filter menu items by category (Appetizers, Main Course, Desserts, Drinks)
- **🛒 Order Counter**: Track selected items with a floating counter
- **⚡ Fast Loading**: No external dependencies, loads instantly
- **♿ Accessible**: Semantic HTML and proper structure
- **🎭 Modern Design**: Clean, professional appearance with gradient colors
- **📊 SEO Friendly**: Proper meta tags and semantic structure

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with flexbox, grid, and animations
- **JavaScript (ES6)**: Vanilla JS for interactivity
- **GitHub Pages**: Free hosting solution

### Why These Technologies?

- **No Build Process**: Edit and deploy directly without compilation
- **Zero Dependencies**: No npm packages, no frameworks to learn
- **Maximum Compatibility**: Works on all modern browsers
- **Easy Maintenance**: Simple codebase anyone can understand
- **Free Hosting**: GitHub Pages provides reliable, free hosting

## 📁 Project Structure

```
foodprojecthtml/
├── index.html          # Main HTML file with menu structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── README.md           # This file - project documentation
├── DESIGN_CHOICES.md   # Detailed design decisions explanation
└── package.json        # Optional - for local development server
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, Notepad++)
- Git installed on your computer
- A GitHub account

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/foodprojecthtml.git
   cd foodprojecthtml
   ```

2. **Open in browser**:
   - Simply double-click `index.html`, or
   - Right-click `index.html` → Open with → Your Browser

3. **Optional - Use a local server** (recommended):

   Using Node.js (if installed):
   ```bash
   npx serve .
   ```

   Using Python:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   Then visit `http://localhost:8000`

## 🌐 Deployment to GitHub Pages

### Step-by-Step Deployment

1. **Create a GitHub repository**:
   - Go to [GitHub](https://github.com)
   - Click "New Repository"
   - Name it `foodprojecthtml` (or any name you prefer)
   - Keep it public
   - Don't initialize with README (we already have one)

2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Food menu website"
   git branch -M main
   git remote add origin https://github.com/yourusername/foodprojecthtml.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at `https://yourusername.github.io/foodprojecthtml`

4. **Wait a few minutes** for GitHub to build and deploy your site

## 🎨 Customization

### Change Your Business Information

1. **Edit `index.html`**:
   - Update the `<title>` tag
   - Change "Tasty Bites" to your business name
   - Modify the tagline
   - Update contact information in the footer

2. **Customize Menu Items**:
   - Add, remove, or modify menu items in the `menu-grid` section
   - Change emojis to match your food items
   - Update prices and descriptions

3. **Modify Colors**:
   - Edit `styles.css`
   - Change the gradient colors (search for `#667eea` and `#764ba2`)
   - Update any color variables to match your brand

4. **Add Your Logo**:
   - Replace the emoji in the header with an `<img>` tag
   - Add your logo image to the project folder

### Example Menu Item Addition

```html
<div class="menu-item" data-category="main">
    <div class="menu-item-image">🌮</div>
    <h3>Fish Tacos</h3>
    <p class="description">Fresh grilled fish with cilantro and lime</p>
    <p class="price">$11.99</p>
    <button class="order-btn">Add to Order</button>
</div>
```

## 🌍 Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Future Enhancements (Optional)

- Add a shopping cart with checkout functionality
- Integrate with a backend for real orders
- Add image galleries for food items
- Include customer reviews section
- Add online ordering integration
- Multi-language support

## 🤝 Contributing

Feel free to fork this project and customize it for your needs! If you make improvements, consider sharing them back.

## 📄 License

This project is open source and available under the MIT License. Feel free to use it for your business!

## 💡 Support

If you need help or have questions:
- Check `DESIGN_CHOICES.md` for detailed explanations
- Open an issue on GitHub
- Review the code comments for guidance

## 🎉 Acknowledgments

- Built with ❤️ for small food businesses
- Emojis provided by Unicode standard
- Inspired by modern web design principles

---

**Made with 🍕 and ☕ for food lovers everywhere**

*Last updated: February 2026*
