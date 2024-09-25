import HeroSection3 from "@/components/landingpage/hero-section";
import Navbar from "@/components/landingpage/navbar";
import { Testimonials3 } from "@/components/landingpage/testimonials";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth()
  if (session?.user) redirect("/app")
  return (
    <div>
      <Navbar />
      <HeroSection3 />
      <Testimonials3 />
    </div>
  );
};

export default page;
