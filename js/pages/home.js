/**
 * Home Page Module
 * Renders the homepage sections: hero, categories, featured products, testimonials
 */

import { PRODUCTS, CATEGORIES } from "../data/products.js";
import { createProductCard, attachCardHandlers } from "../components/productCard.js";
import { animateOnScroll } from "../utils/helpers.js";

/**
 * Render the category strip (horizontal scroll)
 */
function renderCategories() {
  const container = document.getElementById("categoryStrip");
  if (!container) return;

  container.innerHTML = CATEGORIES.map(
    (cat) => `
      <a href="products.html?category=${cat.id}" class="category-chip${cat.id === "all" ? " active" : ""}">
        <span class="category-chip-icon">${cat.icon}</span>
        <span>${cat.name}</span>
      </a>
    `
  ).join("");
}

/**
 * Render featured products (first 4 products with featured=true + 2 more)
 */
function renderFeaturedProducts() {
  const container = document.getElementById("featuredProductsGrid");
  if (!container) return;

  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  container.innerHTML = featured.map((p) => createProductCard(p, true)).join("");
  attachCardHandlers(container, PRODUCTS);
}

/**
 * Render static testimonials
 */
function renderTestimonials() {
  const container = document.getElementById("testimonialsGrid");
  if (!container) return;

  const testimonials = [
    {
      text: "I ordered the Classic Leather Tote and it exceeded my expectations! The quality is incredible and it goes with everything in my wardrobe.",
      name: "Sarah M.",
      role: "Fashion Blogger",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      stars: 5,
    },
    {
      text: "The Urban Backpack Pro is the best purchase I've made this year. Fits my laptop perfectly and looks amazing.",
      name: "James K.",
      role: "UX Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      stars: 5,
    },
    {
      text: "Fast shipping, beautiful packaging, and the Mini Crossbody Bag is even more stunning in person. Will definitely buy again!",
      name: "Amara L.",
      role: "Verified Buyer",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
      stars: 5,
    },
  ];

  container.innerHTML = testimonials
    .map(
      (t) => `
      <div class="testimonial-card fade-up">
        <div class="testimonial-stars">${"★".repeat(t.stars)}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar"
            onerror="this.src='https://via.placeholder.com/44/c8a882/fff?text=${t.name[0]}'" />
          <div>
            <div class="testimonial-name">${t.name}</div>
            <div class="testimonial-role">${t.role}</div>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

/**
 * Initialize the homepage
 */
function initHome() {
  renderCategories();
  renderFeaturedProducts();
  renderTestimonials();
  animateOnScroll(".fade-up");
}

export { initHome };
