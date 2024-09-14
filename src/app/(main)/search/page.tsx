import { getCompaniesByKey } from "@/actions/job.action";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/search-bar";
import SearchCompanies from "@/components/search-companies";
import Image from "next/image";
import React from "react";

const page = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: { [q: string]: string | string[] | undefined };
}) => {
  const companies = await getCompaniesByKey({
    query: searchParams.q as string,
  });

  return (
    <div className="flex flex-col px-5 py-3 gap-5">
      <Navbar />
      <span className="mt-2" />
      <SearchBar />
      <section className="flex flex-col px-5 py-3 gap-5">
        {companies.map((company, index) => (
          //  TODO: Make it reusable, component (good to have: also this component should accept className and change styles)
          <SearchCompanies company={company} index={index} />
        ))}
      </section>
    </div>
  );
};

export default page;
