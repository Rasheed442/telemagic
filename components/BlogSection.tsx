"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { img1, img2, img3 } from "@/constant";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    image: img1, // replace with your actual image paths
    excerpt: "Transforming conventional practices into sustainable solutions.",
    readTime: "3 min ago",
    href: "/blog/transforming-conventional-practices",
  },
  {
    id: 2,
    image: img2,
    excerpt: "Balancing development with environmental preservation.",
    readTime: "3 min ago",
    href: "/blog/balancing-development",
  },
  {
    id: 3,
    image: img3,
    excerpt: "The long-term value of responsible growth and green innovation.",
    readTime: "3 min ago",
    href: "/blog/responsible-growth",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function BlogSection() {
  return (
    <section id="blogs" className="w-full bg-white py-20 px-4">
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
            OUR BLOG
          </span>
          <h2 className="text-[42px] md:text-[52px] font-normal font-serif text-[#0D0D0D] leading-[1.1] mb-4">
            Resources &amp; Insights
          </h2>
          <p className="text-[16px] text-[#444] leading-relaxed max-w-[460px]">
            Insights, trends, and expert perspectives on modern business
            communication.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {posts.map((post) => (
            <motion.div
              variants={itemVariants}
              key={post.id}
              className="relative flex flex-col mb-12 md:mb-0"
              style={{ minHeight: "420px" }}
            >
              {/* Full-bleed image */}
              <div
                className="relative w-full flex-1 rounded-xl overflow-hidden"
                style={{ minHeight: "420px" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={post.image}
                    alt={post.excerpt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
              </div>

              {/* Bottom white card overlay */}
              <div className="absolute -bottom-[30px] left-0 right-0 mx-3 mb-3 bg-white shadow-lg rounded-xl px-5 py-4 ">
                <p className="text-[15px] text-[#212D10] font-medium leading-snug mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href={post.href}
                    className="flex items-center gap-1 text-[15px] font-medium text-[#0D0D0D] hover:text-[#D43429] transition-colors duration-200"
                  >
                    Read post
                    <FiArrowUpRight />
                  </Link>
                  <span className="text-[13px] text-[#888]">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default BlogSection;
