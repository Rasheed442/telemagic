"use client";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div>
      <div className="flex justify-center md:justify-end h-[100vh] md:h-[77vh] flex-col max-w-[1300px] gap-4 m-auto px-5 w-full pt-20 md:pt-0 pb-10 md:pb-0">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-[40px] md:text-[55px] font-normal max-w-[818px] leading-tight text-white"
        >
          Transform Every Customer Conversation Into Business Growth
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-sans text-[18px] md:text-[22px] font-normal max-w-[740px] text-white/90"
        >
          An all-in-one cloud communication platform that helps businesses
          manage calls, SMS, email, and live chat from a single intelligent
          workspace.
        </motion.p>
      </div>
    </div>
  );
}

export default Hero;
