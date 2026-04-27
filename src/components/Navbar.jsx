import { MessageCircle, Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Premium Bags in Kampala" },
  { id: "shop", label: "Shop" },
  { id: "about", label: "About" }
];

function Navbar({ activePage, onNavigate, cartCount, onOpenCart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [activePage]);

  const navigateTo = (page) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="site-header" id="top">
      <p className="top-note">Premium quality bags in Kampala with free style guidance + WhatsApp ordering support.</p>
      <div className="container nav-wrap">
        <a
          href="#top"
          className="brand"
          aria-label="2FM BAGSTORE home"
          onClick={(event) => {
            event.preventDefault();
            navigateTo("home");
          }}
        >
          <img src="/images/logo1.jpeg" alt="2FM BAGSTORE logo" className="brand-logo" />
          <span className="brand-wordmark">2FM BAGSTORE</span>
        </a>

        <nav className={`site-nav ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activePage === item.id ? "active" : ""}
              onClick={(event) => {
                event.preventDefault();
                navigateTo(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="action-btn cart-action" onClick={onOpenCart}>
            <ShoppingBag size={18} />
            <span>{cartCount}</span>
          </button>

          <a
            className="action-btn"
            href="https://wa.me/256701168170"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={18} />
          </a>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;