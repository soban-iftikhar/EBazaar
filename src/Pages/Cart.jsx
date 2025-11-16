import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const STORAGE_KEY = "ebazaar_cart";

const parsePrice = (price) =>
  Number(String(price).replace(/[^0-9.-]+/g, "")) || 0;

const formatCurrency = (value) =>
  value.toLocaleString(undefined, { style: "currency", currency: "USD" });

const Cart = () => {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const updateQty = (id, delta) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, (item.qty|| 1) + delta) } : item
      )
    );

  const removeItem = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);

  const subtotal = cart.reduce(
    (sum, it) => sum + parsePrice(it.price) * (it.qty || 1),
    0
  );

  return (
    <>
      <Header />
      {/* HERO SECTION */}
      <section className="bg-blue-600 text-white py-20 px-6 font-sans">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Your Shopping Cart</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Review the items in your cart before proceeding to checkout. You can update
            quantities or remove items as needed.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg mb-6">Your cart is empty.</p>
            <Link
              to="/products"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{formatCurrency(parsePrice(item.price))}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="px-3">{item.qty || 1}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-4 text-sm text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-800 font-medium">
                      {formatCurrency(parsePrice(item.price) * (item.qty || 1))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={clearCart}
                  className="text-sm text-red-600 hover:underline"
                >
                  Clear Cart
                </button>
                <Link
                  to="/products"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>

            <aside className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-4">Order Summary</h4>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{formatCurrency(subtotal)}</span>
              </div>
              <div className="text-sm text-gray-500 mb-6">
                Shipping and taxes calculated at checkout.
              </div>
              <Link
                to="/checkout"
                className="w-full inline-block text-center bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Proceed to Checkout
              </Link>
            </aside>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Cart;
