function About({ onShopNow, onAskAboutProduct }) {
  return (
    <section className="about-page">
      <div className="container">
        <div className="section-heading about-intro">
          <p className="eyebrow">About 2FM</p>
          <h2>Where confidence meets everyday function.</h2>
          <p className="subtle-text">
            2FM BAGSTORE is a Kampala-based women&apos;s handbag brand focused on practical luxury.
            We curate modern pieces that look polished, wear comfortably, and fit real schedules.
            From work-ready totes to elegant event clutches, every style is selected to support how
            women move through their day.
          </p>
        </div>

        <div className="about-story-grid">
          <article className="about-panel">
            <h3>Our Story</h3>
            <p>
              We started 2FM with a simple belief: a good bag should do more than look beautiful.
              It should organize your essentials, elevate your outfit, and stay comfortable from
              morning errands to evening plans.
            </p>
            <p>
              Over time, our community grew through referrals and WhatsApp conversations. Customers
              returned because they trusted our guidance, quality checks, and honest recommendations.
              Today, that same trust still defines how we serve every shopper.
            </p>
          </article>

          <article className="about-panel">
            <h3>What We Stand For</h3>
            <ul className="about-list">
              <li>
                <strong>Practical elegance:</strong> Fashion-forward silhouettes with room for real-life essentials.
              </li>
              <li>
                <strong>Quality-first selection:</strong> Durable materials, neat stitching, and thoughtful finishing.
              </li>
              <li>
                <strong>Customer clarity:</strong> Honest product details, prompt responses, and helpful support.
              </li>
              <li>
                <strong>Accessible luxury:</strong> Premium handbag aesthetics at fair, transparent pricing.
              </li>
            </ul>
          </article>
        </div>

        <div className="about-steps">
          <h3>How Ordering Works</h3>
          <div className="about-steps-grid">
            <article className="step-card">
              <span className="step-badge">01</span>
              <h4>Browse Styles</h4>
              <p>Explore totes, crossbody bags, mini bags, and clutches that match your lifestyle.</p>
            </article>

            <article className="step-card">
              <span className="step-badge">02</span>
              <h4>Get Guidance</h4>
              <p>Ask questions on WhatsApp for sizing, color options, and styling recommendations.</p>
            </article>

            <article className="step-card">
              <span className="step-badge">03</span>
              <h4>Order with Confidence</h4>
              <p>
                Build your bag cart, place your order quickly, and get delivery support in Kampala.
              </p>
            </article>
          </div>
        </div>

        <div className="about-cta-block">
          <h3>Ready to find your next signature bag?</h3>
          <p>
            Start with our latest collection or message us directly for curated recommendations based
            on your budget, style, and occasion.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-solid" onClick={onShopNow}>
              Shop the collection
            </button>
            <button type="button" className="btn btn-ghost" onClick={onAskAboutProduct}>
              Talk to a stylist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
