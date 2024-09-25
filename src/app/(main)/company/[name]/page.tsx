import React from "react";
import { data } from "../dummy";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import { notFound } from "next/navigation";
import prisma from "@/lib/db";
// import { getCompanyBySlug } from "@/actions/job.action";

const page = async ({
  params,
}: {
  params: {
    name: string;
  };
}) => {
  // TODO:
  // search for that company if found render
  // if not you

  if (!params.name) return notFound();

  const company = await prisma.company.findUnique({
    where: {
      slug: params.name,
    },
  });

  if (!company) return notFound();

  return (
    <section className="flex flex-col px-5 py-5 gap-5">
      <Navbar />
      <div key={"index"}>
        <div className="p-1">
          <Card>
            <CardContent className="flex  aspect-video items-center justify-center p-6">
              <span className="text-4xl font-semibold">
                <Image
                  src={company.logo as string}
                  alt="company logo"
                  width={80}
                  height={80}
                />
              </span>
            </CardContent>
          </Card>
          <div className="p-2">
            <h1 className="text-2xl font-semibold">{company.name}</h1>
            <div className="flex text-xs opacity-75 gap-3">
              <p>{company.industry}</p>
              {/* <p>{company.}+ Employees</p> */}
              <p>{company.location}</p>
            </div>
            <p>{company.overview}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold">All jobs</h3>
        {data.map((_, index) => (
          <div className="flex items-center border-2 rounded-sm px-4 py-2 justify-between" key={index}>
            <div>
              <h3 className="text-[18px] font-semibold  ">{_.jobs}</h3>
              <p className="text-xs opacity-75 -mt-1">{_.skills}</p>
            </div>
            <div className="h-14 w-20 rounded-md border-2 grid place-content-center">
              <Image
                src={company.logo as string}
                alt="company logo"
                width={60}
                height={60}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
