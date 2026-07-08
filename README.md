# Zarrah Foundation — Official Website

**Live URL:** [https://zarrah.org](https://zarrah.org)

## Overview

Static website for Zarrah Foundation, a registered nonprofit society in Bangladesh (Registration No. S-15000/2026). Built with pure HTML5, CSS3, and vanilla JavaScript — no frameworks or libraries.

## Technology

| Layer | Technology |
|-------|-----------|
| Markup | Semantic HTML5 |
| Styling | CSS3 Custom Properties |
| Interaction | Vanilla JavaScript (ES5+) |
| Fonts | Google Fonts (Poppins + Inter) |
| Frameworks | None |

## Folder Structure

```
/
├── index.html              # Home page
├── about.html              # About page
├── mission.html            # Mission & Vision
├── objectives.html         # Objectives
├── leadership.html         # Leadership
├── members.html            # Founding Members
├── legal.html              # Legal & Transparency
├── contact.html            # Contact
│
├── assets/
│   ├── css/
│   │   ├── style.css       # Main stylesheet + design system
│   │   └── responsive.css  # Responsive breakpoints
│   ├── js/
│   │   └── app.js          # Interactive behaviors
│   ├── images/             # Image assets (placeholder)
│   ├── icons/              # Favicon & app icons
│   └── docs/               # Downloadable documents (PDF)
│
├── robots.txt              # Search engine crawl rules
├── sitemap.xml             # XML sitemap
├── manifest.json           # Web app manifest
└── README.md               # This file
```

## Deployment (cPanel)

1. Upload all files to the `public_html` directory on your hosting account.
2. No build step required — all files are production-ready static assets.
3. Ensure `.html` files are served with `Content-Type: text/html; charset=UTF-8`.
4. Verify `robots.txt` and `sitemap.xml` are accessible at root.

## Replacing Placeholders

| Placeholder | Location | Instructions |
|-------------|----------|--------------|
| Logo mark | All pages (`.logo__mark`) | Replace the circular div/SVG with your logo image |
| Member photos | `members.html`, `leadership.html` | Replace SVG placeholders in `.profile-card__photo` / `.leadership-card__photo` with `<img>` tags |
| Documents | `assets/docs/` | Add PDF files: `registration-certificate.pdf`, `memorandum.pdf`, `constitution.pdf`, `subscriber-list.pdf` |
| Google Map | `contact.html` | Replace `.map-placeholder` div with an embedded Google Maps `<iframe>` |
| Favicon | All pages `<head>` | Add favicon files to `assets/icons/` and update `<link>` tags |

## SEO Checklist

- [x] Semantic HTML5 structure
- [x] Unique title and meta description per page
- [x] OpenGraph meta tags
- [x] Twitter Card meta tags
- [x] Organization JSON-LD structured data (home page)
- [x] Canonical URLs
- [x] robots.txt
- [x] sitemap.xml
- [x] Heading hierarchy (single h1 per page)
- [x] Image alt attributes
- [x] Lazy loading support

## Accessibility

- [x] WCAG AA color contrast
- [x] Skip-to-content link
- [x] Keyboard navigation support
- [x] Focus visible states
- [x] ARIA labels on interactive elements
- [x] Reduced motion support (`prefers-reduced-motion`)
- [x] Semantic landmark roles

## Performance Targets

| Metric | Target |
|--------|--------|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

## Content Governance

- **Annual Reports**: Add to `assets/docs/` and update download link in `legal.html` (remove `btn--disabled` class).
- **Financial Reports**: Same as above.
- **Policies**: Same as above.
- **New members**: Add profile cards to `members.html` following existing card structure.

## License

Copyright © 2026 Zarrah Foundation. All Rights Reserved.
