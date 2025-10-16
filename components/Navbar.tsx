"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">IRA Tours & Travels</h1>
        <div className="space-x-4 hidden md:flex">
          <Link href="/">Home</Link>
          <Link href="#tours">Tours</Link>
          <Link href="#flights">Flights</Link>
          <Link href="#trains">Trains</Link>
          <Link href="#visa">Visa</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <Link
          href="#contact"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}
