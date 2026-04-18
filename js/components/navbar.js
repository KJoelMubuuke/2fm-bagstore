/**
 * Navbar Component
 * Renders and manages the site-wide navigation bar
 */

import { getCartCount, updateCartBadge } from "../utils/cart.js";

/**
 * Determine the relative prefix for asset paths based on current page depth
 * @returns {string} Path prefix (e.g. "" for root, "../" for sub-folder)
 */
function getPathPrefix() {
  const path = window.location.pathname;
  // If we're at root level, no prefix needed
  if (path.endsWith("/") || path.split("/").length <= 2) return "";
  return path.includes("/pages/") ? "../" : "";
}

/**
 * Build and inject the navbar into the page
 */
function renderNavbar() {
  const count = getCartCount();
  const prefix = getPathPrefix();
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const navLinks = [
    { href: `${prefix}index.html`, label: "Home", id: "index.html" },
    { href: `${prefix}products.html`, label: "Shop", id: "products.html" },
    { href: `${prefix}about.html`, label: "About", id: "about.html" },
    { href: `${prefix}contact.html`, label: "Contact", id: "contact.html" },
  ];

  const linksHTML = navLinks
    .map(
      (link) =>
        `<li><a href="${link.href}" class="nav-link${currentPage === link.id ? " active" : ""}">${link.label}</a></li>`
    )
    .join("");

  const navbarHTML = `
    <nav class="navbar" id="navbar">
      <div class="container navbar-inner">
        <!-- Logo -->
        <a href="${prefix}index.html" class="nav-logo">
          <span class="logo-icon">👜</span>
          <span class="logo-text">2FM <span class="logo-accent">BagStore</span></span>
        </a>

        <!-- Desktop Navigation Links -->
        <ul class="nav-links" id="navLinks">
          ${linksHTML}
        </ul>

        <!-- Right-side actions -->
        <div class="nav-actions">
          <button class="nav-icon-btn search-toggle" aria-label="Toggle search" id="searchToggle">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <a href="${prefix}cart.html" class="nav-icon-btn cart-btn" aria-label="View cart">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span class="cart-count" style="display:${count > 0 ? "flex" : "none"}">${count}</span>
          </a>
          <!-- Hamburger for mobile -->
          <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <!-- Search Bar (hidden by default) -->
      <div class="search-bar-wrapper" id="searchBarWrapper">
        <div class="container">
          <form class="search-bar-form" id="searchBarForm" action="${prefix}products.html" method="get">
            <input type="search" name="q" class="search-bar-input" placeholder="Search bags, styles…" autocomplete="off" />
            <button type="submit" class="search-bar-btn">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </nav>
  `;

  // Insert at the start of body (before main content)
  const placeholder = document.getElementById("navbar-placeholder");
  if (placeholder) {
    placeholder.outerHTML = navbarHTML;
  } else {
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
  }

  initNavbar();
}

/**
 * Attach event listeners for mobile menu and search toggle
 */
function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const searchToggle = document.getElementById("searchToggle");
  const searchWrapper = document.getElementById("searchBarWrapper");
  const navbar = document.getElementById("navbar");

  // Hamburger menu
  hamburger?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("nav-open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.classList.toggle("active", isOpen);
  });

  // Close mobile menu when a link is clicked
  navLinks?.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-open");
      hamburger?.classList.remove("active");
      hamburger?.setAttribute("aria-expanded", "false");
    });
  });

  // Search toggle
  searchToggle?.addEventListener("click", () => {
    const isOpen = searchWrapper.classList.toggle("search-open");
    if (isOpen) {
      searchWrapper.querySelector("input")?.focus();
    }
  });

  // Sticky navbar on scroll
  window.addEventListener("scroll", () => {
    navbar?.classList.toggle("navbar-scrolled", window.scrollY > 50);
  });

  // Update badge
  updateCartBadge();
}

export { renderNavbar };
