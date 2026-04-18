/**
 * Helper Utilities
 * Shared helper functions used across the application
 */

/**
 * Format a number as a USD currency string
 * @param {number} amount
 * @returns {string} Formatted price string e.g. "$12.99"
 */
function formatPrice(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

/**
 * Generate star rating HTML string
 * @param {number} rating - Rating value (0–5)
 * @param {number} reviews - Number of reviews
 * @returns {string} HTML string with star icons
 */
function renderStars(rating, reviews) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  let stars = "";
  for (let i = 0; i < fullStars; i++) stars += '<i class="star full">★</i>';
  if (hasHalf) stars += '<i class="star half">★</i>';
  for (let i = 0; i < emptyStars; i++) stars += '<i class="star empty">☆</i>';

  return `<span class="stars">${stars}</span><span class="review-count">(${reviews})</span>`;
}

/**
 * Debounce a function to limit how often it fires
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Milliseconds to wait
 * @returns {Function} Debounced function
 */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Show a toast notification
 * @param {string} message - Message to display
 * @param {string} [type="success"] - "success" | "error" | "info"
 */
function showToast(message, type = "success") {
  // Remove any existing toast
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === "success" ? "✓" : type === "error" ? "✕" : "ℹ"}</span>
    <span class="toast-message">${message}</span>
  `;
  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => toast.classList.add("toast-visible"));

  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove("toast-visible");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, 3000);
}

/**
 * Scroll to top of page smoothly
 */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Check if an element is in the viewport
 * @param {Element} el
 * @returns {boolean}
 */
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

/**
 * Animate elements when they scroll into view
 * @param {string} selector - CSS selector for elements to animate
 */
function animateOnScroll(selector) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  elements.forEach((el) => observer.observe(el));
}

export { formatPrice, renderStars, debounce, showToast, scrollToTop, isInViewport, animateOnScroll };
