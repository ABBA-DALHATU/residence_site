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
    <div
      className="min-h-screen"
      style={{ backgroundColor: "hsla(15, 29%, 95%, 1)" }}
    >
      {/* New Hero Section with Navigation */}
      <div
        className="min-h-[90vh]"
        style={{ backgroundColor: "hsla(15, 29%, 95%, 1)" }}
      >
        {/* Navigation Header */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between px-6 py-4 lg:px-12"
        >
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-orange-500">
              My<span className="text-gray-700">residence</span>
            </Link>
          </div>

          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex items-center space-x-8"
          >
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              List a Property
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Find a Home
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact Us
            </Link>
          </motion.nav>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
              Get started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.header>

        {/* Hero Content */}
        <main className="px-6 lg:px-12 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            {/* Left Column - Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-8"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-bold leading-tight"
              >
                Easily <span className="text-teal-600">Manage</span> Your
                Properties. Help Tenants Find Reliable Homes
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-lg"
              >
                Whether you're a landlord managing multiple rentals or a tenant
                searching for a reliable home, Residence has you covered
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg">
                  Explore
                </Button>
                <Link href="/waitlist">
                  <Button
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-full text-lg bg-transparent"
                  >
                    Join Waitlist
                  </Button>
                </Link>
              </motion.div>

              {/* User Avatars and Stats */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center space-x-4"
              >
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-green-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 border-2 border-white"></div>
                </div>
                <span className="text-gray-600 font-medium">
                  10,000+ Landlords
                </span>
              </motion.div>
            </motion.div>

            {/* Right Column - Property Image */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/househero.jpg"
                  alt="Beautiful orange house with landscaping"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />

                {/* Top Rated Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                >
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700 px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>Top rated property</span>
                  </Badge>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>

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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
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
                <h3 className="text-2xl font-bold mb-2">FCT, Abuja</h3>
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
                <h3 className="text-2xl font-bold mb-2">Lagos</h3>
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
                <h3 className="text-2xl font-bold mb-2">Port Harcourt</h3>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Simple steps to find your next home or list your property
            </p>
          </motion.div>

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
                className="relative rounded-3xl overflow-hidden h-[100%]"
              >
                <Image
                  src="/forlandlord.jpg"
                  alt="For Landlords"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Landlord Feature Cards */}
              <motion.div
                variants={featureCardContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-6"
              >
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
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
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
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Manage Properties
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Say goodbye to spreadsheets and endless calls. Handle
                        check-ins from your all-in-one dashboard.
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
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Collect Payments
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Receive payments directly to your account with automated
                        receipts and transparent transaction history.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
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
                className="space-y-6"
              >
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
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
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
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        View Details
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Get everything you need to know, upfront. See real
                        photos, amenities, and verified reviews.
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
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Book Securely
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Pay through our secure platform, track your booking, and
                        get instant confirmation.
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
                className="relative rounded-3xl overflow-hidden h-[100%]"
              >
                <Image
                  src="/fortenant.jpg"
                  alt="For Tenants"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Verified Homes Section */}
      <div
        className="mb-24"
        style={{ backgroundColor: "hsla(15, 29%, 95%, 1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Verified Homes Across Growing Cities
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600 text-lg leading-relaxed">
                Explore what home feels like wherever life takes you, with
                Residence
              </p>
            </div>
          </div>

          {/* Property Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Property Image with Carousel */}
                <div className="relative h-64 group">
                  <Image
                    src={`/h${item}.jpg`}
                    alt="Gemville Homes"
                    fill
                    className="object-cover"
                  />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                    <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors" />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronLeft className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Gemville Homes
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">
                        4.7(19)
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">Jabi, Abuja</p>
                  <p className="text-lg font-bold text-gray-900">
                    From 900K per Year
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
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
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg">
                Join as a Tenant
              </Button>
              <Button
                variant="outline"
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-full text-lg bg-transparent"
              >
                Join as a Landlord
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-teal-700 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Home className="h-6 w-6" />
                <span className="text-xl font-bold">Residence</span>
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
                  className="text-orange-400 hover:text-orange-300"
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
  );
}
