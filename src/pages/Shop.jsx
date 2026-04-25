import { useState } from "react";
import ProductCard from "../components/ProductCard";

const filterOptions = [
  { id: "all", label: "All" },
  { id: "tote", label: "Totes" },
  { id: "crossbody", label: "Crossbody" },
  { id: "mini", label: "Mini" },
  { id: "clutch", label: "Clutch" }
];

function Shop({ products, onAskAboutProduct, onAddToCart }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");

  const visibleProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  const finalProducts = visibleProducts.filter((product) =>
    product.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <section className="products">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Shop 2FM</p>
          <h2>Women's Handbags</h2>
          <p className="subtle-text">
            Filter by style to find a bag that matches your day, then ask on WhatsApp if you want help choosing.
          </p>
        </div>

        <div className="product-toolbar">
          <input
            className="search-input"
            type="search"
            placeholder="Search styles..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          <div className="filters">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid" aria-live="polite">
          {finalProducts.length > 0 ? (
            finalProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAsk={onAskAboutProduct}
                onAdd={onAddToCart}
              />
            ))
          ) : (
            <p className="subtle-text" style={{ gridColumn: "1 / -1", textAlign: "center", padding: "2rem 0" }}>
              No products found for this filter.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Shop;