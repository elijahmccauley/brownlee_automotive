"use client";
import React, { useState } from 'react';

// --- Header Component ---
export default function Home() {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Array of navigation links for easy mapping
  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "About" },
    { href: "#", label: "Services" },
    { href: "#", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo or Site Title */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-800 hover:text-indigo-600">
              Logo
            </a>
          </div>

          {/* Center: Desktop Navigation Links */}
          {/* This block is hidden on small screens (mobile) and visible on medium screens and up */}
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: Mobile Menu Button */}
          {/* This button is only visible on small screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                "X"
              ) : (
                "M"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* This section is conditionally rendered based on the isMenuOpen state */}
      {/* The `md:hidden` class ensures it doesn't show up on larger screens */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};