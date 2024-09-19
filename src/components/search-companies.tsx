import { Company } from "@prisma/client";
import Image from "next/image";
import React from "react";

function CompanyCardSearchCard({ company }: { company: Company }) {
  return (
    <div>
      <div className="flex items-center gap-3 ">
        <div className="h-[50px] w-[50px] shadow-sm rounded-md border-2 flex flex-col items-center justify-center">
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
    </div>
  );
}

export default CompanyCardSearchCard;
