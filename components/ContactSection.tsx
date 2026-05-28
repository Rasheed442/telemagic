"use client";
import { contactbg } from "@/constant";
import React, { useState } from "react";
import { motion } from "framer-motion";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", form);
    // Add your submission logic here
  };

  return (
    <section id="contact" className="w-full bg-[#EDF4FD] py-16 px-4">
      <div className="max-w-[1300px] mx-auto">
        {/* Card with background image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
          style={{ minHeight: "580px" }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${contactbg.src})` }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0D2340]/80" />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row gap-12 p-10 md:p-14">
            {/* Left: Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-[40%] flex flex-col gap-6"
            >
              <span className="inline-block bg-[#D43429] text-white text-[15px] rounded-md font-medium font-ibm-plex-sans uppercase px-4 py-2 w-fit">
                CONTACT US
              </span>
              <h2 className="text-[38px] md:text-[44px] font-normal font-serif text-white leading-[1.15]">
                Feel free to contact with us
              </h2>
              <p className="text-[15px] text-[#a8bdd4] leading-relaxed">
                Reach out to our team for inquiries, support, or a personalized
                consultation.
              </p>

              {/* Contact Details */}
              <div className="flex flex-col gap-6 mt-4">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a3a5c] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="#38BDF8"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest text-[#a8bdd4] uppercase mb-1">
                      Office Address
                    </p>
                    <p className="text-[14px] text-white leading-relaxed">
                      Plot C1B, 5th Avenue, Banana Island, Lagos
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a3a5c] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
                        fill="#38BDF8"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest text-[#a8bdd4] uppercase mb-1">
                      Phone &amp; Fax
                    </p>
                    <p className="text-[14px] text-white">
                      Phone: 234 8027338559
                    </p>
                    <p className="text-[14px] text-white">Fax: 234 12798950</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a3a5c] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                        fill="#38BDF8"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest text-[#a8bdd4] uppercase mb-1">
                      Email
                    </p>
                    <p className="text-[14px] text-white">
                      info@telemagicgroup.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:w-[60%] flex flex-col gap-5"
            >
              {/* Name */}
              <div>
                <label className="block text-[12px] font-semibold tracking-widest text-white uppercase mb-2">
                  NAME:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-[15px] outline-none focus:border-white/50 transition-colors backdrop-blur-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[12px] font-semibold tracking-widest text-white uppercase mb-2">
                  EMAIL:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-[15px] outline-none focus:border-white/50 transition-colors backdrop-blur-sm"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[12px] font-semibold tracking-widest text-white uppercase mb-2">
                  PHONE NUMBER:
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-[15px] outline-none focus:border-white/50 transition-colors backdrop-blur-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[12px] font-semibold tracking-widest text-white uppercase mb-2">
                  MESSAGE:
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-[15px] outline-none focus:border-white/50 transition-colors backdrop-blur-sm resize-none"
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full bg-white text-[#0D2340] text-[14px] font-semibold tracking-widest uppercase py-4 rounded-full hover:bg-[#EDF4FD] transition-colors duration-200 cursor-pointer"
              >
                SEND MESSAGE
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
