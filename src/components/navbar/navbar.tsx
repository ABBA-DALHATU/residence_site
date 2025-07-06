'use client'
import React from "react";
import Logo from "../global/logo";
import WaitlistButton from "./waitlist-button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#F5EFED] mx-6 lg:mx-12 py-3 fixed right-0 left-0 top-8 z-50 shadow-lg rounded-full">
      <section className="flex px-6 items-center justify-between">
        <div className="mb-3">
          <Link href="/">
            <Logo height={50} width={120} />
          </Link>
        </div>
        
        <WaitlistButton />
      </section>
    </nav>
  );
};

export default Navbar;