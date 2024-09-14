import HeroSection3 from "@/components/landingpage/hero-section";
import Navbar from "@/components/landingpage/navbar";
import { Testimonials3 } from "@/components/landingpage/testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection3 />
      <Testimonials3 />
    </div>
  );
};

export default page;
