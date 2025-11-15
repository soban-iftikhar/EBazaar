
import { Link } from "react-router-dom"

import Header from "../Components/Header"
import Footer from "../Components/Footer"

const About = () => {
  return (
    <>
    <Header />
      {/* HERO SECTION */}
      <section className="bg-blue-600 text-white py-20 px-6 font-sans">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About EBazaar</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Your go-to marketplace built with passion innovation and a vision to make online shopping simple for everyone.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 px-6 bg-white font-sans">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            EBazaar started with a simple idea: build a platform where quality meets convenience. No complicated UI no confusing experience. Just smooth shopping and products you can trust.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            We’re a small team of engineers designers and creators who genuinely care about crafting a fast secure and user-friendly shopping experience for you.
          </p>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-20 px-6 bg-gray-50 font-sans">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Our mission is to make online shopping as smooth as scrolling through your favourite app. No stress no delays just high-quality products delivered fast.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            We focus heavily on user experience and performance ensuring our platform stays reliable and enjoyable every day.
          </p>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 px-6 bg-white font-sans">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-700">
                No hidden fees no shady stuff. Just honest pricing and trustworthy service.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-700">
                We keep improving from UI to features making sure you always get a fast and modern experience.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-700">
                You’re the center of everything we do. Your comfort and trust matter the most.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 px-6 bg-blue-600 text-white font-sans">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want to explore our products?</h2>
          <p className="text-lg mb-8">Check out our catalog and find something you love.</p>

          <Link
            to="/products"
            className="inline-block bg-white text-blue-600 font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Browse Products
          </Link>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default About
