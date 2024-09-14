import prisma from "@/lib/db";
import React from "react";
import { data } from "../dummy";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const page = ({
  params,
}: {
  params: {
    name: string;
  };
}) => {
  return (
    <section className="flex flex-col px-5 py-5 gap-5">
      <div key={"index"}>
        <div className="p-1">
          <Card>
            <CardContent className="flex  aspect-video items-center justify-center p-6">
              <span className="text-4xl font-semibold">
                <Image
                  src={
                    "https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_200_200/company-logo_200_200/0/1630652622688/microsoft_logo?e=1734566400&v=beta&t=uv94dpjRmoOV5iqqIi-TdxYHFBVhNyhkdlIuV0oYQdo"
                  }
                  alt="company logo"
                  width={80}
                  height={80}
                />
              </span>
            </CardContent>
          </Card>
          <div className="p-2">
            <h1 className="text-2xl font-semibold">{params.name}</h1>
            <div className="flex text-xs opacity-75 gap-3">
              <p>{"_.industry"}</p>
              <p>1200+ Employees</p>
              <p>{"_.location"}</p>
            </div>
            <p>
              Every company has a mission. What's ours? To empower every person
              and every organization to achieve more. We believe technology can
              and should be a force for good and that meaningful innovation
              contributes to a brighter world in the future and today. Our
              culture doesn’t just encourage curiosity; it embraces it. Each day
              we make progress together by showing up as our authentic selves.
              We show up with a learn-it-all mentality.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-[30px] font-semibold">All jobs</h2>
        {data.map((_, index) => (
          <div className="flex border-2 rounded-sm px-4 py-3 justify-between">
            <div>
              <h3 className="text-xl font-semibold  ">{_.jobs}</h3>
              <h4 className="text-sm">{_.skills}</h4>
            </div>
            <div className="h-14 w-20 rounded-md border-2 grid place-content-center">
              <Image src={_.images} alt="company logo" width={80} height={80} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
