import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Array of job data
const jobData = [
  {
    img: "/languages/figma.png",
    jobTitle: "Microsoft",
    salary: 75000,
    pincode: "560001",
  },
  {
    img: "/languages/figma.png",
    jobTitle: "Data Analyst",
    salary: 65000,
    pincode: "110001",
  },
  {
    img: "/languages/figma.png",
    jobTitle: "Product Manager",
    salary: 90000,
    pincode: "400001",
  },
  {
    img: "/languages/figma.png",
    jobTitle: "Graphic Designer",
    salary: 50000,
    pincode: "600001",
  },
  {
    img: "/languages/figma.png",
    jobTitle: "Marketing Specialist",
    salary: 55000,
    pincode: "700001",
  },
  {
    img: "/languages/figma.png",
    jobTitle: "Sales Executive",
    salary: 45000,
    pincode: "500001",
  },
  {
    img: "/languages/figma.png",
    jobTitle: "Human Resources Manager",
    salary: 80000,
    pincode: "302001",
  },
  {
    img: "/languages/figma.png",
    jobTitle: "Financial Analyst",
    salary: 85000,
    pincode: "380001",
  },
  {
    img: "/languages/figma.png",
    jobTitle: "Web Developer",
    salary: 72000,
    pincode: "560076",
  },
];

export default function Caraousal() {
  return (
    <div className="w-full max-h-full flex items-center justify-center">
      <Carousel className=" w-96">
        <CarouselContent>
          {jobData.map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex  aspect-video items-center justify-center p-6">
                    <span className="text-4xl font-semibold">
                      <Link href="/company/lkajsdf" key={index}>
                        <Image
                          src={_.img}
                          alt="company logo"
                          width={80}
                          height={80}
                        />
                      </Link>
                    </span>
                  </CardContent>
                </Card>
                <div className="p-2">
                  <h1 className="text-2xl font-semibold">{_.jobTitle}</h1>
                  <div className="flex text-xs opacity-75 gap-3">
                    <p>Software Development</p>
                    <p>1200+ Employees</p>
                    <p>WashingTon</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
