/**
 * Products Page Module
 * Handles product listing, filtering, search, sorting, and modal display
 */

import { PRODUCTS, CATEGORIES } from "../data/products.js";
import { createProductCard, attachCardHandlers } from "../components/productCard.js";
import { formatPrice, renderStars, debounce, showToast, animateOnScroll } from "../utils/helpers.js";
import { addToCart } from "../utils/cart.js";

/** Current filter/search state */
const state = {
  category: "all",
  search: "",
  sortBy: "featured",
  maxPrice: 200,
  viewMode: "grid", // "grid" | "list"
};

/**
 * Filter and sort products based on current state
 * @returns {Array} Filtered/sorted product array
 */
function getFilteredProducts() {
  let results = [...PRODUCTS];

  // Category filter
  if (state.category !== "all") {
    results = results.filter((p) => p.category === state.category);
  }

  // Search filter
  if (state.search.trim()) {
    const q = state.search.toLowerCase().trim();
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  // Price filter
  results = results.filter((p) => p.price <= state.maxPrice);

  // Sort
  switch (state.sortBy) {
    case "price-asc":
      results.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      results.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      results.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      results.sort((a, b) => b.id - a.id);
      break;
    case "featured":
    default:
      results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return results;
}

/**
 * Render the product grid
 */
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const countEl = document.getElementById("resultsCount");
  if (!grid) return;

  const filtered = getFilteredProducts();

  // Update count
  if (countEl) {
    countEl.textContent = `${filtered.length} product${filtered.length !== 1 ? "s" : ""}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-state-icon">🔍</div>
        <h3>No products found</h3>
        <p>Try adjusting your filters or search query.</p>
        <button class="btn btn-primary" onclick="window.location.href='products.html'">Clear Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((p) => createProductCard(p)).join("");

  // Apply view mode
  grid.className = `product-grid${state.viewMode === "list" ? " list-view" : ""}`;

  // Attach handlers – clicking card opens modal, quick-add adds to cart
  attachCardHandlers(grid, PRODUCTS);

  // Clicking product name/image opens modal
  grid.querySelectorAll(".product-card").forEach((card) => {
    card.querySelectorAll(".product-card-img, .product-name a").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const id = parseInt(card.dataset.id, 10);
        openProductModal(id);
      });
    });
  });

  animateOnScroll(".product-card");
}

/**
 * Render filter category radio buttons
 */
function renderFilterCategories() {
  const list = document.getElementById("categoryFilterList");
  if (!list) return;

  list.innerHTML = CATEGORIES.map(
    (cat) => `
      <label class="filter-option">
        <input type="radio" name="category" value="${cat.id}" ${state.category === cat.id ? "checked" : ""} />
        <span>${cat.icon} ${cat.name}</span>
      </label>
    `
  ).join("");

  list.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      state.category = radio.value;
      renderProducts();
    });
  });
}

/**
 * Initialize product search input
 */
function initSearch() {
  const input = document.getElementById("productSearch");
  if (!input) return;

  // Pre-fill from URL query param
  const urlParams = new URLSearchParams(window.location.search);
  const q = urlParams.get("q");
  if (q) {
    input.value = q;
    state.search = q;
  }

  input.addEventListener(
    "input",
    debounce(() => {
      state.search = input.value;
      renderProducts();
    }, 300)
  );
}

/**
 * Initialize sort select
 */
function initSort() {
  const select = document.getElementById("sortSelect");
  if (!select) return;

  select.addEventListener("change", () => {
    state.sortBy = select.value;
    renderProducts();
  });
}

/**
 * Initialize price range slider
 */
function initPriceRange() {
  const slider = document.getElementById("priceRange");
  const maxLabel = document.getElementById("priceMax");
  if (!slider) return;

  slider.addEventListener("input", () => {
    state.maxPrice = parseInt(slider.value, 10);
    if (maxLabel) maxLabel.textContent = `$${slider.value}`;
    renderProducts();
  });
}

/**
 * Initialize view mode toggles (grid vs. list)
 */
function initViewToggle() {
  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".view-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.viewMode = btn.dataset.view;
      renderProducts();
    });
  });
}

/**
 * Initialize mobile filter panel toggle
 */
function initMobileFilter() {
  const toggle = document.getElementById("filterToggle");
  const panel = document.getElementById("filterPanel");
  const closeBtn = document.getElementById("filterClose");

  toggle?.addEventListener("click", () => {
    panel?.classList.add("filter-open");
    document.body.style.overflow = "hidden";
  });

  closeBtn?.addEventListener("click", () => {
    panel?.classList.remove("filter-open");
    document.body.style.overflow = "";
  });
}

/**
 * Open the product detail modal
 * @param {number} id - Product ID
 */
function openProductModal(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;

  let selectedColor = product.colors[0];
  let selectedSize = product.sizes[0];
  let quantity = 1;

  const overlay = document.getElementById("productModal");
  const body = document.getElementById("productModalBody");

  if (!overlay || !body) return;

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  body.innerHTML = `
    <div class="modal-inner">
      <img src="${product.image}" alt="${product.name}" class="modal-img"
        onerror="this.src='https://via.placeholder.com/400x400/f0ebe3/8B4513?text=Bag'" />
      <div class="modal-details">
        <p class="product-category-label">${product.category}</p>
        <h2 style="font-size:1.5rem;margin-bottom:0.5rem">${product.name}</h2>
        <div class="product-rating" style="margin-bottom:1rem">
          ${renderStars(product.rating, product.reviews)}
        </div>
        <div class="product-price" style="margin-bottom:1rem">
          <span class="modal-price">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ""}
          ${discount ? `<span class="price-discount">-${discount}%</span>` : ""}
        </div>
        <p class="modal-desc" style="margin-bottom:1.5rem">${product.description}</p>

        <!-- Color Selector -->
        <div style="margin-bottom:1rem">
          <p class="variant-label">Color</p>
          <div class="color-options">
            ${product.colors
              .map(
                (c, i) =>
                  `<button class="color-option${i === 0 ? " selected" : ""}" style="background:${c}" data-color="${c}" title="${c}"></button>`
              )
              .join("")}
          </div>
        </div>

        <!-- Size Selector -->
        <div style="margin-bottom:1rem">
          <p class="variant-label">Size</p>
          <div class="size-options">
            ${product.sizes
              .map(
                (s, i) =>
                  `<button class="size-option${i === 0 ? " selected" : ""}" data-size="${s}">${s}</button>`
              )
              .join("")}
          </div>
        </div>

        <!-- Quantity -->
        <div style="margin-bottom:1.5rem">
          <p class="variant-label">Quantity</p>
          <div class="qty-selector">
            <button class="qty-btn" id="qtyDec">−</button>
            <span class="qty-value" id="qtyValue">1</span>
            <button class="qty-btn" id="qtyInc">+</button>
          </div>
        </div>

        <button class="btn btn-primary btn-full" id="modalAddToCart">
          Add to Cart — ${formatPrice(product.price)}
        </button>
        ${product.stock <= 5 ? `<p style="color:var(--color-error);font-size:0.8rem;margin-top:0.5rem">⚠ Only ${product.stock} left in stock!</p>` : ""}
      </div>
    </div>
  `;

  // Color selection
  body.querySelectorAll(".color-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      body.querySelectorAll(".color-option").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedColor = btn.dataset.color;
    });
  });

  // Size selection
  body.querySelectorAll(".size-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      body.querySelectorAll(".size-option").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedSize = btn.dataset.size;
    });
  });

  // Quantity
  const qtyValue = body.querySelector("#qtyValue");
  body.querySelector("#qtyDec")?.addEventListener("click", () => {
    if (quantity > 1) { quantity--; qtyValue.textContent = quantity; }
  });
  body.querySelector("#qtyInc")?.addEventListener("click", () => {
    if (quantity < product.stock) { quantity++; qtyValue.textContent = quantity; }
  });

  // Add to cart
  body.querySelector("#modalAddToCart")?.addEventListener("click", () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    showToast(`"${product.name}" added to cart!`);
    closeProductModal();
  });

  // Open overlay
  overlay.classList.add("modal-open");
  document.body.style.overflow = "hidden";
}

/**
 * Close the product detail modal
 */
function closeProductModal() {
  const overlay = document.getElementById("productModal");
  overlay?.classList.remove("modal-open");
  document.body.style.overflow = "";
}

/**
 * Handle URL params (category, search query)
 */
function readUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("category");
  const q = params.get("q");
  const id = params.get("id");

  if (cat && CATEGORIES.find((c) => c.id === cat)) {
    state.category = cat;
  }

  if (q) {
    state.search = q;
    const input = document.getElementById("productSearch");
    if (input) input.value = q;
  }

  if (id) {
    // Open modal after products have rendered
    setTimeout(() => openProductModal(parseInt(id, 10)), 100);
  }
}

/**
 * Clear all filters
 */
function clearFilters() {
  state.category = "all";
  state.search = "";
  state.maxPrice = 200;
  state.sortBy = "featured";

  const input = document.getElementById("productSearch");
  if (input) input.value = "";

  const slider = document.getElementById("priceRange");
  if (slider) {
    slider.value = 200;
    const maxLabel = document.getElementById("priceMax");
    if (maxLabel) maxLabel.textContent = "$200";
  }

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = "featured";

  renderFilterCategories();
  renderProducts();
}

/**
 * Initialize the products page
 */
function initProducts() {
  readUrlParams();
  renderFilterCategories();
  initSearch();
  initSort();
  initPriceRange();
  initViewToggle();
  initMobileFilter();
  renderProducts();

  // Clear filters button
  document.getElementById("clearFilters")?.addEventListener("click", clearFilters);

  // Modal close handlers
  document.getElementById("modalClose")?.addEventListener("click", closeProductModal);
  document.getElementById("productModal")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeProductModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProductModal();
  });
}

export { initProducts };
