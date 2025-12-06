# Portfolio

Portfolio website for Christopher E. White — a simple, responsive static site showcasing experience and projects.

## Description
- **Purpose:** Personal portfolio and contact page.
- **Built with:** HTML and CSS (responsive, utility classes), static assets (images).
- **Notes:** Navigation links open internal sections or external pages in `blog/` and `Projects/`. Profile image uses responsive CSS to preserve aspect ratio.

## Quick Start
- Open locally: double-click `index.html` or open it in your browser.
- Serve locally (recommended):
\`\`\`bash
# Python 3 (macOS / zsh)
python3 -m http.server 8000
# then open: http://localhost:8000
\`\`\`

## Project Structure
- `index.html` — Main landing page
- `styles.css` — Main stylesheet
- `background.avif`, `background2.avif` — Background images
- `github-mark-white.png`, `github_avatar_compressed.jpg`, `linkedin logo_icon.png` — Social / avatar images
- `Blog/` — Blog page and styles
- `Projects/` — Project pages and styles

## Recent Fixes & Improvements
- Fixed invalid HTML nesting and typos.
- Removed hard-coded `width`/`height` on the profile image and added responsive CSS (`aspect-ratio` + `object-fit`) to preserve proportions.
- Added accessibility improvements: `role="main"`, `rel="noopener noreferrer"` on external links, visible focus styles.
- Consolidated navigation and corrected list structure.

## Accessibility & Validation
- Validate HTML with the W3C validator: https://validator.w3.org/
- Check color contrast for focus outlines and backgrounds.
- Use Lighthouse (Chrome DevTools) for performance and accessibility audits.

## Development Notes
- Combine CSS variables in a single `:root` block for maintainability.
- Use responsive units (`clamp`, `aspect-ratio`, CSS variables) consistently.
- If you want a dev toolchain (minify, live reload), I can add a minimal `package.json` and dev-server setup.

- **Author:** Christopher E. White  
