import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import useEmblaCarousel from "embla-carousel-react";

const Home = () => {
 const products = [
    { id: 1, title: "Bootstrap", price: "$29.99", img: "/Bootstrap.png" },
    { id: 2, title: "CSS", price: "$39.99", img: "/CSS3.png" },
    { id: 3, title: "Git", price: "$49.99", img: "/Git.png" },
    { id: 4, title: "HTML", price: "$59.99", img: "/HTML5.png" },
    { id: 5, title: "Java", price: "$19.99", img: "/Java.png" },
    { id: 6, title: "Node", price: "$24.99", img: "/Node.png" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const id = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);

    return () => clearInterval(id);
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* HERO SECTION*/}
      <section className="hero bg-blue-600 text-white py-20 px-6 font-sans">
        <div className="container mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="hero-content text-center">
            <h1 className="text-4xl font-bold  sm:text-5xl lg:text-6xl mb-4">
              Welcome to EBazaar
            </h1>
            <p className="text-lg  max-w-2xl mx-auto mb-8">
              Your one-stop shop for all your needs. Discover amazing products
              at unbeatable prices!
            </p>
            <Link
              to="/products"
              className="btn inline-block text-base font-medium text-black bg-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features bg-white font-sans">
        <div className="container mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="feature-item">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Wide Selection
              </h2>
              <p className="text-gray-600">
                Explore a vast range of products across various categories to
                find exactly what you need.
              </p>
            </div>
            <div className="feature-item">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Best Prices
              </h2>
              <p className="text-gray-600">
                Enjoy competitive pricing and exclusive deals that make shopping
                affordable.
              </p>
            </div>
            <div className="feature-item">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Fast Shipping
              </h2>
              <p className="text-gray-600">
                Get your orders delivered quickly and reliably with our
                efficient shipping options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR PRODUCTS with EMBLA CAROUSEL */}
      <section className="popular-products bg-gray-50 font-sans">
        <div className="container mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Popular Products
            </h2>
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

          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container gap-6 px-1">
                {products.map((p) => (
                  <div key={p.id} className="embla__slide p-3">
                    <div className="product-item w-full bg-white p-6 rounded-lg shadow-sm">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-auto object-cover mb-4 rounded-lg"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {p.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{p.price}</p>

                      <Link
                        to={`/products/${p.id}`}
                        className="btn inline-block text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 px-5 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <span className="font-medium">Browse More Products</span>
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Use arrows to browse popular products.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta bg-blue-600 font-sans">
        <div className="container mx-auto max-w-7xl px-6 py-16 lg:py-20 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-lg mb-8">
            Join thousands of satisfied customers and experience the best online
            shopping today!
          </p>
          <Link
            to="/products"
            className="btn inline-block text-base font-medium text-blue-600 bg-white px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials bg-gray-50 font-sans">
        <div className="container mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-item bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center gap-4">
                <img
                  src="https://i.pravatar.cc/100?img=47"
                  alt="Jane D."
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Jane D.
                  </h3>
                  <p className="text-gray-600 mb-4">
                    "EBazaar has transformed my shopping experience! The variety
                    and prices are unbeatable."
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    Lisa K.
                  </h3>
                  <p className="text-gray-600 mb-4">
                    "Fast shipping and excellent customer service. I'm a loyal
                    customer for life!"
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    Mark S.
                  </h3>
                  <p className="text-gray-600 mb-4">
                    "I love the deals I find on EBazaar. Shopping here is always
                    a pleasure."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
