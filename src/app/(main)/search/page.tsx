import { getCompaniesByKey } from "@/actions/job.action";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/search-bar";
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
          <div className="flex items-center gap-3 ">
            <div className="h-[50px] w-[50px] shadow-sm rounded-md border-2">
              <Image
                width={50}
                height={50}
                alt={company.name}
                src={company.logo as string}
              />
            </div>
            <div className="flex flex-col  ">
              <h3 className="font-semibold ">{company.name}</h3>
              <div className="flex items-center gap-3">
                <p className="text-[13px] opacity-75 font-light">
                  {company.industry}
                </p>
                <p className="text-[13px] opacity-75 font-light">
                  {company.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default page;
