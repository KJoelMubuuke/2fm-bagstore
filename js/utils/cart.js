/**
 * Cart Utility Module
 * Manages shopping cart state with localStorage persistence
 */

const CART_KEY = "bagstore_cart";

/**
 * Retrieve cart items from localStorage
 * @returns {Array} Array of cart item objects
 */
function getCart() {
  try {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

/**
 * Persist cart items to localStorage
 * @param {Array} items - Array of cart item objects
 */
function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

/**
 * Add a product to the cart or increment its quantity
 * @param {Object} product - Product object to add
 * @param {number} [quantity=1] - Quantity to add
 * @param {string} [selectedColor] - Selected color hex
 * @param {string} [selectedSize] - Selected size string
 * @returns {Array} Updated cart items
 */
function addToCart(product, quantity = 1, selectedColor = null, selectedSize = null) {
  const cart = getCart();
  const existingIndex = cart.findIndex(
    (item) =>
      item.id === product.id &&
      item.selectedColor === selectedColor &&
      item.selectedSize === selectedSize
  );

  if (existingIndex !== -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity,
      selectedColor: selectedColor || product.colors[0],
      selectedSize: selectedSize || product.sizes[0],
    });
  }

  saveCart(cart);
  updateCartBadge();
  return cart;
}

/**
 * Remove an item from the cart by its cart entry index
 * @param {number} index - Index of the item in the cart array
 * @returns {Array} Updated cart items
 */
function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  updateCartBadge();
  return cart;
}

/**
 * Update the quantity of a specific cart item
 * @param {number} index - Index of the item in the cart array
 * @param {number} newQuantity - New quantity value (must be >= 1)
 * @returns {Array} Updated cart items
 */
function updateQuantity(index, newQuantity) {
  const cart = getCart();
  if (newQuantity < 1) return removeFromCart(index);
  cart[index].quantity = newQuantity;
  saveCart(cart);
  return cart;
}

/**
 * Clear all items from the cart
 * @returns {Array} Empty cart array
 */
function clearCart() {
  saveCart([]);
  updateCartBadge();
  return [];
}

/**
 * Calculate cart totals
 * @returns {Object} Object containing subtotal, shipping, tax, and total
 */
function getCartTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : subtotal > 0 ? 9.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return {
    subtotal: +subtotal.toFixed(2),
    shipping: +shipping.toFixed(2),
    tax: +tax.toFixed(2),
    total: +total.toFixed(2),
    itemCount: cart.reduce((sum, item) => sum + item.quantity, 0),
  };
}

/**
 * Get the total number of items in the cart
 * @returns {number} Total item count
 */
function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

/**
 * Update the cart badge element in the navbar
 */
function updateCartBadge() {
  const badge = document.querySelector(".cart-count");
  if (badge) {
    const count = getCartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }
}

export {
  getCart,
  saveCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  getCartTotals,
  getCartCount,
  updateCartBadge,
};
