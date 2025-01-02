import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-white hover:text-blue-200 transition-colors duration-200">
              ☪️ Hidayah Hub
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="flex space-x-8">
              {[
                { path: '/', label: 'Home' },
                { path: '/quiz', label: 'Quiz' },
                { path: '/learning', label: 'Learning' },
                { path: '/calendar', label: 'Calendar' }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-white font-medium hover:text-blue-200 transition-all duration-200 py-2 px-3 rounded-md ${
                      isActive(item.path) 
                        ? 'bg-blue-700 shadow-inner' 
                        : 'hover:bg-blue-700/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-blue-200 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="pt-2 pb-4 space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/quiz', label: 'Quiz' },
                { path: '/learning', label: 'Learning' },
                { path: '/calendar', label: 'Calendar' }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 text-white font-medium rounded-md ${
                      isActive(item.path) 
                        ? 'bg-blue-700' 
                        : 'hover:bg-blue-700/50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;