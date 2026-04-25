import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { featuredProducts, products } from "./data/products";

const WHATSAPP_NUMBER = "256751007508";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState("");

  const addToCart = (product) => {
    setCart((current) => {
      const match = current.find((item) => item.id === product.id);
      if (match) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart((current) => current.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const askOnWhatsApp = (product) => {
    const message = product
      ? `Hello 2FM BAGSTORE, I am interested in ${product.name}.`
      : "Hello 2FM BAGSTORE, I need help choosing a bag.";

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const totalQuantity = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  const placeOrderOnWhatsApp = () => {
    if (!cart.length) return;

    const lines = cart.map(
      (item) =>
        `- ${item.name} x${item.quantity} (UGX ${new Intl.NumberFormat("en-US").format(
          item.price * item.quantity
        )})`
    );

    const greeting = customerName
      ? `Hello 2FM BAGSTORE, this is ${customerName}. I want to place this order:`
      : "Hello 2FM BAGSTORE, I want to place this order:";

    const message = `${greeting}\n\n${lines.join("\n")}\n\nTotal: UGX ${new Intl.NumberFormat(
      "en-US"
    ).format(totalPrice)}\n\nPlease confirm availability and delivery details.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="app-shell">
      <Navbar
        activePage={activePage}
        onNavigate={setActivePage}
        cartCount={totalQuantity}
        onOpenCart={() => setCartOpen(true)}
      />

      <main>
        {activePage === "home" ? (
          <Home
            featuredProducts={featuredProducts}
            onShopNow={() => setActivePage("shop")}
            onAskAboutProduct={() => askOnWhatsApp()}
            onAddToCart={addToCart}
          />
        ) : (
          <Shop
            products={products}
            onAskAboutProduct={askOnWhatsApp}
            onAddToCart={addToCart}
          />
        )}
      </main>

      <aside className={`cart-drawer ${cartOpen ? "open" : ""}`}>
        <div className="cart-head">
          <h3>Your order bag</h3>
          <button type="button" onClick={() => setCartOpen(false)}>
            Close
          </button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <p className="cart-empty">Your bag is empty. Add a few styles and order on WhatsApp.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-meta">
                  <strong>{item.name}</strong>
                  <span>UGX {new Intl.NumberFormat("en-US").format(item.price)}</span>
                  <div className="qty-controls">
                    <button type="button" onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                    <button type="button" className="remove-btn" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-foot">
          <label htmlFor="customerName">Your name (optional)</label>
          <input
            id="customerName"
            type="text"
            placeholder="Name for WhatsApp order"
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
          />

          <div className="cart-total">
            <span>Total</span>
            <strong>UGX {new Intl.NumberFormat("en-US").format(totalPrice)}</strong>
          </div>

          <button
            type="button"
            className="checkout-btn"
            onClick={placeOrderOnWhatsApp}
            disabled={!cart.length}
          >
            Place order on WhatsApp
          </button>
        </div>
      </aside>

      <div className={`drawer-backdrop ${cartOpen ? "show" : ""}`} onClick={() => setCartOpen(false)} />

      <WhatsAppButton totalItems={totalQuantity} />
    </div>
  );
}

export default App;