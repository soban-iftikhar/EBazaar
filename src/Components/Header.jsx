import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white text-gray-700 border-b border-gray-200 font-sans sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
        <Link to="/" className="logo">
          <h1 className="text-3xl font-bold text-blue-600">EBazaar</h1>
        </Link>

        <ul className="flex items-center space-x-8">
          <li>
            <NavLink
              to="/"
              className={(e) =>
                e.isActive
                  ? "active text-sm font-medium text-blue-600"
                  : "text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={(e) =>
                e.isActive
                  ? "active text-sm font-medium text-blue-600"
                  : "text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              }
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={(e) =>
                e.isActive
                  ? "active text-sm font-medium text-blue-600"
                  : "text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={(e) =>
                e.isActive
                  ? "active text-sm font-medium text-blue-600"
                  : "text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              }
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/cart"
              className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
