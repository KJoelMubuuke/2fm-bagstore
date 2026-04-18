/**
 * Product Card Component
 * Renders a single product card for use in grids and featured sections
 */

import { formatPrice, renderStars } from "../utils/helpers.js";
import { addToCart } from "../utils/cart.js";
import { showToast } from "../utils/helpers.js";

/**
 * Generate HTML markup for a product card
 * @param {Object} product - Product data object
 * @param {boolean} [featured=false] - Whether to apply featured card styling
 * @returns {string} HTML string for the product card
 */
function createProductCard(product, featured = false) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const priceHTML = product.originalPrice
    ? `<span class="price-current">${formatPrice(product.price)}</span>
       <span class="price-original">${formatPrice(product.originalPrice)}</span>
       <span class="price-discount">-${discount}%</span>`
    : `<span class="price-current">${formatPrice(product.price)}</span>`;

  const badgeHTML = product.badge
    ? `<span class="product-badge badge-${product.badge.toLowerCase().replace(/\s+/g, "-")}">${product.badge}</span>`
    : "";

  const colorsHTML = product.colors
    .map(
      (c) =>
        `<span class="color-dot" style="background:${c}" title="${c}"></span>`
    )
    .join("");

  return `
    <article class="product-card${featured ? " product-card-featured" : ""}" data-id="${product.id}" data-category="${product.category}">
      <div class="product-card-img-wrap">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-card-img"
          loading="lazy"
          onerror="this.src='https://via.placeholder.com/400x320/f0ebe3/8B4513?text=Bag'"
        />
        ${badgeHTML}
        <div class="product-card-overlay">
          <button
            class="btn btn-quick-add"
            data-id="${product.id}"
            aria-label="Add ${product.name} to cart"
          >
            Add to Cart
          </button>
          <a href="products.html?id=${product.id}" class="btn btn-outline btn-view" aria-label="View ${product.name}">
            View
          </a>
        </div>
      </div>
      <div class="product-card-body">
        <p class="product-category-label">${product.category}</p>
        <h3 class="product-name">
          <a href="products.html?id=${product.id}">${product.name}</a>
        </h3>
        <div class="product-rating">
          ${renderStars(product.rating, product.reviews)}
        </div>
        <div class="product-price">${priceHTML}</div>
        <div class="product-colors">${colorsHTML}</div>
      </div>
    </article>
  `;
}

/**
 * Attach "Add to Cart" click handlers to all product card buttons within a container
 * @param {Element} container - Parent DOM element containing product cards
 * @param {Array} products - Array of product data objects
 */
function attachCardHandlers(container, products) {
  container.querySelectorAll(".btn-quick-add").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id, 10);
      const product = products.find((p) => p.id === id);
      if (!product) return;

      addToCart(product);

      // Visual feedback
      btn.textContent = "✓ Added!";
      btn.classList.add("btn-added");
      setTimeout(() => {
        btn.textContent = "Add to Cart";
        btn.classList.remove("btn-added");
      }, 1500);

      showToast(`"${product.name}" added to cart!`);
    });
  });
}

export { createProductCard, attachCardHandlers };
