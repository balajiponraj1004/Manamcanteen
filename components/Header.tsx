
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-orange-100"
          : "bg-white border-b border-gray-100"
      )}
    >
      {/* Top Bar - Contact Info */}
      <div className="bg-orange-600 text-white text-sm py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>3415 Dixie Rd Unit 3B, Mississauga, ON L4Y 2B1</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🕒</span>
              <span>Open Daily 11AM-10PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="tel:+19052380707"
              className="flex items-center gap-2 hover:text-orange-200 transition-colors"
            >
              <span>📞</span>
              <span>+1 905-238-0707</span>
            </Link>
            <Link
              href="mailto:manamcanteen@gmail.com"
              className="flex items-center gap-2 hover:text-orange-200 transition-colors"
            >
              <span>✉️</span>
              <span>manamcanteen@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 font-bold text-xl md:text-2xl text-gray-900 hover:text-orange-600 transition-colors"
          aria-label="Manam Canteen - South Indian Restaurant"
        >
          <div className="relative">
            <Image
              src="/manam-logo.png"
              width={48}
              height={48}
              alt="Manam Canteen logo - Authentic South Indian Restaurant"
              priority
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <span className="leading-tight">Manam Canteen</span>
            <span className="text-xs text-orange-600 font-normal hidden md:block">
              South Indian Cuisine
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/menu"
            className="text-gray-700 hover:text-orange-600 font-medium transition-colors relative group"
          >
            Menu
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/catering"
            className="text-gray-700 hover:text-orange-600 font-medium transition-colors relative group"
          >
            Catering
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-orange-600 font-medium transition-colors relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/reviews"
            className="text-gray-700 hover:text-orange-600 font-medium transition-colors relative group"
          >
            Reviews
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-orange-600 font-medium transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="tel:+19052380707"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            <span>📞</span>
            <span>Call Now</span>
          </Link>
          <Link
            href="/contact#order"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            <span>🍽️</span>
            <span>Order Online</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-nav"
        className={clsx(
          "md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container py-4 space-y-4">
          {/* Mobile Contact Info */}
          <div className="bg-orange-50 p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span>📍</span>
              <span>3415 Dixie Rd Unit 3B, Mississauga</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>📞</span>
              <Link href="tel:+19052380707" className="text-orange-600 hover:text-orange-700">
                +1 905-238-0707
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>🕒</span>
              <span>Open Daily 11AM-10PM</span>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-2">
            <Link
              href="/menu"
              className="block py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors font-medium"
              onClick={() => setOpen(false)}
            >
              🍽️ Menu
            </Link>
            <Link
              href="/catering"
              className="block py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors font-medium"
              onClick={() => setOpen(false)}
            >
              🎉 Catering
            </Link>
            <Link
              href="/about"
              className="block py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors font-medium"
              onClick={() => setOpen(false)}
            >
              ℹ️ About
            </Link>
            <Link
              href="/reviews"
              className="block py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors font-medium"
              onClick={() => setOpen(false)}
            >
              ⭐ Reviews
            </Link>
            <Link
              href="/contact"
              className="block py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors font-medium"
              onClick={() => setOpen(false)}
            >
              📞 Contact
            </Link>
          </div>

          {/* Mobile CTA Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-100">
            <Link
              href="tel:+19052380707"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              <span>📞</span>
              <span>Call</span>
            </Link>
            <Link
              href="/contact#order"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              <span>🍽️</span>
              <span>Order</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
