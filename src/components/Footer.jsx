function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section className="footer-brand-block">
          <h3>2FM BAGSTORE</h3>
          <p>
            Curated handbags for work, travel, and events. Place your order with confidence through
            WhatsApp support.
          </p>
          <a href="https://wa.me/256701168170" target="_blank" rel="noreferrer" className="footer-cta">
            Chat on WhatsApp
          </a>
        </section>

        <section>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <button type="button" onClick={() => onNavigate("home")}>Premium Bags in Kampala</button>
            <button type="button" onClick={() => onNavigate("shop")}>Shop</button>
            <button type="button" onClick={() => onNavigate("about")}>About</button>
            <a href="/delivery-policy.html">Delivery Policy</a>
            <a href="/returns-policy.html">Returns Policy</a>
            <a href="/privacy-policy.html">Privacy Policy</a>
            <a href="/terms.html">Terms & Conditions</a>
            <a href="https://wa.me/256701168170" target="_blank" rel="noreferrer">
              Order Support
            </a>
          </div>
        </section>

        <section>
          <h4>Store Details</h4>
          <div className="footer-meta">
            <p>Topcity Plaza Basement Ed 52, Kampala Uganda</p>
            <p>Mon - Sat, 9:00 AM - 6:00 PM</p>
            <p>
              <a href="tel:+256701168170">+256 701 168170</a>
            </p>
            <p>
              <a href="mailto:Katereggafartie@gmail.com">Katereggafartie@gmail.com</a>
            </p>
          </div>
        </section>
      </div>

      <div className="container footer-bottom">
        <p>© {year} 2FM BAGSTORE. All rights reserved.</p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;