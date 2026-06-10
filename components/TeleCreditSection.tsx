"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Value-Added Services (VAS) Aggregation",
    description:
      "A robust platform that enables telecom operators and content providers to launch, manage, and monetize mobile Value-Added Services, enhancing customer engagement and generating new revenue streams.",
  },
  {
    id: 2,
    title: "VAS Gateway Aggregation",
    description:
      "A centralized integration gateway that seamlessly connects content providers, SMSC systems, USSD channels, and billing platforms, ensuring secure and efficient service delivery.",
  },
  {
    id: 3,
    title: "Revenue Assurance",
    description:
      "An intelligent monitoring solution designed to detect revenue leakages, prevent fraud, and improve billing accuracy, helping organizations maximize profitability and operational efficiency..",
  },
  {
    id: 4,
    title: "Deployment of Fintech & VAS Services",
    description:
      "End-to-end implementation of innovative fintech and mobile value-added solutions, enabling businesses to deliver secure digital payments, financial services, and mobile content experiences.",
  },
  {
    id: 5,
    title: "Deployment of Government VAS Services",
    description:
      "Specialized deployment of mobile and digital service platforms that help government agencies improve citizen engagement, information dissemination, and public service delivery.",
  },
  {
    id: 6,
    title: "(PaaS) – Telecom Connectivity Services",
    description:
      "A scalable telecom connectivity platform that provides businesses and developers with reliable access to messaging, USSD, billing, and mobile network infrastructure through a unified service environment.",
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
    <section id="products" className="w-full bg-white py-20 md:py-28 px-4">
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
          <h2 className="text-[36px] md:text-[52px] font-normal font-serif text-[#0D0D0D] leading-[1.1] mb-6 max-w-[900px]">
           Enterprise Airtime Credit Management Platform
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#444] leading-relaxed max-w-[720px]">
            An enterprise-grade platform engineered for
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
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              variants={itemVariants}
              key={feature.id}
              className="bg-[#EDF4FD] rounded-xl p-7 flex flex-col gap-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-[#DAE8FB] flex items-center justify-center text-[16px] font-semibold text-[#082241]">
                {feature.id}
              </div>
              <div>
                <h3 className="text-[17px] font-normal text-[#0D0D0D] mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-[#555] leading-relaxed">
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
