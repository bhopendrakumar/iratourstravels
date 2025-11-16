"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg sm:text-xl font-bold text-blue-600">IRA Tours & Travels</h1>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className={`absolute top-full left-0 right-0 bg-white shadow-lg md:shadow-none md:static md:bg-transparent md:flex md:space-x-4 transition-all duration-300 ${
            isMenuOpen ? 'block' : 'hidden md:flex'
          }`}>
            <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-2 p-4 md:p-0">
              <Link href="/" className="px-4 py-2 hover:bg-gray-100 md:hover:bg-transparent rounded" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="#tours" className="px-4 py-2 hover:bg-gray-100 md:hover:bg-transparent rounded" onClick={() => setIsMenuOpen(false)}>Tours</Link>
              <Link href="#flights" className="px-4 py-2 hover:bg-gray-100 md:hover:bg-transparent rounded" onClick={() => setIsMenuOpen(false)}>Flights</Link>
              <Link href="#trains" className="px-4 py-2 hover:bg-gray-100 md:hover:bg-transparent rounded" onClick={() => setIsMenuOpen(false)}>Trains</Link>
              <Link href="#visa" className="px-4 py-2 hover:bg-gray-100 md:hover:bg-transparent rounded" onClick={() => setIsMenuOpen(false)}>Visa</Link>
              <Link href="#contact" className="px-4 py-2 hover:bg-gray-100 md:hover:bg-transparent rounded" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <Link
            href="#contact"
            className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-blue-700 text-sm sm:text-base whitespace-nowrap"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
