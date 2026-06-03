"use client";
import { about, ndpr } from "@/constant";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div id="about">
      <div className="py-24 md:py-34 px-4 flex flex-col md:flex-row items-center text-center justify-center ">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <button className="px-4 py-2 uppercase bg-[#D43429] text-[18px] text-center text-[#ffffff] rounded-sm">
            {/* ABOUT US */}
            About Telemagic Group
          </button>
          {/* <p className="font-serif text-[28px] md:text-[35px] font-normal max-w-[415px] mt-4 text-black leading-tight">
            About Telemagic Group
          </p> */}
          <p
            style={{ fontWeight: "400" }}
            className="text-[15px] md:text-[24px] text-[#444] font-sans max-w-[800px] mt-4 leading-relaxed"
          >
            Telemagic Group is a leading African ICT solutions developer, combining world-class innovation with dedicated 
            local support. We empower enterprises and consumers through an extensive suite of M-Commerce, fintech, and 
            high-impact Value-Added Services (VAS). By leveraging the full potential of the mobile ecosystem, we deliver fast, secure,
             and user-friendly capabilities designed to scale with your business needs.
          </p>
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 flex justify-center w-full"
        >
          <Image
            src={about}
            alt="About Telemagic"
            width={550}
            height={550}
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </motion.div> */}
      </div>
      <div className="bg-[#082241] h-[100vh] flex flex-col items-center gap-6 pt-14 px-4 text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#D43429] text-white text-[16px] md:text-[18px] uppercase font-medium text-center rounded-sm py-2 px-4"
        >
          Regulatory & Compliance
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-[1200px] text-[20px] md:text-[35px] font-normal font-serif text-center pb-4 leading-snug text-white/90"
        >
          We are licensed by the Nigerian Communications Commission (NCC),
          Telemagic Communications Limited delivers high-impact Value-Added
          Services (VAS) via shortcodes to consumers and enterprises.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-[550px] flex justify-center"
        >
          <Image
            src={ndpr}
            alt="NDPR License"
            width={200}
            height={200}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
