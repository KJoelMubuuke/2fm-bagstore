import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const filterOptions = [
  { id: "all", label: "All" },
  { id: "ladies-handbags", label: "Ladies Handbags" },
  { id: "backpacks", label: "Backpacks" }
];

function Shop({ products, initialCategory = "all", onAskAboutProduct, onAddToCart }) {
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setActiveFilter(initialCategory);
  }, [initialCategory]);

  const visibleProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.segment === activeFilter);

  const finalProducts = visibleProducts.filter((product) =>
    `${product.name} ${product.segment}`.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <section className="products">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Shop 2FM</p>
          <h2>Affordable Quality Bags in Uganda</h2>
          <p className="subtle-text">
            Browse ladies handbags and backpacks with delivery support in Kampala.
          </p>
        </div>

        <div className="product-toolbar">
          <input
            className="search-input"
            type="search"
            placeholder="Search bags by name or category..."
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