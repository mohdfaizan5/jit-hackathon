import { fetchCompanies, getCompaniesByKey } from "@/actions/job.action";
import Navbar from "@/components/navbar-app";
import SearchBar from "@/components/search-bar";
import CompanyCardSearchCard from "@/components/search-companies";
import SortingButton from "@/components/sorting-button";
import { Badge } from "@/components/ui/badge";
import React from "react";

const page = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {


  console.log("💲💲", searchParams)
  const companies = await fetchCompanies(searchParams)
  // console.log("💲💲", companies)


  return (
    <div className="flex flex-col px-5 py-3 gap-3">
      <Navbar />
      <SortingButton />

      <SearchBar />
      <div className="space-x-1">
        {searchParams.industry && (<Badge variant={"secondary"}>{searchParams.industry}</Badge>)}
        {searchParams.city && (<Badge variant={"secondary"}>{searchParams.city}</Badge>)}
        {searchParams.speciality && (<Badge variant={"secondary"}>{searchParams.jobType}</Badge>)}
        {searchParams.company_size && (<Badge variant={"secondary"}>{searchParams.company_size}</Badge>)}
        {searchParams.technology && (<Badge variant={"secondary"}>{searchParams.technology}</Badge>)}

      </div>
      <section className="flex flex-col px-5 py-3 gap-5">
        {companies.map((company, i) => (
          <CompanyCardSearchCard company={company} key={i} />
          //  TODO: Make it reusable, component (good to have: also this component should accept className and change styles)
        ))}
      </section>
    </div>
  );
};

export default page;
