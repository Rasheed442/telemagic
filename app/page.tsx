import About from "@/components/About";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnersSection from "@/components/Partnersection";
import PortfolioSection from "@/components/PortfolioSection";
import ProductsSection from "@/components/ProductsSection";
import { herobg } from "@/constant";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        id="home"
        className="md:h-full h-full lg:h-[100vh]  bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${herobg.src})` }}
      >
        <Header />
        <Hero />
      </div>
      <About />
      <ProductsSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
