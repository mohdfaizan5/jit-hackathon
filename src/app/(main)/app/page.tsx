"use client";
import SearchBar from "@/components/search-bar";
import Caraousal from "@/components/Carousel";
import React from "react";
import CompanyCards from "@/components/CompanyCards";
import Navbar from "@/components/Navbar";
import SortBy from "@/components/Sort";

const page = () => {
  return (
    <div className=" py-3 space-y-2 px-5">
      <Navbar />
      <SearchBar />
      <SortBy />
      <Caraousal />
      <CompanyCards />
      {/* <section className="border w-24 flex justify-center py-2 ">
        <button onClick={()=>alert('Sorting tabs')} className="flex items-center gap-2">
        <GrSort  />
          <p className="text-sm">Sort by</p>
        </button>
      </section> */}
    </div>
  );
};

export default page;
