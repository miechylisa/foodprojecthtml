# FoodProjectHTML: Professional Student Profile Website

## Abstract
This repository contains a lightweight, static web application that presents a professional profile for Lisa Michelle, a university student in Computer Science. The implementation is intentionally minimal and uses only HTML, CSS, and vanilla JavaScript. The repository name has been preserved as `foodprojecthtml` for GitHub continuity.

## Project Context
The project was originally structured as a simple menu-style site. It has been refactored into a professional academic profile while preserving the same core architecture:
- single-page HTML document
- one stylesheet
- one JavaScript file for basic interactivity
- no build system
- no external dependencies

## Objectives
- Maintain a clean, readable, and maintainable codebase.
- Provide a professional profile interface suitable for student presentation.
- Preserve deployment simplicity for GitHub Pages.
- Ensure responsive behavior across mobile, tablet, and laptop viewports.

## Technical Summary
- `index.html`: semantic content structure for profile sections.
- `styles.css`: mobile-first styling with tablet and laptop media queries.
- `script.js`: category filtering and interaction state updates.
- No framework, bundler, transpiler, or package dependency is required for runtime.

## Project Structure
```text
foodprojecthtml/
|- index.html
|- styles.css
|- script.js
|- README.md
|- DESIGN_CHOICES.md
|- DEPLOYMENT.md
|- PROJECT_SUMMARY.md
`- package.json
```

## Local Usage
1. Clone the repository:
```bash
git clone https://github.com/yourusername/foodprojecthtml.git
cd foodprojecthtml
```
2. Open `index.html` directly in a browser, or run a simple local server:
```bash
python -m http.server 8000
```
3. Visit `http://localhost:8000`.

## Deployment
This project is compatible with GitHub Pages.
1. Push the repository to GitHub.
2. Open repository settings.
3. Enable Pages deployment from the `main` branch root.
4. Access the deployed site at:
`https://yourusername.github.io/foodprojecthtml`

## Design and Responsiveness
The current design follows a restrained visual approach intended to resemble a conventional 2019-style profile website:
- flat color palette
- simple borders and subtle shadows
- minimal motion
- mobile-first CSS
- tablet optimization at `min-width: 768px`
- laptop optimization at `min-width: 1024px`

## Customization Notes
- Update profile text and contact details in `index.html`.
- Adjust spacing, typography, and color values in `styles.css`.
- Extend filter categories or interaction labels in `script.js` if needed.

## Reproducibility and Maintenance
Because the project is static and dependency-free, reproduction is straightforward across operating systems and modern browsers. Long-term maintenance is primarily a matter of content updates and small CSS/JS revisions.

## License
This project is open source and available under the MIT License.

## Last Updated
February 2026
