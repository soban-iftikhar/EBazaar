import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-white text-gray-700 border-b border-gray-200 font-sans sticky top-0 z-50 shadow-sm">
            <nav className="container mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
             
                <Link to="/" className="logo">
                    <h1 className="text-3xl font-bold text-blue-600">EBazaar</h1>
                </Link>

                <ul className="flex items-center space-x-8">
                    <li><Link to="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
                    <li><Link to="/products" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Products</Link></li>
                    <li><Link to="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">About</Link></li>
                    <li><Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
                    <li>
                        <Link
                            to="/cart"
                            className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Cart
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;