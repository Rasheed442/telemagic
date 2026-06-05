"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "End-to-End Automation",
    description:
      "Streamlines credit issuance, repayment reconciliation, subscriber eligibility scoring, and business intelligence reporting.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2v-5h2v5zm0-7h-2V7h2v2.5z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    title: "Real-Time Network Triggers",
    description:
      "Injects instant airtime and data loans mid-session during active calls and data usage to eliminate session drops.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.08-1.77 5.74-4.35 7.05l1.42 1.43C19.63 18.36 21 15.28 21 12c0-4.97-3.87-9-8.72-9.95zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 10.5h2v-5h-2v5z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    title: "Automated VAS Recovery",
    description:
      "Extends micro-loans to subscribers of auto-renewal services—like Caller Ring Back Tunes (CRBT)—with insufficient balances to unlock trapped revenue.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15l-4-4 1.41-1.41L11 13.17l5.59-5.59L18 9l-7 7z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    title: "Seamless Billing Integration",
    description:
      "Connects directly into the Value-Added Services (VAS) billing architecture to maintain continuous subscription retention.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    title: "Zero Disruption Metrics",
    description:
      "Guarantees uninterrupted service usage, ensuring key performance and subscription retention metrics remain completely unaffected.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    title: "Capex-Free Monetization",
    description:
      "Maximizes Average Revenue Per User (ARPU) through a strategic revenue-sharing model with zero upfront capital expenditure.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function TeleCreditSection() {
  return (
    <section id="telecredit" className="w-full bg-white py-20 md:py-28 px-4">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14 md:mb-16"
        >
          <span className="inline-block bg-[#D43429] text-white text-[15px] md:text-[16px] rounded-md font-medium font-ibm-plex-sans uppercase px-4 py-2 mb-6">
            Featured Product
          </span>
          <h2 className="text-[36px] md:text-[52px] font-normal font-serif text-[#444] leading-[1.1] mb-6 max-w-[900px]">
            TeleCredit: Enterprise Airtime Credit Management Platform
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#444] leading-relaxed max-w-[720px]">
            TeleCredit is an enterprise-grade platform engineered for
            telecommunications operators and service providers to automate,
            manage, and scale airtime lending operations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              variants={itemVariants}
              key={feature.title}
              className="bg-[#0D2340] rounded-xl p-7 flex flex-col gap-5 border border-white/5 hover:border-white/15 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-[#1a3a5c] flex items-center justify-center flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-[17px] md:text-[18px] font-normal text-white mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-[#a8bdd4] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TeleCreditSection;
