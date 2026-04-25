function ProductCard({ product, onAsk, onAdd }) {
  const price = new Intl.NumberFormat("en-US").format(product.price);

  return (
    <article className="product-card">
      <div className="card-media">
        {product.featured ? (
          <span className="badge-featured">
            Featured
          </span>
        ) : null}

        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="product-content">
        <p className="product-tag">{product.category}</p>
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.description}</p>

        <div className="product-meta">
          <span className="product-price">UGX {price}</span>
        </div>

        <div className="card-actions">
          <button type="button" className="btn btn-solid" onClick={() => onAdd(product)}>
            Add to bag
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => onAsk(product)}>
            Ask
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;