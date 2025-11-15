import { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const Home = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const play = () => {
      if (!el) return;
      const scrollAmount = el.clientWidth;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    const id = setInterval(play, 4000);
    return () => clearInterval(id);
  }, []);

  const scrollNext = () => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
  };

  const products = [
    { id: 1, title: "Bootstrap", price: "$29.99", img: "public/Bootstrap.png" },
    { id: 2, title: "CSS", price: "$39.99", img: "public/CSS3.png" },
    { id: 3, title: "Git", price: "$49.99", img: "public/Git.png" },
    { id: 4, title: "HTML", price: "$59.99", img: "public/HTML5.png" },
    { id: 5, title: "Java", price: "$19.99", img: "public/Java.png" },
    { id: 6, title: "Node", price: "$24.99", img: "public/Node.png" }
  ];

  return (
    <>
      <Header />
      <section className="hero bg-gray-50 font-sans">
        <div className="container mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="hero-content text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-4">
              Welcome to EBazaar
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Your one-stop shop for all your needs. Discover amazing products
              at unbeatable prices!
            </p>
            <Link
              to="/products"
              className="btn inline-block text-base font-medium text-white bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="features bg-white font-sans">
        <div className="container mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="feature-item">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Wide Selection</h2>
              <p className="text-gray-600">
                Explore a vast range of products across various categories to find exactly what you need.
              </p>
            </div>
            <div className="feature-item">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Best Prices</h2>
              <p className="text-gray-600">
                Enjoy competitive pricing and exclusive deals that make shopping affordable.
              </p>
            </div>
            <div className="feature-item">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fast Shipping</h2>
              <p className="text-gray-600">
                Get your orders delivered quickly and reliably with our efficient shipping options.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="popular-products bg-gray-50 font-sans">
        <div className="container mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Popular Products</h2>
            <div className="space-x-2">
              <button
                onClick={scrollPrev}
                aria-label="Previous"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:bg-gray-100"
              >
                ‹
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:bg-gray-100"
              >
                ›
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="relative flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-3 px-3"
          >
            {products.map((p) => (
              <div
                key={p.id}
                className="product-item shrink-0 w-[85%] sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-sm scroll-snap-start"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.price}</p>
                <Link
                  to={`/products/${p.id}`}
                  className="btn inline-block text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">Swipe / use arrows to browse popular products.</p>
        </div>
      </section>

      <section className="cta bg-blue-600 font-sans">
        <div className="container mx-auto max-w-7xl px-6 py-16 lg:py-20 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-lg mb-8">
            Join thousands of satisfied customers and experience the best online shopping today!
          </p>
          <Link
            to="/products"
            className="btn inline-block text-base font-medium text-blue-600 bg-white px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
          >
            Browse Products
          </Link>
        </div>
      </section>


      <section className="testimonials bg-gray-50 font-sans">
        <div className="container mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-item bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center gap-4">
                <img
                  src="https://i.pravatar.cc/100?img=47"
                  alt="Jane D."
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">Jane D.</h3>
                  <p className="text-gray-600 mb-4">
                    "EBazaar has transformed my shopping experience! The variety and prices are unbeatable."
                  </p>
                  
                </div>
              </div>
            </div>

            <div className="testimonial-item bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center gap-4">
                <img
                  src="https://i.pravatar.cc/100?img=32"
                  alt="Mark S."
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">Lisa K.</h3>
                  <p className="text-gray-600 mb-4">
                    "Fast shipping and excellent customer service. I'm a loyal customer for life!"
                  </p>
                  
                </div>
              </div>
            </div>

            <div className="testimonial-item bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center gap-4">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="Lisa K."
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">Mark S.</h3>
                  <p className="text-gray-600 mb-4">
                    "I love the deals I find on EBazaar. Shopping here is always a pleasure."
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default Home;
