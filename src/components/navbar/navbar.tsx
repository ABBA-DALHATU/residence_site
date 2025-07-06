'use client'
import React, { useState } from "react";
import Navlinks from "./navlinks";
import Logo from "../global/logo";
import Container from "../global/container";
import WaitlistButton from "./waitlist-button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-[#F5EFED] mx-6 lg:mx-12 py-3 fixed right-0 left-0 top-8 z-50 shadow-lg rounded-full">
        <section className="flex px-6 items-center justify-between">
          <div className="mb-3">
            <Logo height={50} width={120} />
          </div>
          
          {!isMobile && (
            <>
              <Navlinks />
              <WaitlistButton />
            </>
          )}
          
          {isMobile && (
            <button
              onClick={toggleMobileMenu}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          )}
        </section>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile menu content */}
          <div
            className={`absolute top-0 right-0 w-80 h-full bg-[#F5EFED] shadow-xl transform transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              {/* <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Logo height={40} width={100} />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div> */}

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8">
                <div onClick={closeMobileMenu}>
                  <Navlinks />
                </div>
              </div>

              {/* Waitlist Button */}
              <div className="p-6 border-t border-gray-200">
                <div onClick={closeMobileMenu}>
                  <WaitlistButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;