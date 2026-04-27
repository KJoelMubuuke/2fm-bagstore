const products = [
  {
    id: 1,
    name: "Soho Work Tote",
    category: "tote",
    price: 80000,
    image: "images/bag-1.jpg",
    desc: "Your perfect companion for city strolls. Features practical compartments and secure closures.",
    isTrending: false,
    stockCount: 12
  },
  {
    id: 2,
    name: "Heritage Satchel",
    category: "crossbody",
    price: 150000,
    image: "images/bag-2.jpg",
    desc: "Rugged yet refined. Holds everything you need while maintaining a sleek, minimalist profile.",
    isTrending: false,
    stockCount: 34
  },
  {
    id: 3,
    name: "Luna Crossbody",
    category: "crossbody",
    price: 170000,
    image: "images/bag-3.jpg",
    desc: "A timeless silhouette designed for the modern lifestyle. Handcrafted from premium materials.",
    isTrending: true,
    stockCount: 40
  },
  {
    id: 4,
    name: "Regent Satchel",
    category: "crossbody",
    price: 220000,
    image: "images/bag-4.jpg",
    desc: "Clean lines and robust hardware make this the definitive everyday carry for any occasion.",
    isTrending: true,
    stockCount: 27
  },
  {
    id: 5,
    name: "Harper Shopper Tote",
    category: "tote",
    price: 200000,
    image: "images/bag-5.jpg",
    desc: "A timeless silhouette designed for the modern lifestyle. Handcrafted from premium materials.",
    isTrending: false,
    stockCount: 34
  },
  {
    id: 6,
    name: "Camden Tote",
    category: "tote",
    price: 120000,
    image: "images/bag-6.jpg",
    desc: "Elegant and sophisticated. Built perfectly with luxury detailing and durable straps.",
    isTrending: false,
    stockCount: 2
  },
  {
    id: 7,
    name: "Briar Structured Satchel",
    category: "crossbody",
    price: 170000,
    image: "images/bag-7.jpg",
    desc: "Vintage inspiration meets modern flair. Guaranteed to turn heads inside the office or out.",
    isTrending: true,
    stockCount: 8
  },
  {
    id: 8,
    name: "Noelle Evening Clutch",
    category: "clutch",
    price: 160000,
    image: "images/bag-8.jpg",
    desc: "Vintage inspiration meets modern flair. Guaranteed to turn heads inside the office or out.",
    isTrending: false,
    stockCount: 6
  },
  {
    id: 9,
    name: "Mila Crossbody",
    category: "crossbody",
    price: 130000,
    image: "images/bag-9.jpg",
    desc: "Elegant and sophisticated. Built perfectly with luxury detailing and durable straps.",
    isTrending: false,
    stockCount: 18
  },
  {
    id: 10,
    name: "West End Tote",
    category: "tote",
    price: 170000,
    image: "images/bag-10.jpg",
    desc: "Vintage inspiration meets modern flair. Guaranteed to turn heads inside the office or out.",
    isTrending: false,
    stockCount: 34
  },
  {
    id: 11,
    name: "Aria Mini Bag",
    category: "mini",
    price: 240000,
    image: "images/bag-11.jpg",
    desc: "Vintage inspiration meets modern flair. Guaranteed to turn heads inside the office or out.",
    isTrending: false,
    stockCount: 40
  },
  {
    id: 12,
    name: "Nora Mini Bag",
    category: "mini",
    price: 140000,
    image: "images/bag-12.jpg",
    desc: "Rugged yet refined. Holds everything you need while maintaining a sleek, minimalist profile.",
    isTrending: false,
    stockCount: 29
  },
  {
    id: 13,
    name: "Siena Clutch",
    category: "clutch",
    price: 180000,
    image: "images/bag-13.jpg",
    desc: "Soft texture for a bold statement. Brings a touch of tactile luxury to your ensemble.",
    isTrending: true,
    stockCount: 3
  },
  {
    id: 14,
    name: "Elsie Flap Mini",
    category: "mini",
    price: 130000,
    image: "images/bag-14.jpg",
    desc: "Elegant and sophisticated. Built perfectly with luxury detailing and durable straps.",
    isTrending: true,
    stockCount: 6
  },
  {
    id: 15,
    name: "Ruby Mini Bag",
    category: "mini",
    price: 60000,
    image: "images/bag-15.jpg",
    desc: "Your perfect companion for city strolls. Features practical compartments and secure closures.",
    isTrending: false,
    stockCount: 24
  },
  {
    id: 16,
    name: "Selene Clutch",
    category: "clutch",
    price: 210000,
    image: "images/bag-16.jpg",
    desc: "Your perfect companion for city strolls. Features practical compartments and secure closures.",
    isTrending: true,
    stockCount: 35
  },
  {
    id: 17,
    name: "Rowan Satchel",
    category: "crossbody",
    price: 130000,
    image: "images/bag-17.jpg",
    desc: "Small in size, big on style. Adds a pop of personality to any daily outfit.",
    isTrending: false,
    stockCount: 32
  },
  {
    id: 18,
    name: "Ivy Flap Mini",
    category: "mini",
    price: 170000,
    image: "images/bag-18.jpg",
    desc: "Soft texture for a bold statement. Brings a touch of tactile luxury to your ensemble.",
    isTrending: false,
    stockCount: 15
  },
  {
    id: 19,
    name: "Poppy Mini Bag",
    category: "mini",
    price: 90000,
    image: "images/bag-19.jpg",
    desc: "Soft texture for a bold statement. Brings a touch of tactile luxury to your ensemble.",
    isTrending: true,
    stockCount: 35
  },
  {
    id: 20,
    name: "Marlowe Clutch",
    category: "clutch",
    price: 190000,
    image: "images/bag-20.jpg",
    desc: "Elegant and sophisticated. Built perfectly with luxury detailing and durable straps.",
    isTrending: false,
    stockCount: 37
  },
  {
    id: 21,
    name: "Belle Clutch",
    category: "clutch",
    price: 150000,
    image: "images/bag-21.jpg",
    desc: "Your perfect companion for city strolls. Features practical compartments and secure closures.",
    isTrending: true,
    stockCount: 21
  },
  {
    id: 22,
    name: "Ava Satchel",
    category: "crossbody",
    price: 80000,
    image: "images/bag-22.jpg",
    desc: "Soft texture for a bold statement. Brings a touch of tactile luxury to your ensemble.",
    isTrending: true,
    stockCount: 34
  },
  {
    id: 23,
    name: "Monarch Clutch",
    category: "clutch",
    price: 250000,
    image: "images/bag-23.jpg",
    desc: "Rugged yet refined. Holds everything you need while maintaining a sleek, minimalist profile.",
    isTrending: false,
    stockCount: 15
  },
  {
    id: 24,
    name: "Portia Shoulder Bag",
    category: "crossbody",
    price: 230000,
    image: "images/bag-24.jpg",
    desc: "Elegant and sophisticated. Built perfectly with luxury detailing and durable straps.",
    isTrending: false,
    stockCount: 39
  },
  {
    id: 25,
    name: "Zoe Mini Bag",
    category: "mini",
    price: 150000,
    image: "images/bag-25.jpg",
    desc: "Vintage inspiration meets modern flair. Guaranteed to turn heads inside the office or out.",
    isTrending: true,
    stockCount: 24
  },
  {
    id: 26,
    name: "Cleo Clutch",
    category: "clutch",
    price: 180000,
    image: "images/bag-26.jpg",
    desc: "Vintage inspiration meets modern flair. Guaranteed to turn heads inside the office or out.",
    isTrending: false,
    stockCount: 29
  },
  {
    id: 27,
    name: "Eden Shoulder Bag",
    category: "crossbody",
    price: 60000,
    image: "images/bag-27.jpg",
    desc: "Vintage inspiration meets modern flair. Guaranteed to turn heads inside the office or out.",
    isTrending: false,
    stockCount: 30
  },
  {
    id: 28,
    name: "Gia Mini Bag",
    category: "mini",
    price: 200000,
    image: "images/bag-28.jpg",
    desc: "Elegant and sophisticated. Built perfectly with luxury detailing and durable straps.",
    isTrending: true,
    stockCount: 7
  },
  {
    id: 29,
    name: "Demi Clutch",
    category: "clutch",
    price: 90000,
    image: "images/bag-29.jpg",
    desc: "Your perfect companion for city strolls. Features practical compartments and secure closures.",
    isTrending: false,
    stockCount: 28
  },
  {
    id: 30,
    name: "Mae Mini Bag",
    category: "mini",
    price: 150000,
    image: "images/bag-30.jpg",
    desc: "Rugged yet refined. Holds everything you need while maintaining a sleek, minimalist profile.",
    isTrending: true,
    stockCount: 9
  },
  {
    id: 31,
    name: "Olive Shoulder Bag",
    category: "crossbody",
    price: 120000,
    image: "images/bag-31.jpg",
    desc: "Clean lines and robust hardware make this the definitive everyday carry for any occasion.",
    isTrending: false,
    stockCount: 3
  },
  {
    id: 32,
    name: "Sloane Shoulder Bag",
    category: "crossbody",
    price: 230000,
    image: "images/bag-32.jpg",
    desc: "Small in size, big on style. Adds a pop of personality to any daily outfit.",
    isTrending: true,
    stockCount: 26
  },
  {
    id: 33,
    name: "Lyra Shoulder Bag",
    category: "crossbody",
    price: 90000,
    image: "images/bag-33.jpg",
    desc: "Small in size, big on style. Adds a pop of personality to any daily outfit.",
    isTrending: false,
    stockCount: 22
  },
  {
    id: 34,
    name: "Mercer Tote",
    category: "tote",
    price: 230000,
    image: "images/bag-34.jpg",
    desc: "Soft texture for a bold statement. Brings a touch of tactile luxury to your ensemble.",
    isTrending: false,
    stockCount: 4
  },
  {
    id: 35,
    name: "Faye Mini Bag",
    category: "mini",
    price: 190000,
    image: "images/bag-35.jpg",
    desc: "Elegant and sophisticated. Built perfectly with luxury detailing and durable straps.",
    isTrending: true,
    stockCount: 37
  },
  {
    id: 36,
    name: "Opal Clutch",
    category: "clutch",
    price: 240000,
    image: "images/bag-36.jpg",
    desc: "Elegant and sophisticated. Built perfectly with luxury detailing and durable straps.",
    isTrending: false,
    stockCount: 5
  },
  {
    id: 37,
    name: "Serena Clutch",
    category: "clutch",
    price: 250000,
    image: "images/bag-37.jpg",
    desc: "Clean lines and robust hardware make this the definitive everyday carry for any occasion.",
    isTrending: false,
    stockCount: 35
  },
  {
    id: 38,
    name: "Brook Tote",
    category: "tote",
    price: 190000,
    image: "images/bag-38.jpg",
    desc: "Vintage inspiration meets modern flair. Guaranteed to turn heads inside the office or out.",
    isTrending: true,
    stockCount: 5
  },
  {
    id: 39,
    name: "Quinn Mini Bag",
    category: "mini",
    price: 240000,
    image: "images/bag-39.jpg",
    desc: "Vintage inspiration meets modern flair. Guaranteed to turn heads inside the office or out.",
    isTrending: false,
    stockCount: 18
  },
  {
    id: 40,
    name: "Willow Tote",
    category: "tote",
    price: 170000,
    image: "images/bag-40.jpg",
    desc: "Rugged yet refined. Holds everything you need while maintaining a sleek, minimalist profile.",
    isTrending: false,
    stockCount: 19
  }
];

// --- State ---
let cart = JSON.parse(localStorage.getItem('iles_cart')) || [];
let currentFilter = "all";
let searchQuery = "";

// --- DOM References ---
const productGrid = document.getElementById("productGrid");
const cartDrawer = document.getElementById("cartDrawer");
const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const quickView = document.getElementById("quickView");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");

// --- Core Logic ---

function saveCart() {
  localStorage.setItem('iles_cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  if (!cartCount) return;

  cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (!cartItemsContainer || !cartTotal) {
    return;
  }
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-msg">Your bag is empty.</p>';
    cartTotal.textContent = "0 Ug shilings";
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item" style="display:flex; gap:1rem; margin-bottom:1.5rem; align-items:center;">
      <img src="${item.image}" style="width:60px; height:60px; border-radius:8px; object-fit:cover;" />
      <div style="flex:1">
        <h4 style="margin:0; font-size:0.9rem;">${item.name}</h4>
        <p style="margin:0; font-size:0.8rem; color:var(--text-muted)">${new Intl.NumberFormat().format(item.price)} Ug shilings</p>
        <div style="display:flex; align-items:center; gap:0.5rem; margin-top:0.4rem; border:1px solid var(--stroke); width:fit-content; border-radius:4px;">
          <button onclick="changeQuantity(${item.id}, -1)" style="border:0; background:transparent; padding:0.2rem 0.6rem; cursor:pointer; color:var(--text);">-</button>
          <span style="font-size:0.8rem; font-weight:bold; min-width:1ch; text-align:center;">${item.quantity}</span>
          <button onclick="changeQuantity(${item.id}, 1)" style="border:0; background:transparent; padding:0.2rem 0.6rem; cursor:pointer; color:var(--text);">+</button>
        </div>
      </div>
      <button onclick="removeFromCart(${item.id})" style="background:transparent; border:0; color:var(--text-muted); cursor:pointer; font-size:1.2rem; align-self:flex-start;">&times;</button>
    </div>
  `).join('');

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  cartTotal.textContent = `${new Intl.NumberFormat().format(total)} Ug shilings`;
  
  // Update Dock Badge
  const dockCartCount = document.getElementById("dockCartCount");
  if (dockCartCount) {
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    dockCartCount.textContent = totalQty;
    dockCartCount.style.display = totalQty > 0 ? "flex" : "none";
  }
}

window.addToCart = function(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({...product, quantity: 1});
  }
  
  saveCart();

  if (cartDrawer) {
    cartDrawer.classList.add('open');
  }
};

window.removeFromCart = function(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
};

window.changeQuantity = function(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
    }
  }
};

window.checkoutWhatsApp = function() {
  if (cart.length === 0) return;
  const phoneNumber = "256701168170";
  let message = "Hello 2FM BAGSTORE! I would like to place an order:%0A%0A";
  cart.forEach(item => {
    message += `- ${item.name} x${item.quantity} (${new Intl.NumberFormat().format(item.price * item.quantity)} Ug shilings)%0A`;
  });
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  message += `%0ATotal: ${new Intl.NumberFormat().format(total)} Ug shilings`;
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

function renderProducts() {
  if (!productGrid) return;

  const filtered = products.filter(p => {
    const matchesFilter = currentFilter === "all" || p.category === currentFilter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = '<p style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--text-muted)">No products found.</p>';
    return;
  }

  productGrid.innerHTML = filtered.map(p => `
    <article class="product-card section-load">
      <div style="position:relative; overflow:hidden;" class="group">
        ${p.isTrending ? '<span style="position:absolute; top:1rem; left:1rem; background:var(--brand); color:white; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.7rem; font-weight:700; z-index:10; text-transform:uppercase;">Trending</span>' : ''}
        ${p.stockCount < 10 ? '<span style="position:absolute; top:1rem; right:1rem; background:#d95f34; color:white; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.7rem; font-weight:700; z-index:10; text-transform:uppercase;">Low Stock</span>' : ''}
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <div style="position:absolute; inset:0; background:rgba(0,0,0,0.2); opacity:0; transition:0.3s;" class="hover-overlay"></div>
        <button onclick="openModal(${p.id})" style="position:absolute; bottom:1rem; left:1rem; right:1rem; transform:translateY(100%); transition:0.3s;" class="btn btn-outline quick-view-btn">Quick View</button>
      </div>
      <div class="product-content">
        <h3 class="product-title">${p.name}</h3>
        <div class="product-meta">
          <span class="product-price">${new Intl.NumberFormat().format(p.price)} Ug shilings</span>
          <button onclick="addToCart(${p.id})" style="background:transparent; border:0; color:var(--brand); font-weight:700; cursor:pointer;">+ Add</button>
        </div>
      </div>
    </article>
  `).join('');
  
  // Re-observe animations
  setupScrollAnimations();
}

window.openModal = function(productId) {
  if (!quickView) return;

  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  document.getElementById("modalImg").src = p.image;
  document.getElementById("modalTitle").textContent = p.name;
  document.getElementById("modalPrice").textContent = `${new Intl.NumberFormat().format(p.price)} Ug shilings`;
  document.getElementById("modalCategory").textContent = p.category;
  document.getElementById("modalDesc").textContent = `${p.desc} If you are unsure which bag fits your day best, message us on WhatsApp and we will help you choose the right style, size, and budget.`;
  document.getElementById("modalAddToCart").onclick = () => {
    addToCart(p.id);
    closeModal();
  };
  quickView.classList.add('open');
};

function closeModal() {
  if (quickView) {
    quickView.classList.remove('open');
  }
}

// --- Theme Logic ---
function initTheme() {
  const saved = localStorage.getItem('iles_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcons(true);
  }
}

function updateThemeIcons(isDark) {
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  if (sunIcon) {
    sunIcon.style.display = isDark ? 'none' : 'block';
  }

  if (moonIcon) {
    moonIcon.style.display = isDark ? 'block' : 'none';
  }
}

// --- Scroll Animations ---
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Staggered delay based on child index or data-delay
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section-load').forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
    
    // Auto-stagger if no explicit delay
    if (!el.classList.contains('delay-1') && !el.classList.contains('delay-2')) {
       // Find brothers in the same container to stagger
       const brothers = Array.from(el.parentElement.children).filter(c => c.classList.contains('section-load'));
       const bIndex = brothers.indexOf(el);
       if (bIndex !== -1) el.dataset.delay = bIndex * 100;
    }
    
    observer.observe(el);
  });
}

// --- 2026 Interactive Features ---

function setupMagneticElements() {
  const magneticEls = document.querySelectorAll('.btn, .dock-item, .action-btn');
  
  magneticEls.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      el.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px) scale(1.05)`;
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

function setupFloatingDock() {
  const dock = document.getElementById("floatingDock");
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Show dock after scrolling 300px
    if (currentScroll > 300) {
      dock.classList.add('show');
    } else {
      dock.classList.remove('show');
    }
    
    // Header hide/show logic
    const header = document.querySelector('.site-header');
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add('hide');
    } else {
      header.classList.remove('hide');
    }
    
    lastScroll = currentScroll;
  });

  // Dock Actions
  document.getElementById("dockSearch")?.addEventListener("click", () => {
    document.getElementById("searchToggle").click();
  });
  
  document.getElementById("dockCart")?.addEventListener("click", () => {
    if (cartDrawer) cartDrawer.classList.add('open');
  });
}

window.openStyleQuiz = function() {
  const quiz = document.getElementById("styleQuiz");
  if (quiz) {
    quiz.classList.add('open');
    quizReset();
  }
};

window.closeStyleQuiz = function() {
  const quiz = document.getElementById("styleQuiz");
  if (quiz) quiz.classList.remove('open');
};

function quizReset() {
  document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
  document.getElementById("quizStep1").classList.add('active');
}

window.quizNext = function(step, val) {
  document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
  document.getElementById(`quizStep${step}`).classList.add('active');
};

window.quizComplete = function(size) {
  document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
  const result = document.getElementById("quizResult");
  result.classList.add('active');
  
  const title = document.getElementById("resultTitle");
  if (size === 'Mini') {
    title.textContent = "The Viva Mini";
  } else {
    title.textContent = "The Aster Tote";
  }
};

function setupBackToWebsiteButton() {
  if (document.getElementById("backToWebsiteBtn")) return;

  const backButton = document.createElement("button");
  backButton.id = "backToWebsiteBtn";
  backButton.className = "floating-back-btn";
  backButton.type = "button";
  backButton.setAttribute("aria-label", "Go back to previous page");
  backButton.textContent = "Back to Website";

  backButton.addEventListener("click", () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.href = "index.html";
  });

  document.body.appendChild(backButton);
}

function setupHeroImageRotation() {
  const heroImage = document.getElementById("heroRotatingImage");
  if (!heroImage) return;

  const heroSlides = [
    {
      src: "images/bag-9.jpg",
      alt: "Elegant crossbody handbag in warm studio light"
    },
    {
      src: "images/bag-10.jpg",
      alt: "Large tote bag styled for everyday fashion"
    },
    {
      src: "images/bag-11.jpg",
      alt: "Mini handbag with modern structured silhouette"
    },
    {
      src: "images/bag-12.jpg",
      alt: "Evening clutch bag in editorial product shot"
    },
    {
      src: "images/bag-13.jpg",
      alt: "Chic city crossbody bag"
    },
    {
      src: "images/bag-14.jpg",
      alt: "Professional power tote"
    },
    {
      src: "images/bag-15.jpg",
      alt: "Luxurious mini icon bag"
    },
    {
      src: "images/bag-16.jpg",
      alt: "Evening luxe handbag"
    },
    {
      src: "images/bag-17.jpg",
      alt: "Premium crafted leather bag"
    },
    {
      src: "images/bag-18.jpg",
      alt: "Modern sophisticated handbag"
    },
    {
      src: "images/bag-19.jpg",
      alt: "Trend-led versatile bag"
    },
    {
      src: "images/bag-20.jpg",
      alt: "Everyday structured tote"
    },
    {
      src: "images/bag-21.jpg",
      alt: "Elegant and clean design bag"
    },
    {
      src: "images/bag-22.jpg",
      alt: "Timeless classic handbag"
    },
    {
      src: "images/bag-23.jpg",
      alt: "Statement stylish crossbody"
    }
  ];

  heroSlides.forEach((slide) => {
    const preload = new Image();
    preload.src = slide.src;
  });

  let currentIndex = 0;

  setInterval(() => {
    heroImage.classList.add("is-fading");

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % heroSlides.length;
      heroImage.src = heroSlides[currentIndex].src;
      heroImage.alt = heroSlides[currentIndex].alt;
      heroImage.classList.remove("is-fading");
    }, 225);
  }, 4200);
}

// --- Listeners ---
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('iles_theme', next);
    updateThemeIcons(next === 'dark');
  });
}

const cartToggle = document.getElementById("cartToggle");
if (cartToggle) {
  cartToggle.addEventListener("click", () => {
    if (cartDrawer) {
      cartDrawer.classList.add('open');
    } else {
      window.location.href = "products.html";
    }
  });
}

const closeCart = document.getElementById("closeCart");
if (closeCart && cartDrawer) {
  closeCart.addEventListener("click", () => cartDrawer.classList.remove('open'));
}

const searchToggle = document.getElementById("searchToggle");
if (searchToggle && searchOverlay && searchInput) {
  searchToggle.addEventListener("click", () => {
    searchOverlay.classList.add('open');
    searchInput.focus();
  });
}

const closeSearch = document.getElementById("closeSearch");
if (closeSearch && searchOverlay && searchInput) {
  closeSearch.addEventListener("click", () => {
    searchOverlay.classList.remove('open');
    searchQuery = "";
    searchInput.value = "";
    renderProducts();
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });
}

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle('open');
  });
}

const closeModalButton = document.getElementById("closeModal");
if (closeModalButton) {
  closeModalButton.addEventListener("click", closeModal);
}

const modalOverlay = document.getElementById("modalOverlay");
if (modalOverlay) {
  modalOverlay.addEventListener("click", closeModal);
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.filter;
    renderProducts();
  });
});

// --- Initialize ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProducts();
  updateCartUI();
  setupScrollAnimations();
  setupBackToWebsiteButton();
  setupHeroImageRotation();
  setupMagneticElements();
  setupFloatingDock();

  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
