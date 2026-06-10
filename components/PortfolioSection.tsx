"use client";
import React from "react";
import { motion } from "framer-motion";

const teleCreditFeatures = [
  {
    title: "End-to-End Automation",
    description:
      "Streamlines credit issuance, repayment reconciliation, subscriber eligibility scoring, and business intelligence reporting.",
  },
  {
    title: "Real-Time Network Triggers",
    description:
      "Injects instant airtime and data loans mid-session during active calls and data usage to eliminate session drops.",
  },
  {
    title: "Automated VAS Recovery",
    description:
      "Extends micro-loans to subscribers of auto-renewal services—like Caller Ring Back Tunes (CRBT)—with insufficient balances to unlock trapped revenue.",
  },
  {
    title: "Seamless Billing Integration",
    description:
      "Connects directly into the Value-Added Services (VAS) billing architecture to maintain continuous subscription retention.",
  },
  {
    title: "Zero Disruption Metrics",
    description:
      "Guarantees uninterrupted service usage, ensuring key performance and subscription retention metrics remain completely unaffected.",
  },
  {
    title: "Capex-Free Monetization",
    description:
      "Maximizes Average Revenue Per User (ARPU) through a strategic revenue-sharing model with zero upfront capital expenditure.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full bg-[#EDF4FD] py-20 px-4">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <span className="inline-block bg-[#D43429] text-white text-[16px] rounded-md font-medium font-ibm-plex-sans uppercase px-4 py-2 mb-6">
            PORTFOLIO
          </span>
          <h2 className="text-[42px] md:text-[52px] font-normal font-serif text-[#0D0D0D] leading-[1.1] mb-5">
            Real projects. Real impact.
          </h2>
          <p className="text-[16px] text-[#444] leading-relaxed max-w-[540px]">
            Discover the platforms, products, and communication solutions
            we&apos;ve designed to help businesses connect, collaborate, and
            grow in a digital-first world.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6"
        >
          {/* TicketonMobile */}
          <motion.article
            variants={itemVariants}
            className="group rounded-2xl bg-[#0D2340] p-8 md:p-10 text-white transition-shadow duration-300 hover:shadow-xl md:flex md:items-start md:gap-10"
          >
            <div className="flex items-center gap-4 mb-6 md:mb-0 md:flex-col md:items-center md:gap-3 md:shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#1a3a5c] flex items-center justify-center text-[15px] font-semibold text-[#a8c4e0]">
                1
              </div>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#38BDF8] md:text-center md:max-w-[72px] md:leading-tight">
                Mobile Ticketing
              </span>
            </div>
            <div>
              <h3 className="text-[22px] md:text-[26px] font-normal font-serif leading-snug mb-4">
                TicketonMobile – Advanced AI Mobile Ticketing Solutions
              </h3>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-[#a8bdd4] max-w-[900px]">
                An intelligent mobile ticketing platform that leverages AI to
                streamline ticket sales, validation, and event management. The
                solution enhances customer experience through secure digital
                ticketing, real-time analytics, fraud prevention, and seamless
                mobile access for events, transportation, and entertainment
                services.
              </p>
            </div>
          </motion.article>

          {/* TeleCredit */}
          <motion.article
            variants={itemVariants}
            className="rounded-2xl overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            {/* Intro band */}
            <div className="bg-[#082241] px-8 md:px-12 py-10 md:py-12 md:flex md:gap-10 md:items-start">
              <div className="md:flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#1a3a5c] flex items-center justify-center text-[15px] font-semibold text-[#a8c4e0] shrink-0">
                  2
                </div>
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#38BDF8]">
                  Enterprise Fintech
                </span>
              </div>

              <h3 className="text-[26px] md:text-[34px] font-normal font-serif text-white leading-[1.15] mb-5 max-w-[820px]">
                TeleCredit: Enterprise Airtime Credit Management Platform
              </h3>
              <p className="text-[14px] md:text-[16px] leading-relaxed text-[#a8bdd4] max-w-[780px] mb-8 md:mb-0">
              TeleCredit is a comprehensive airtime credit lending administration platform that enables telecom operators and service providers to manage 
              airtime loan services efficiently. The solution automates credit issuance, repayment tracking, customer eligibility assessment,
               and reporting.


              </p>
              </div>

              <div className="md:w-[42%] md:shrink-0 rounded-xl border border-white/10 bg-[#0D2340]/80 p-6 md:p-8 mt-2 md:mt-0">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#38BDF8] mb-3">
                  Real-Time In-Session Credit Lending (RISCL)
                </p>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-white/85">
                  A cutting-edge financial solution that allows platforms to
                  instantly evaluate, approve, and disburse credit to users
                  directly within their active digital sessions. By eliminating
                  the friction of traditional, delayed loan applications, RISCL
                  enables seamless embedded finance—such as Buy Now, Pay Later
                  (BNPL)—precisely at the moment of a transaction.
                </p>
              </div>
            </div>

            {/* Capabilities */}
            <div className="px-8 md:px-12 py-10 md:py-12 border-t border-[#EDF4FD]">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D43429] mb-8">
                Core Capabilities
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9">
                {teleCreditFeatures.map((feature, index) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#DAE8FB] flex items-center justify-center text-[13px] font-semibold text-[#082241] shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-normal text-[#0D0D0D] mb-2 leading-snug">
                        {feature.title}
                      </h4>
                      <p className="text-[13px] text-[#555] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}

export default PortfolioSection;
