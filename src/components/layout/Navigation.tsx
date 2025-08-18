"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // navbar scroll effect
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

  // close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close menu if click is outside menu and outside the toggle button
      const targetElement = event.target as Element;

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(targetElement) &&
        !targetElement.closest('button[aria-controls="mobile-menu"]')
      ) {
        setIsOpen(false);
      }
    };

    // Add click event listener when menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // handle link click to close menu
  const handleLinkClick = () => {
    setIsOpen(false);
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
          {/* logo */}
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

          {/* desktop nav */}
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
                href="#"
                className="hover:text-[var(--earth-accent)] transition-colors uppercase text-sm tracking-wider"
              >
                Gallery
              </Link>
              <Link
                href="#"
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

          {/* search icon */}
          <div className="hidden md:block">
            <button className="text-[var(--earth-highlight)] hover:text-[var(--earth-accent)] transition-colors">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>

          {/* mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-[var(--earth-accent)] inline-flex items-center justify-center p-2 rounded-md text-[var(--earth-darkest)] hover:text-[var(--earth-accent)] hover:bg-[var(--earth-medium)] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Bars3Icon className="block h-6 w-6" />
              ) : (
                <XMarkIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile dropdown */}
      <div
        ref={mobileMenuRef}
        className={`${isOpen ? "block" : "hidden"} md:hidden transition-all`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[var(--earth-darkest)]">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-[var(--earth-highlight)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-accent)] text-sm font-medium uppercase"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-[var(--earth-highlight)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-accent)] text-sm font-medium uppercase"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link
            href="/tours"
            className="block px-3 py-2 rounded-md text-[var(--earth-highlight)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-accent)] text-sm font-medium uppercase"
            onClick={handleLinkClick}
          >
            Tours
          </Link>
          <Link
            href="#"
            className="block px-3 py-2 rounded-md text-[var(--earth-highlight)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-accent)] text-sm font-medium uppercase"
            onClick={handleLinkClick}
          >
            Gallery
          </Link>
          <Link
            href="#"
            className="block px-3 py-2 rounded-md text-[var(--earth-highlight)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-accent)] text-sm font-medium uppercase"
            onClick={handleLinkClick}
          >
            Reviews
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-[var(--earth-highlight)] hover:bg-[var(--earth-dark)] hover:text-[var(--earth-accent)] text-sm font-medium uppercase"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
