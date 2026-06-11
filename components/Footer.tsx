"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { logo, logo2 } from "@/constant";

function Footer() {
  return (
    <footer className="w-full bg-[#020912]">
      {/* Main footer content */}
      <div className="max-w-[1300px] mx-auto px-6 pt-16 pb-16">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
          {/* Left: Logo + Description */}
          <div className="md:w-[35%]">
            <div className="flex items-center gap-2 mb-5">
              <Image
                src={logo}
                alt="TeleMagic Logo"
                width={170}
                height={170}
                className="object-contain"
              />
            </div>
            <p className="text-[14px] text-[#CAC7B1] leading-relaxed max-w-[320px]">
              Telemagic Group is committed to delivering fast, efficient
              capabilities to its customers in an easy-to-use suite of product
              offerings, designed to fit the needs of any application.
            </p>
          </div>

          {/* Middle: Address */}
          <div className="md:w-[25%]">
            <h4 className="text-[12px] font-medium tracking-widest text-white uppercase mb-4">
              ADDRESS:
            </h4>
            <p className="text-[14px] text-[#CAC7B1] leading-relaxed">
              Plot C1B, 5th Avenue,
              <br />
              Banana Island, Lagos
            </p>
          </div>

          {/* Right: Contact Information */}
          <div className="md:w-[30%]">
            <h4 className="text-[12px] font-medium tracking-widest text-white uppercase mb-4">
              CONTACT INFORMATION
            </h4>
            <div className="flex flex-col gap-1 text-[14px] text-[#CAC7B1]">
              {/* <p>Phone: 234 8027338559&nbsp;&nbsp;Fax: 234 1 2798950</p> */}
              <p>
                Email:{" "}
                <a
                  href="mailto:info@telemagicgroup.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@telemagicgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6">
          <p className="text-center text-[13px] text-[#CAC7B1] tracking-wide font-mono">
            ©2026 Telemagic. All rights reserved.
          </p>
        </div>
      </div>

      {/* Large watermark text */}
      {/* <div className="w-full overflow-hidden select-none pointer-events-none">
        <p
          className="text-center font-semibold font-serif leading-none whitespace-nowrap"
          style={{
            fontSize: "clamp(60px, 14vw, 180px)",
            letterSpacing: "-0.02em",
            background: "linear-gradient(90deg, #061B37 0%, #114D9D 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          TELEMAGIC.
        </p>
      </div> */}
    </footer>
  );
}

export default Footer;
