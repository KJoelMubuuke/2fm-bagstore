import { useEffect, useState } from "react";
import { RefreshCcw, ShieldCheck, Sparkles, Truck } from "lucide-react";
import ProductCard from "../components/ProductCard";

const heroSlides = [
  {
    src: "/images/bag-21.jpg",
    alt: "Blue chain satchel bag set"
  },
  {
    src: "/images/bag-22.jpg",
    alt: "Black chain satchel bag set"
  },
  {
    src: "/images/bag-23.jpg",
    alt: "Burgundy handbag and clutch set"
  },
  {
    src: "/images/bag-24.jpg",
    alt: "Blush and burgundy structured tote set"
  },
  {
    src: "/images/bag-31.jpg",
    alt: "Mini crossbody bags with gold lock detail"
  },
  {
    src: "/images/bag-35.jpg",
    alt: "Cream and sky-blue shoulder bag set"
  },
  {
    src: "/images/bag-36.jpg",
    alt: "Mint and ivory premium bag set"
  },
  {
    src: "/images/bag-37.jpg",
    alt: "Neutral modern crossbody collection"
  }
];

function Home({ featuredProducts, onShopNow, onAskAboutProduct, onAddToCart }) {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-media" role="img" aria-label="Stylish women's handbags in a studio setting">
            <img
              src={heroSlides[activeHeroIndex].src}
              alt={heroSlides[activeHeroIndex].alt}
              key={heroSlides[activeHeroIndex].src}
            />
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Bags in Uganda</p>
            <h1>Affordable Quality Bags in Uganda</h1>
            <p>
              Shop stylish ladies handbags and everyday backpacks delivered in Kampala. Choose your favorite bag and order directly on WhatsApp in seconds.
            </p>

            <div className="hero-actions">
              <button type="button" className="btn btn-solid" onClick={onAskAboutProduct}>
                Order on WhatsApp
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => onShopNow("all")}>
                Browse collection
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

      <section className="category-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Shop by Category</p>
            <h2>Find the right bag quickly</h2>
            <p className="subtle-text">
              Browse our top categories for personal style and daily use.
            </p>
          </div>
          <div className="category-grid">
            <button type="button" className="category-card" onClick={() => onShopNow("ladies-handbags")}>Ladies Handbags</button>
            <button type="button" className="category-card" onClick={() => onShopNow("backpacks")}>Backpacks</button>
            <button type="button" className="category-card" onClick={() => onShopNow("all")}>All Bags</button>
            <button type="button" className="category-card" onClick={() => onShopNow("ladies-handbags")}>Crossbody & Totes</button>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-grid">
          <div className="trust-title">
            <h3>Why Choose Us</h3>
          </div>
          <div className="trust-item">
            <ShieldCheck size={24} />
            <div>
              <h3>Affordable Prices</h3>
              <p>Market-based price ranges</p>
            </div>
          </div>

          <div className="trust-item">
            <Truck size={24} />
            <div>
              <h3>Fast Delivery</h3>
              <p>Kampala delivery support</p>
            </div>
          </div>

          <div className="trust-item">
            <Sparkles size={24} />
            <div>
              <h3>Quality Guaranteed</h3>
              <p>Carefully selected bags</p>
            </div>
          </div>

          <div className="trust-item">
            <RefreshCcw size={24} />
            <div>
              <h3>Easy WhatsApp Ordering</h3>
              <p>Quick support and order placement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="collections">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Featured Edit</p>
            <h2>Best-selling designer handbags & clutch collections</h2>
            <p className="collection-subtitle">Explore our most loved bags: luxury crossbody bags, premium totes, and everyday handbags</p>
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
            <h2>Premium leather handbags crafted with fashion-forward shapes & real-life functionality.</h2>
            <p>
              Every designer bag in our collection is handpicked to work for real schedules, not just photos. From structured tote bags to elegant crossbody handbags, we offer leather bags, luxury clutches, and shoulder bags with thoughtful compartments, easy-to-carry silhouettes, and styling that feels current without being hard to wear.
            </p>
            <ul>
              <li>Comfort-first straps, quality hardware, and durable finishing on every designer handbag.</li>
              <li>Perfectly sized bags for work, errands, weekends, and travel—crossbody bags, totes, clutches, and more.</li>
              <li>WhatsApp styling consultation and bag care support whenever you need it.</li>
            </ul>
          </div>

          <div className="about-media">
            <img src="/images/bag-17.jpg" alt="Handbag styled in a lifestyle setting" />
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Customer Reviews</p>
            <h2>What shoppers say</h2>
          </div>
          <div className="testimonial-grid">
            <article className="testimonial-card">
              <p className="stars">★★★★★</p>
              <p>Very good quality bag. Exactly what I wanted.</p>
              <strong>- Aisha, Kampala</strong>
            </article>
            <article className="testimonial-card">
              <p className="stars">★★★★★</p>
              <p>Fast delivery and smooth WhatsApp support. Thank you!</p>
              <strong>- Brenda, Ntinda</strong>
            </article>
            <article className="testimonial-card">
              <p className="stars">★★★★★</p>
              <p>Great price and the bag looks even better in person.</p>
              <strong>- Maria, Kireka</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-strip">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Contact & Location</p>
            <h2>Order support in Kampala</h2>
            <p className="subtle-text">Calls: +256 701 168170</p>
            <p className="subtle-text">WhatsApp: +256 768 620345, +256 701 168170</p>
            <p className="subtle-text">Location: Topcity Plaza Basement Ed 52, Kampala Uganda</p>
            <p className="subtle-text">Delivery: Same day and next-day options available</p>
          </div>
          <div className="contact-actions">
            <button type="button" className="btn btn-solid" onClick={onAskAboutProduct}>
              Order on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;