import Navbar from "@/components/navbar";
import SearchBar from "@/components/search-bar";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col px-5 py-3 gap-5">
      <Navbar />
      <span className="mt-2"/>
      <SearchBar />
      <section className="flex flex-col px-5 py-3 gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="flex items-center gap-3 ">
            <div className="h-[50px] w-[50px] shadow-sm rounded-md border-2"></div>
            <div className="flex flex-col  ">
              <h1 className="font-bold">Microsoft</h1>
              <p className="text-sm font-light">Softwware Developer</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default page;
