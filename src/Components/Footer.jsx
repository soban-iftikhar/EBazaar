import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 border-t border-gray-200 font-sans">
            <div className="container mx-auto max-w-7xl px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    
                    <div className="md:col-span-2 lg:col-span-1">
                        <h2 className="text-2xl font-bold text-blue-600 mb-4">EBazaar</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Your one-stop shop for everything fresh, affordable, and trendy.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-5 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
                            <li><Link to="/products" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Products</Link></li>
                            <li><Link to="/about" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-5 uppercase tracking-wider">Support</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Returns & Refunds</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-5 uppercase tracking-wider">Stay Updated</h3>
                        <p className="text-sm text-gray-600 mb-4">Subscribe to get offers and updates.</p>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                required 
                                className="flex-grow w-full px-4 py-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button 
                                type="submit" 
                                className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shrink-0"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <div className="bg-gray-50">
                <div className="container mx-auto max-w-7xl px-6 py-6">
                    <p className="text-center text-xs text-gray-500">
                        © 2024 EBazaar. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;