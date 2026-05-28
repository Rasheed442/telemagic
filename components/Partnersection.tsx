"use client";
import React from "react";
import Image from "next/image";
import { mtn, airtel, glo, mahindra, ventra, bbc, afp } from "@/constant";
import { motion } from "framer-motion";

const partners = [
  { name: "MTN", logo: mtn },
  { name: "Airtel", logo: airtel },
  { name: "Glo", logo: glo },
  { name: "Mahindra Comviva", logo: mahindra },
  { name: "Ventra", logo: ventra },
  { name: "BBC News", logo: bbc },
  { name: "AFP", logo: afp },
];

// Duplicate 4 times to ensure it spans across large screens and loops perfectly
const extendedPartners = [...partners, ...partners, ...partners, ...partners];

function PartnersSection() {
  return (
    <section id="partners" className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-[42px] md:text-[48px] font-normal font-serif text-[#0D0D0D] leading-[1.1] mb-4">
            Partners
          </h2>
          <p className="text-[16px] text-[#444] leading-relaxed max-w-[500px]">
            Partnering with industry leaders to deliver innovative communication
            solutions.
          </p>
        </motion.div>
      </div>

      {/* Logos Carousel Marquee */}
      <div className="relative w-full flex items-center py-4 overflow-hidden">
        {/* Fading Edges */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 md:gap-12 w-max pr-8 md:pr-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35, // Adjust for scroll speed
          }}
        >
          {extendedPartners.map((partner, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="w-[120px] h-[120px] flex-shrink-0 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={90}
                height={90}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default PartnersSection;
