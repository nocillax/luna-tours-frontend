"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for transparent to solid navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--earth-darkest)]/50 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-[var(--earth-accent)] text-xl font-bold mr-1">
                <Image
                  src="/logo/luna-light.svg"
                  alt="Luna Logo"
                  width={24}
                  height={24}
                  className="mr-1"
                />
              </span>
              <span className="text-[var(--earth-highlight)] text-xl font-findel font-bold uppercase tracking-wider">
                LUNA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 text-[var(--earth-highlight)]">
              <Link
                href="/"
                className=" hover:text-[var(--earth-accent)] transition-colors uppercase text-sm tracking-wider"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-[var(--earth-accent)] transition-colors uppercase text-sm tracking-wider"
              >
                About Us
              </Link>
              <Link
                href="/tours"
                className="hover:text-[var(--earth-accent)] transition-colors uppercase text-sm tracking-wider"
              >
                Tours
              </Link>
              <Link
                href="/gallery"
                className="hover:text-[var(--earth-accent)] transition-colors uppercase text-sm tracking-wider"
              >
                Gallery
              </Link>
              <Link
                href="/reviews"
                className="hover:text-[var(--earth-accent)] transition-colors uppercase text-sm tracking-wider"
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                className="hover:text-[var(--earth-accent)] transition-colors uppercase text-sm tracking-wider"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Search Icon */}
          <div className="hidden md:block">
            <button className="text-[var(--earth-highlight)] hover:text-[var(--earth-accent)] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-[var(--earth-dark)] inline-flex items-center justify-center p-2 rounded-md text-[var(--earth-highlight)] hover:text-[var(--earth-accent)] hover:bg-[var(--earth-medium)] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden transition-all`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[var(--earth-darkest)]">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-[var(--earth-highlight)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-accent)] text-sm font-medium uppercase"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-[var(--earth-highlight)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-accent)] text-sm font-medium uppercase"
          >
            About Us
          </Link>
          <Link
            href="/tours"
            className="block px-3 py-2 rounded-md text-[var(--earth-highlight)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-accent)] text-sm font-medium uppercase"
          >
            Tours
          </Link>
          <Link
            href="/gallery"
            className="block px-3 py-2 rounded-md text-[var(--earth-highlight)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-accent)] text-sm font-medium uppercase"
          >
            Gallery
          </Link>
          <Link
            href="/reviews"
            className="block px-3 py-2 rounded-md text-[var(--earth-highlight)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-accent)] text-sm font-medium uppercase"
          >
            Reviews
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-[var(--earth-highlight)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-accent)] text-sm font-medium uppercase"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
