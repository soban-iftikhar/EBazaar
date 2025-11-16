import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const STORAGE_KEY = "ebazaar_cart";

const Products = () => {
  const navigate = useNavigate();
  const [products] = useState([
    { id: 1, name: "Wireless Headphones", price: "$99.99", image: "public/Bootstrap.png" },
    { id: 2, name: "Smart Watch", price: "$199.99", image: "public/CSS3.png" },
    { id: 3, name: "Bluetooth Speaker", price: "$49.99", image: "public/HTML5.png" },
    { id: 4, name: "E-Reader", price: "$129.99", image: "public/Java.png" },
    { id: 5, name: "Fitness Tracker", price: "$79.99", image: "public/MongoDB.png" },
    { id: 6, name: "Portable Charger", price: "$39.99", image: "public/Node.png" },
    { id: 7, name: "Noise Cancelling Earbuds", price: "$149.99", image: "public/Bootstrap.png" },
    { id: 8, name: "Smart Home Hub", price: "$89.99", image: "public/Git.png" },
    { id: 9, name: "4K Action Camera", price: "$249.99", image: "public/Bootstrap.png" },
    { id: 10, name: "VR Headset", price: "$299.99", image: "public/CSS3.png" },
    { id: 11, name: "Gaming Mouse", price: "$59.99", image: "public/Java.png" },
    { id: 12, name: "Mechanical Keyboard", price: "$89.99", image: "public/Node.png" }
  ]);

  const [cartCount, setCartCount] = useState(0);
  const [notif, setNotif] = useState("");

  useEffect(() => {
  
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      setCartCount(stored.reduce((sum, item) => sum + (item.quantity || 1), 0));
    } catch {
      setCartCount(0);
    }
  }, []);

  const saveCart = (nextCart) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextCart));
    setCartCount(nextCart.reduce((sum, item) => sum + (item.quantity || 1), 0));
  };

  const addToCart = (product, quantity = 1) => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const cart = raw ? JSON.parse(raw) : [];
      const existing = cart.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + quantity;
      } else {

        cart.push({
          id: product.id,
          title: product.name,
          price: product.price,
          img: product.image.replace(/^public\//, "/"),
          quantity
        });
      }
      saveCart(cart);
      setNotif("Added to cart");
      setTimeout(() => setNotif(""), 1500);
    } catch (e) {
      console.error("Add to cart failed", e);
      setNotif("Could not add to cart");
      setTimeout(() => setNotif(""), 1500);
    }
  };

  const buyNow = (product) => {
    addToCart(product, 1);
    setTimeout(() => navigate("/checkout"), 200);
  };

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="bg-blue-600 text-white py-20 px-6 font-sans">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Products</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore our wide range of high-quality products designed to meet all your needs.
          </p>
          <div className="mt-4 text-sm">Cart: {cartCount} item{cartCount !== 1 ? "s" : ""}</div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section bg-gray-100 py-8">
        <div className="product-card text-center container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {products.map((prod) => (
            <div key={prod.id} className="card bg-white p-4 rounded-lg shadow-md">
              <img
                src={prod.image.replace(/^public\//, "/")}
                alt={prod.name}
                className="product-image w-full h-auto object-cover mb-4 rounded"
              />
              <h2 className="product-name text-lg font-semibold mb-2">{prod.name}</h2>
              <p className="product-price text-blue-600 font-semibold mb-4">{prod.price}</p>

              <div className="flex justify-center">
                <button
                  onClick={() => buyNow(prod)}
                  className="buy-now-button bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Buy Now
                </button>

                <button
                  onClick={() => addToCart(prod)}
                  className="ml-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* small live notification */}
      <div className="fixed bottom-6 right-6">
        <div aria-live="polite" className="sr-only">
          {notif}
        </div>
        {notif && (
          <div className="bg-black text-white px-4 py-2 rounded shadow">
            {notif}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Products;
