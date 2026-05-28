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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

function PartnersSection() {
  return (
    <section id="partners" className="w-full bg-white py-20 px-4">
      <div className="max-w-[1300px] mx-auto">
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

        {/* Logos Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center items-center gap-6"
        >
          {partners.map((partner) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              key={partner.name}
              className="w-[110px] h-[110px] rounded-xl overflow-hidden flex items-center justify-center bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
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
