# 👜 2FM BagStore

Modern responsive e-commerce frontend for a bag store built with **HTML, CSS, and Vanilla JavaScript** (no frameworks or libraries). Includes a full product catalog, shopping cart with localStorage persistence, filtering/search, and a polished UI suitable for a real online fashion store.

---

## 📁 Project Structure

```
2fm-bagstore/
├── index.html          # Homepage – hero, featured products, testimonials
├── products.html       # Product listing with filtering & search
├── cart.html           # Shopping cart with full cart management
├── about.html          # Brand story, values, team
├── contact.html        # Contact form & FAQ accordion
│
├── css/
│   ├── main.css        # Global styles, components, layout, navbar, footer
│   └── pages.css       # Page-specific styles (hero, products, cart, about, contact)
│
└── js/
    ├── data/
    │   └── products.js         # Product data (12 items, categories)
    ├── utils/
    │   ├── cart.js             # Cart management (localStorage persistence)
    │   └── helpers.js          # formatPrice, renderStars, debounce, showToast, etc.
    ├── components/
    │   ├── navbar.js           # Sticky responsive navbar with mobile hamburger & search
    │   ├── footer.js           # Footer with newsletter form & back-to-top
    │   └── productCard.js      # Reusable product card component
    └── pages/
        ├── home.js             # Homepage logic (categories, featured products, testimonials)
        ├── products.js         # Product listing, filtering, sorting, search, modal
        ├── cart.js             # Cart page (render, update qty, remove, totals)
        └── contact.js          # Contact form validation & FAQ accordion
```

---

## ✨ Features

| Feature | Details |
|---|---|
| **Homepage** | Hero section with stats, category strip, featured products, promo banner, testimonials |
| **Product Listing** | Dynamic rendering, category filters, price range slider, keyword search, sort options, grid/list view |
| **Product Modal** | Quick-view with color/size selectors, quantity control, add-to-cart |
| **Shopping Cart** | Add, remove, update quantity, subtotal/shipping/tax/total, promo code field, trust badges |
| **LocalStorage** | Cart persists across page reloads and navigation |
| **About Page** | Brand story, core values, team section |
| **Contact Page** | Validated contact form, FAQ accordion, contact details |
| **Responsive** | Mobile-first design, hamburger menu, sticky navbar, back-to-top button |
| **Notifications** | Toast notifications for cart actions and form submissions |
| **Animations** | Scroll-based fade-in animations using IntersectionObserver |

---

## 🚀 Getting Started

No build step required. Simply open `index.html` in a browser or serve via any static file server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js
npx serve .
```

Then open [http://localhost:8080](http://localhost:8080).

---

## 🛠 Tech Stack

- **HTML5** – Semantic markup, accessible attributes
- **CSS3** – Custom properties, CSS Grid, Flexbox, animations, media queries
- **Vanilla JS (ES6+)** – ES modules, IntersectionObserver, localStorage, fetch API patterns
- No frameworks, no build tools, no dependencies
