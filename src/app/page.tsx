"use client";

import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Home,
  Menu,
  Star,
  Heart,
  ChevronLeft,
  ChevronRight,
  Search,
  FileText,
  CreditCard,
  Eye,
  Shield,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Logo from "@/components/global/logo";

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  hover: { y: -5, transition: { duration: 0.2 } },
};

const featureCardContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cityCardVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
};

export default function ResidenceLanding() {
  return (
    <div className="min-h-screen bg-[#FDFAF5]">
      <Hero />
      <div
        className=""
        // style={{ backgroundColor: "hsla(15, 29%, 95%, 1)" }}
      >
        {/* Statistics Section */}
        {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">1M+</div>
              <div className="text-gray-600">Satisfied Landlords</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">500K+</div>
              <div className="text-gray-600">Happy Tenants</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
          </div>
        </div>
      </section> */}

        {/* Popular Cities Section */}
        <div style={{ backgroundColor: "hsla(38, 67%, 98%, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 mb-20"
            >
              <div>
                <h2 className="text-4xl md:text-5xl  text-gray-900 leading-tight">
                  Popular Cities Across Nigeria
                </h2>
              </div>
              <div className="flex items-center">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Bringing Trusted Homes to Tenants in Nigeria's Leading Cities
                </p>
              </div>
            </motion.div>

            {/* City Cards */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {/* FCT, Abuja Card */}
              <motion.div
                variants={cityCardVariants}
                whileHover="hover"
                className="relative rounded-3xl overflow-hidden h-80 group cursor-pointer"
              >
                <Image
                  src="/popular1.jpg"
                  alt="FCT, Abuja cityscape with modern buildings"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl mb-2">FCT, Abuja</h3>
                  <p className="text-white/90">2,500+ Properties</p>
                </div>
              </motion.div>

              {/* Lagos Card */}
              <motion.div
                variants={cityCardVariants}
                whileHover="hover"
                className="relative rounded-3xl overflow-hidden h-80 group cursor-pointer"
              >
                <Image
                  src="/popular2.jpg"
                  alt="Lagos skyline with modern architecture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl  mb-2">Lagos</h3>
                  <p className="text-white/90">3,800+ Properties</p>
                </div>
              </motion.div>

              {/* Port Harcourt Card */}
              <motion.div
                variants={cityCardVariants}
                whileHover="hover"
                className="relative rounded-3xl overflow-hidden h-80 group cursor-pointer"
              >
                <Image
                  src="/popular3.jpg"
                  alt="Port Harcourt waterfront and city view"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl mb-2">Port Harcourt</h3>
                  <p className="text-white/90">1,500+ Properties</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl  text-gray-900 mb-4">
                How It Works
              </h2>
              <div></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Simple steps to find your next home or list your property
              </p>
            </motion.div>
            <div className="pl-4 flex flex-col md:flex-row md:gap-64 justify-between items-center">
              <div className="flex flex-col justify-start">
                <p className="text-lg text-center font-[600] mb-2">For Landlords</p>
                <Button
                  variant="ghost"
                  className="w-52 mb-8 rounded-full text-[#0F7173]  bg-transparent border-2 border-[#0F7173]"
                >
                  Manage Properties
                </Button>
              </div>
              <div className="">
                <p className="text-lg mb-2"> Easily list and manage your properties, track income, and
                connect with reliable tenants no tech skills required.</p>
               
              </div>
            </div>

{/* For Landlords Section */}
<div className="mb-24">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="grid md:grid-cols-2 gap-8"
  >
    {/* Landlord Image */}
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] order-2 md:order-1"
    >
      <Image
        src="/forlandlord.jpg"
        alt="For Landlords"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </motion.div>

    {/* Landlord Feature Cards */}
    <motion.div
      variants={featureCardContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="space-y-6 order-1 md:order-2"
    >
      {/* Your existing feature cards remain the same */}
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="rounded-[2.5rem] p-6 hover:shadow-lg transition-shadow duration-200"
        style={{ backgroundColor: "hsla(38, 67%, 98%, 1)" }}
      >
        <div className="flex flex-col items-start gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0"
          >
            <Home className="h-5 w-5 text-orange-600" />
          </motion.div>
          <div>
            <h4 className="text-xl  text-gray-900 mb-2">
              List Properties
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Showcase your property to thousands of verified tenants
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="rounded-[2.5rem] p-6 hover:shadow-lg transition-shadow duration-200"
        style={{ backgroundColor: "hsla(38, 67%, 98%, 1)" }}
      >
        <div className="flex flex-col items-start gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-10 h-10 rounded-2xl bg-teal-100 flex items-center justify-center flex-shrink-0"
          >
            <FileText className="h-5 w-5 text-teal-600" />
          </motion.div>
          <div>
            <h4 className="text-xl  text-gray-900 mb-2">
              Manage Properties
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Say goodbye to spreadsheets and endless calls. Handle check-ins from your all-in-one dashboard.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="rounded-[2.5rem] p-6 hover:shadow-lg transition-shadow duration-200"
        style={{ backgroundColor: "hsla(38, 67%, 98%, 1)" }}
      >
        <div className="flex flex-col items-start gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0"
          >
            <CreditCard className="h-5 w-5 text-orange-600" />
          </motion.div>
          <div>
            <h4 className="text-xl  text-gray-900 mb-2">
              Collect Payments
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Receive payments directly to your account with automated receipts and transparent transaction history.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
</div>

{/* For Tenants Section Header - Make it mobile responsive */}
<div className="pl-4 flex flex-col md:flex-row gap-8 md:gap-64 justify-between items-start md:items-center mb-8">
  <div className="flex flex-col justify-start">
    <p className="text-lg font-[600] text-center mb-2">For Tenants</p>
    <Button
      variant="ghost"
      className="w-full md:w-52 mb-4 md:mb-8 rounded-full text-[#0F7173] bg-transparent border-2 border-[#0F7173]"
    >
      Manage Bookings
    </Button>
  </div>
  <div className="max-w-md md:max-w-none">
    <p className="text-lg mb-2">
      Find your perfect home with ease. Browse verified listings, book securely, and move in with confidence.
    </p>
  </div>
</div>

{/* For Tenants Section */}
<div>
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="grid md:grid-cols-2 gap-8"
  >
    {/* Tenant Feature Cards */}
    <motion.div
      variants={featureCardContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="space-y-6 order-2 md:order-1"
    >
      {/* Your existing tenant feature cards */}
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="rounded-[2.5rem] p-6 hover:shadow-lg transition-shadow duration-200"
        style={{ backgroundColor: "hsla(38, 67%, 98%, 1)" }}
      >
        <div className="flex flex-col items-start gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0"
          >
            <Search className="h-5 w-5 text-orange-600" />
          </motion.div>
          <div>
            <h4 className="text-xl  text-gray-900 mb-2">
              Search Properties
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Find your ideal home from our extensive listings
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="rounded-[2.5rem] p-6 hover:shadow-lg transition-shadow duration-200"
        style={{ backgroundColor: "hsla(38, 67%, 98%, 1)" }}
      >
        <div className="flex flex-col items-start gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-10 h-10 rounded-2xl bg-teal-100 flex items-center justify-center flex-shrink-0"
          >
            <Eye className="h-5 w-5 text-teal-600" />
          </motion.div>
          <div>
            <h4 className="text-xl  text-gray-900 mb-2">
              View Details
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Get everything you need to know, upfront. See real photos, amenities, and verified reviews.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="rounded-[2.5rem] p-6 hover:shadow-lg transition-shadow duration-200"
        style={{ backgroundColor: "hsla(38, 67%, 98%, 1)" }}
      >
        <div className="flex flex-col items-start gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0"
          >
            <Shield className="h-5 w-5 text-orange-600" />
          </motion.div>
          <div>
            <h4 className="text-xl  text-gray-900 mb-2">
              Book Securely
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Pay through our secure platform, track your booking, and get instant confirmation.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>

    {/* Tenant Image */}
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] order-1 md:order-2"
    >
      <Image
        src="/fortenant.jpg"
        alt="For Tenants"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </motion.div>
  </motion.div>
</div>
          </div>
        </div>

        {/* Verified Homes Section */}
      

        {/* CTA Section */}
        <div className="relative overflow-hidden flex items-center justify-center py-16">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/readypic.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/75"></div>
          </div>

          {/* Background decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-[1]"
          >
            <motion.div
              animate={{
                rotate: 360,
                transition: { duration: 50, repeat: Infinity, ease: "linear" },
              }}
              className="absolute top-0 left-0 w-96 h-96 rounded-full border-2 border-gray-300 -translate-x-48 -translate-y-48"
            ></motion.div>
            <motion.div
              animate={{
                rotate: -360,
                transition: { duration: 50, repeat: Infinity, ease: "linear" },
              }}
              className="absolute bottom-0 right-0 w-96 h-96 rounded-full border-2 border-gray-300 translate-x-48 translate-y-48"
            ></motion.div>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl  text-gray-900 mb-8">
                Ready to rent or manage your next home? Residence makes it easy.
              </h2>
              {/* <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of happy tenants and landlords who trust Residence
              for their housing needs
            </p> */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button>
                  Join as a Tenant
                </Button>
                <Button
                  variant="outline"
                >
                  Join as a Landlord
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#0f7173] text-white py-12">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-2">
                  <Logo
                  width={120}
                  height={120}
                  />
                </Link>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <div className="space-y-2">
                  <Link
                    href="#"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <Link
                    href="#"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    Search Houses
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    Tenant Login
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-gray-300">
                  <p>+234 90 2933 8377</p>
                  <p>admin@residence.ltd</p>
                  <Link
                    href="#"
                    className=""
                  >
                    Get a call
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-teal-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">© 2025 — Copyright</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
