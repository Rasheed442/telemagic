"use client";
import { logo } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Portfolio", href: "#portfolio" },
  // { name: "Blogs", href: "#blogs" },
  // { name: "Contact ", href: "#contact" },
  { name: "Partners ", href: "#partners" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      let currentSection = "#home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = `#${section}`;
            break;
          }
        }
      }

      // If at the very bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
        currentSection = navLinks[navLinks.length - 1].href;
      }

      setActiveSection((prev) => (prev !== currentSection ? currentSection : prev));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 flex justify-center pt-3 px-4"
      >
        <div
          className={`bg-white flex items-center justify-between px-5 py-4 w-full max-w-[1300px] rounded-2xl transition-all duration-300 ${
            isScrolled ? "shadow-xl border border-gray-200" : "shadow-md"
          }`}
          style={{ minHeight: "64px" }}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo}
              alt="Logo"
              width={195}
              height={190}
              className="cursor-pointer `object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-[18px] font-medium rounded-full transition-all duration-200 whitespace-nowrap
                    ${
                      isActive
                        ? "bg-[#D43429] text-[#ffffff]"
                        : "text-[#333] hover:bg-gray-100"
                    }`}
                >
                  {isActive && (
                    <motion.span 
                      layoutId="activeDot"
                      className="inline-block w-2 h-2 rounded-full bg-[#ffffff] mr-2 align-middle" 
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-2 ml-2"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-[#0D0D0D]" />
            <span className="block w-6 h-[2px] bg-[#0D0D0D]" />
            <span className="block w-4 h-[2px] bg-[#0D0D0D]" />
          </button>
        </div>
      </motion.div>

      {/* Mobile Overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className="fixed inset-0 z-40 bg-black/40 md:hidden transition-opacity duration-300"
        style={{
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
      />

      {/* Mobile Slide-in Drawer */}
      <div
        className="fixed top-0 right-0 h-screen w-full max-w-[340px] bg-white z-50 flex flex-col md:hidden shadow-2xl"
        style={{
          transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center bg-[#0D0D0D] px-5 py-4">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src={logo}
              alt="Logo"
              width={90}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-[22px] cursor-pointer bg-transparent border-none leading-none"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Drawer Nav Links */}
        <div className="flex flex-col flex-1 px-6 pt-4">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-[18px] py-4 border-b border-gray-100 transition-colors duration-200 flex items-center gap-2
                  ${isActive ? "text-[#0D0D0D] font-semibold" : "text-[#444] hover:text-[#D5F033]"}`}
                style={{
                  transitionDelay: isMenuOpen ? `${i * 60}ms` : "0ms",
                  transform: isMenuOpen ? "translateX(0)" : "translateX(30px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `transform 0.3s ease ${i * 60}ms, opacity 0.3s ease ${i * 60}ms, color 0.2s`,
                }}
              >
                {isActive && (
                  <motion.span 
                    layoutId="activeDotMobile"
                    className="w-2 h-2 rounded-full bg-[#D43429] flex-shrink-0" 
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Header;
