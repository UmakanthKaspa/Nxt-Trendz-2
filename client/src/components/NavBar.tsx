import React from "react";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-50 to-blue-50 w-screen shadow-md font-sans">
      <div className="flex justify-between items-center p-6 w-11/12 max-w-7xl mx-auto">
        <Link to="/">
          <img
            className="w-28 cursor-pointer transition-transform duration-200 hover:scale-105"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
        </Link>
        <button
          type="button"
          className="md:hidden rounded hover:bg-blue-100 transition-colors duration-200"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="w-6"
          />
        </button>
        <ul className="hidden md:flex gap-8">
          {["Home", "Products", "Cart"].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <button className="px-4 rounded hover:bg-blue-100 transition-colors duration-200">
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="bg-[#e6f6ff] md:hidden">
        <ul className="flex justify-around items-center py-6">
          {[
            {
              src: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png",
              alt: "nav home",
            },
            {
              src: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png",
              alt: "nav products",
            },
            {
              src: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png",
              alt: "nav cart",
            },
          ].map((icon) => (
            <li key={icon.alt}>
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-6 cursor-pointer transition-transform duration-200 hover:scale-110"
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};