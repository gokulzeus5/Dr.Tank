import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Packages from "@/components/Packages";
import ServiceLocations from "@/components/ServiceLocations";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomCTA from "@/components/MobileBottomCTA";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* SECTION 01 – NAVIGATION BAR */}
      <Navbar />

      <main className="flex-grow">
        {/* SECTION 02 – HERO SECTION */}
        <Hero />

        {/* SECTION 03 – INTRODUCTION / ABOUT DR. TANK */}
        <About />

        {/* SECTION 04 – OUR SERVICES */}
        <Services />

        {/* SECTION 05 – WHY CHOOSE DR. TANK? */}
        <WhyChooseUs />

        {/* SECTION 06 – OUR WORK / GALLERY */}
        <Gallery />

        {/* SECTION 07 – OUR SERVICE PACKAGES */}
        <Packages />

        {/* SECTION 08 – SERVICE LOCATIONS */}
        <ServiceLocations />

        {/* SECTION 09 – FAQ */}
        <FAQ />

        {/* SECTION 10 – BOOK YOUR SERVICE */}
        <BookingForm />

        {/* SECTION 11 – CONTACT SECTION */}
        <Contact />
      </main>

      {/* SECTION 12 – FOOTER */}
      <Footer />

      {/* FLOATING ACTION ELEMENTS */}
      <FloatingWhatsApp />
      <MobileBottomCTA />
    </div>
  );
}
