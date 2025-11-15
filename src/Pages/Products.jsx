import { Link } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const Products = () => {

  const products = [
    {id: 1, name: 'Wireless Headphones', price: '$99.99', image: 'public/Bootstrap.png' },
    {id: 2, name: 'Smart Watch', price: '$199.99', image: 'public/CSS3.png' },
    {id: 3, name: 'Bluetooth Speaker', price: '$49.99', image: 'public/HTML5.png' },
    {id: 4, name: 'E-Reader', price: '$129.99', image: 'public/Java.png' },
    {id: 5, name: 'Fitness Tracker', price: '$79.99', image: 'public/MongoDB.png' },
    {id: 6, name: 'Portable Charger', price: '$39.99', image: 'public/Node.png'},
    {id: 7, name: 'Noise Cancelling Earbuds', price: '$149.99', image: 'public/Bootstrap.png' },
    {id: 8, name: 'Smart Home Hub', price: '$89.99', image: 'public/Git.png' },
    {id: 9, name: '4K Action Camera', price: '$249.99', image: 'public/Bootstrap.png' },
    {id: 10, name: 'VR Headset', price: '$299.99', image: 'public/CSS3.png' },
    {id: 11, name: 'Gaming Mouse', price: '$59.99', image: 'public/Java.png' },
    {id: 12, name: 'Mechanical Keyboard', price: '$89.99', image: 'public/Node.png' }
  ]
  return (
    <>
    <Header/>

     {/* HERO SECTION */}
      <section className="bg-blue-600 text-white py-20 px-6 font-sans">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Products</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore our wide range of high-quality products designed to meet all your needs. From the latest tech gadgets to everyday essentials, find everything you need at unbeatable prices.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
    <section className="products-section bg-gray-100 py-8" >
      <div className="product-card text-center container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {products.map(products => (
          <div key={products.id} className="card bg-white p-4 rounded-lg shadow-md" >
            <img src={products.image} alt={products.name} className="product-image w-full h-auto object-cover mb-4"/>
            <h2 className="product-name text-lg font-semibold mb-2">{products.name}</h2>
            <p className="product-price text-blue-600 font-semibold mb-4">{products.price}</p>
            <button className="buy-now-button bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Buy Now</button>
            <button className="ml-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Products