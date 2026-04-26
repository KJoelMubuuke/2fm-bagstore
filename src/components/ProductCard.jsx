function ProductCard({ product, onAsk, onAdd }) {
  const price = new Intl.NumberFormat("en-US").format(product.price);
  const segmentLabelMap = {
    "school-bags": "School Bags",
    "travel-bags": "Travel Bags",
    "ladies-handbags": "Ladies Handbags",
    backpacks: "Backpacks"
  };

  return (
    <article className="product-card">
      <div className="card-media">
        <div className="badge-stack">
          {product.featured ? <span className="badge-featured">Featured</span> : null}
          {product.popular ? <span className="badge-popular">Popular</span> : null}
          {product.discountPercent ? <span className="badge-discount">-{product.discountPercent}%</span> : null}
        </div>

        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="product-content">
        <p className="product-tag">{segmentLabelMap[product.segment] ?? product.segment}</p>
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.description}</p>

        <ul className="product-specs">
          <li><strong>Material:</strong> {product.material}</li>
          <li><strong>Size:</strong> {product.size}</li>
          <li><strong>Use:</strong> {product.use}</li>
          <li><strong>Target:</strong> {product.target}</li>
        </ul>

        <div className="product-meta">
          <span className="product-price">UGX {price}</span>
        </div>

        <div className="card-actions">
          <button type="button" className="btn btn-solid" onClick={() => onAsk(product)}>
            Order on WhatsApp
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => onAdd(product)}>
            Add to bag
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;