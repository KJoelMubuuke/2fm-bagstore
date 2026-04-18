/**
 * Cart Page Module
 * Handles rendering and interaction for the shopping cart
 */

import {
  getCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  getCartTotals,
} from "../utils/cart.js";
import { formatPrice, showToast } from "../utils/helpers.js";

/**
 * Render the cart items table
 */
function renderCartItems() {
  const container = document.getElementById("cartItemsContainer");
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🛍️</div>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added anything yet. Discover our latest bags!</p>
        <a href="products.html" class="btn btn-primary">Shop Now</a>
      </div>
    `;
    // Hide summary / show placeholder
    const summary = document.getElementById("cartSummarySection");
    if (summary) summary.style.display = "none";
    return;
  }

  // Ensure summary is visible
  const summary = document.getElementById("cartSummarySection");
  if (summary) summary.style.display = "";

  const rowsHTML = cart
    .map(
      (item, index) => `
      <div class="cart-item" data-index="${index}">
        <div class="cart-item-info">
          <img
            src="${item.image}"
            alt="${item.name}"
            class="cart-item-img"
            onerror="this.src='https://via.placeholder.com/72x72/f0ebe3/8B4513?text=Bag'"
          />
          <div>
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-meta">
              <span class="color-dot" style="background:${item.selectedColor};display:inline-block;margin-right:4px"></span>
              Size: ${item.selectedSize}
            </div>
          </div>
        </div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-qty">
          <button class="cart-qty-btn qty-decrease" data-index="${index}" aria-label="Decrease quantity">−</button>
          <span class="cart-qty-value">${item.quantity}</span>
          <button class="cart-qty-btn qty-increase" data-index="${index}" aria-label="Increase quantity">+</button>
        </div>
        <div class="cart-item-total">${formatPrice(item.price * item.quantity)}</div>
        <button class="cart-remove-btn" data-index="${index}" aria-label="Remove ${item.name} from cart">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
          </svg>
        </button>
      </div>
    `
    )
    .join("");

  container.innerHTML = `
    <div class="cart-table">
      <div class="cart-table-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
        <span></span>
      </div>
      ${rowsHTML}
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:1.5rem;flex-wrap:wrap;gap:1rem">
      <a href="products.html" class="btn btn-ghost btn-sm">← Continue Shopping</a>
      <button class="btn btn-ghost btn-sm" id="clearCartBtn">🗑 Clear Cart</button>
    </div>
  `;

  attachCartHandlers(container);
}

/**
 * Render cart summary totals
 */
function renderCartSummary() {
  const totals = getCartTotals();
  const subtotalEl = document.getElementById("cartSubtotal");
  const shippingEl = document.getElementById("cartShipping");
  const taxEl = document.getElementById("cartTax");
  const totalEl = document.getElementById("cartTotal");

  if (subtotalEl) subtotalEl.textContent = formatPrice(totals.subtotal);
  if (shippingEl) {
    shippingEl.textContent = totals.shipping === 0 ? "" : formatPrice(totals.shipping);
    shippingEl.innerHTML =
      totals.shipping === 0
        ? '<span class="shipping-free">FREE</span>'
        : formatPrice(totals.shipping);
  }
  if (taxEl) taxEl.textContent = formatPrice(totals.tax);
  if (totalEl) totalEl.textContent = formatPrice(totals.total);
}

/**
 * Attach event handlers to cart item controls
 * @param {Element} container
 */
function attachCartHandlers(container) {
  // Quantity decrease
  container.querySelectorAll(".qty-decrease").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index, 10);
      const cart = getCart();
      updateQuantity(index, cart[index].quantity - 1);
      refresh();
    });
  });

  // Quantity increase
  container.querySelectorAll(".qty-increase").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index, 10);
      const cart = getCart();
      updateQuantity(index, cart[index].quantity + 1);
      refresh();
    });
  });

  // Remove item
  container.querySelectorAll(".cart-remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index, 10);
      const cart = getCart();
      const name = cart[index]?.name || "Item";
      removeFromCart(index);
      refresh();
      showToast(`"${name}" removed from cart.`, "info");
    });
  });

  // Clear cart
  const clearBtn = document.getElementById("clearCartBtn");
  clearBtn?.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear your cart?")) {
      clearCart();
      refresh();
      showToast("Cart cleared.", "info");
    }
  });
}

/**
 * Re-render cart items and summary
 */
function refresh() {
  renderCartItems();
  renderCartSummary();
}

/**
 * Initialize promo code form (demo only)
 */
function initPromoCode() {
  const form = document.getElementById("promoForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector(".promo-input");
    const code = input?.value.trim().toUpperCase();
    if (code === "BAGSTORE10") {
      showToast("Promo code applied! 10% discount coming soon.", "success");
    } else {
      showToast("Invalid promo code.", "error");
    }
  });
}

/**
 * Initialize checkout button (demo)
 */
function initCheckout() {
  const btn = document.getElementById("checkoutBtn");
  btn?.addEventListener("click", () => {
    const cart = getCart();
    if (cart.length === 0) {
      showToast("Your cart is empty!", "error");
      return;
    }
    showToast("Redirecting to checkout… (demo)", "info");
  });
}

/**
 * Initialize the cart page
 */
function initCart() {
  refresh();
  initPromoCode();
  initCheckout();
}

export { initCart };
