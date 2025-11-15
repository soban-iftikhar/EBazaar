import Header from "../Components/Header"
import Footer from "../Components/Footer"

const Cart = () => {
  return (
    <>
      <Header/>
      {/* HERO SECTION */}
      <section className="bg-blue-600 text-white py-20 px-6 font-sans">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Your Shopping Cart</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Review the items in your cart before proceeding to checkout. You can update quantities or remove items as needed.
          </p>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Cart