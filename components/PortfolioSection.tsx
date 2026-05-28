"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "TicketonMobile – Advanced AI Mobile Ticketing Solutions",
    description:
      "An intelligent mobile ticketing platform that leverages AI to streamline ticket sales, validation, and event management. The solution enhances customer experience through secure digital ticketing, real-time analytics, fraud prevention, and seamless mobile access for events, transportation, and entertainment services.",
    dark: true,
  },
  {
    id: 2,
    title: "TeleCredit – Enterprise Airtime Credit Lending Platform",
    description:
      "TeleCredit is a comprehensive airtime credit lending administration platform that enables telecom operators and service providers to manage airtime loan services efficiently. The solution automates credit issuance, repayment tracking, customer eligibility assessment, and reporting.",
    dark: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
            Discover the platforms, products, and communication solutions we've
            designed to help businesses connect, collaborate, and grow in a
            digital-first world.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {projects.map((project) => (
            <motion.div
              variants={itemVariants}
              key={project.id}
              className={`rounded-xl p-8 flex flex-col gap-8 transition-shadow duration-200 hover:shadow-md ${
                project.dark
                  ? "bg-[#0D2340] text-white"
                  : "bg-white text-[#0D0D0D]"
              }`}
            >
              {/* Number Badge */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-[16px] font-semibold ${
                  project.dark
                    ? "bg-[#1a3a5c] text-[#a8c4e0]"
                    : "bg-[#DAE8FB] text-[#082241]"
                }`}
              >
                {project.id}
              </div>

              {/* Title + Description */}
              <div>
                <h3
                  className={`text-[20px] font-normal mb-4 leading-snug ${
                    project.dark ? "text-white" : "text-[#0D0D0D]"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-[14px] leading-relaxed ${
                    project.dark ? "text-[#a8bdd4]" : "text-[#555]"
                  }`}
                >
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default PortfolioSection;
