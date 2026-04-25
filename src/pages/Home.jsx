import { RefreshCcw, ShieldCheck, Sparkles, Truck } from "lucide-react";
import ProductCard from "../components/ProductCard";

function Home({ featuredProducts, onShopNow, onAskAboutProduct, onAddToCart }) {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-media" role="img" aria-label="Stylish women's handbags in a studio setting">
            <img src="/premium_bag_hero.png" alt="Elegant handbag styled for modern everyday wear" />
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Studio Drop 2026</p>
            <h1>Carry bold. Move easy.</h1>
            <p>
              Discover silhouettes designed for daily movement and special moments. Build your order bag in seconds and place the full order straight on WhatsApp.
            </p>

            <div className="hero-actions">
              <button type="button" className="btn btn-solid" onClick={onShopNow}>
                Shop now
              </button>
              <button type="button" className="btn btn-ghost" onClick={onAskAboutProduct}>
                Style consultation
              </button>
            </div>

            <div className="hero-stats">
              <article>
                <strong>320+</strong>
                <span>Orders this month</span>
              </article>
              <article>
                <strong>4.9/5</strong>
                <span>Customer rating</span>
              </article>
              <article>
                <strong>Same day</strong>
                <span>Kampala delivery support</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-grid">
          <div className="trust-item">
            <ShieldCheck size={24} />
            <div>
              <h3>Secure Checkout</h3>
              <p>Protected payments</p>
            </div>
          </div>

          <div className="trust-item">
            <Truck size={24} />
            <div>
              <h3>Express Delivery</h3>
              <p>Fast shipping support</p>
            </div>
          </div>

          <div className="trust-item">
            <Sparkles size={24} />
            <div>
              <h3>Premium Quality</h3>
              <p>Clean finishing</p>
            </div>
          </div>

          <div className="trust-item">
            <RefreshCcw size={24} />
            <div>
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="collections">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Featured Edit</p>
            <h2>Best-selling signatures</h2>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAsk={onAskAboutProduct}
                onAdd={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container about-grid">
          <div className="about-copy">
            <p className="eyebrow">Why shoppers return</p>
            <h2>Fashion-forward shapes with real-life functionality.</h2>
            <p>
              Every piece is chosen to work for real schedules, not just photos. That means thoughtful compartments, easy-to-carry silhouettes, and styling that feels current without being hard to wear.
            </p>
            <ul>
              <li>Comfort-first straps and durable finishing.</li>
              <li>Useful sizes for work, errands, and weekends.</li>
              <li>Help available through WhatsApp whenever you need it.</li>
            </ul>
          </div>

          <div className="about-media">
            <img src="/images/bag-17.jpg" alt="Handbag styled in a lifestyle setting" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;