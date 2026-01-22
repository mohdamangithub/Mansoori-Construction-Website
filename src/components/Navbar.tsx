"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-yellow-600">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-4">
          <span className="inline-block bg-yellow-600 rounded-full p-2">
          
            <Image width={40}   // required10
      height={40}  src="/images/Logo.png" alt="Logo" />
          </span>
          <span className="owner-name font-extrabold text-xl tracking-wide text-yellow-700 dark:text-yellow-400 uppercase">
            {`Mansoori's`}
          </span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8  items-center">
          <Link href="#" className="nav-link">
            Home
          </Link>
          <Link href="#about" className="nav-link">
            About
          </Link>
          <Link href="#services" className="nav-link">
            Services
          </Link>
          <Link href="#projects" className="nav-link">
            Projects
          </Link>
          <Link href="#contact" className="nav-link">
            Contact
          </Link>
        </div>
        {/* Mobile Hamburger */}
        <MobileMenu />
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        aria-label="Open menu"
        className="text-yellow-700 dark:text-yellow-400 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-yellow-600 flex flex-col items-center gap-4 py-6 z-50 animate-fade-in">
          <Link href="#" className="nav-link btn" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            href="#about"
            className="nav-link btn"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="#services"
            className="nav-link btn"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="nav-link btn"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="nav-link btn"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
