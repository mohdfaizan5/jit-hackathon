// "use client";
import SearchBar from "@/components/search-bar";
import CompanyCarousel from "@/components/company-carousel";
import React from "react";
import Navbar from "@/components/navbar";

import CompanyCards from "@/components/company-cards";
import SortingButton from "@/components/sorting-button";
import { getCompaniesByKey } from "@/actions/job.action";
import { auth } from "@/lib/auth";

const page = async () => {
  const company = await getCompaniesByKey({ query: "" });
  console.log(company);
  const session = await auth()
  console.log(session)
  return (
    <div className=" py-3 space-y-2 px-5">
      <Navbar />
      <SearchBar />
      <SortingButton />
      <CompanyCarousel companies={company} />
      <CompanyCards />
    </div>
  );
};

export default page;
