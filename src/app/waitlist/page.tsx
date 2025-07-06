import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/waitlist-form";
import Link from "next/link";

export default function WaitlistPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "hsla(38, 67%, 98%, 1)" }}
    >
      {/* Floating Navbar */}
      <nav
        className="mx-4 sm:mx-8 mt-4 sm:mt-8 rounded-full px-4 sm:px-8 py-3 sm:py-4 shadow-lg"
        style={{ backgroundColor: "hsla(15, 29%, 95%, 1)" }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-7 sm:h-8 w-7 sm:w-8 items-center justify-center rounded bg-orange-500">
              <span className="text-xs sm:text-sm font-bold text-white">R</span>
            </div>
            <span className="text-base sm:text-lg font-semibold text-gray-800">
              residence
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-sm lg:text-base text-gray-700 hover:text-gray-900 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#"
              className="text-sm lg:text-base text-gray-700 hover:text-gray-900 transition-colors"
            >
              List a Property
            </a>
            <a
              href="#"
              className="text-sm lg:text-base text-gray-700 hover:text-gray-900 transition-colors"
            >
              Find a Home
            </a>
            <a
              href="#"
              className="text-sm lg:text-base text-gray-700 hover:text-gray-900 transition-colors"
            >
              FAQs
            </a>
            <a
              href="#"
              className="text-sm lg:text-base text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Get Started Button */}
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base">
            Get started
          </Button>
        </div>
      </nav>

      {/* Waitlist Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
            Be the First to Experience{" "}
            <span className="text-teal-600">Smarter</span> Renting
          </h1>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
            Whether you're a tenant looking for a stress-free home, or a
            landlord ready to manage rentals more transparently. Residence is
            almost here. Get notified when we launch.
          </p>
        </div>
        <div className="px-0 sm:px-4 md:px-8 lg:px-32">
          <WaitlistForm />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-teal-700 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-orange-500">
                  <span className="text-sm font-bold text-white">R</span>
                </div>
                <span className="text-xl font-semibold text-white">
                  residence
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Quick Links
                </h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-orange-300 transition-colors"
                  >
                    Search Houses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-orange-300 transition-colors"
                  >
                    Tenant Login
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-orange-300 transition-colors"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Contact Us
                  </h4>
                </div>
                <p className="text-white mb-1">+234 90 2933 8377</p>
                <p className="text-white mb-2">admin@residence.ltd</p>
                <a
                  href="#"
                  className="text-orange-300 hover:text-orange-400 transition-colors"
                >
                  Get a call
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-teal-600">
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="#"
                className="w-10 h-10 border border-white rounded-lg flex items-center justify-center hover:bg-white hover:text-teal-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white rounded-lg flex items-center justify-center hover:bg-white hover:text-teal-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white rounded-lg flex items-center justify-center hover:bg-white hover:text-teal-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white rounded-lg flex items-center justify-center hover:bg-white hover:text-teal-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-white text-sm">© 2025 — Copyright</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
