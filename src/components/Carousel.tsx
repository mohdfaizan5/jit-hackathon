import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

// Array of job data
const jobData = [
  { jobTitle: "Software Engineer", salary: 75000, pincode: "560001" },
  { jobTitle: "Data Analyst", salary: 65000, pincode: "110001" },
  { jobTitle: "Product Manager", salary: 90000, pincode: "400001" },
  { jobTitle: "Graphic Designer", salary: 50000, pincode: "600001" },
  { jobTitle: "Marketing Specialist", salary: 55000, pincode: "700001" },
  { jobTitle: "Sales Executive", salary: 45000, pincode: "500001" },
  { jobTitle: "Human Resources Manager", salary: 80000, pincode: "302001" },
  { jobTitle: "Financial Analyst", salary: 85000, pincode: "380001" },
  { jobTitle: "Web Developer", salary: 72000, pincode: "560076" },
  { jobTitle: "IT Support Specialist", salary: 48000, pincode: "122001" },
  { jobTitle: "Content Writer", salary: 40000, pincode: "411001" },
  { jobTitle: "Business Analyst", salary: 78000, pincode: "560034" },
  { jobTitle: "Operations Manager", salary: 87000, pincode: "390001" },
  { jobTitle: "UX/UI Designer", salary: 67000, pincode: "700091" },
  { jobTitle: "Digital Marketing Executive", salary: 53000, pincode: "600096" },
];



export default function Caraousal() {
  return (
    <div className="w-full max-h-full flex items-center justify-center">
      <Carousel className="w-full  max-w-80">
        <CarouselContent>
          {jobData.map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex  aspect-video items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
                <div className="p-2">
                  <h1 className="text-2xl font-semibold">{_.jobTitle}</h1>
                  <p>
                    {_.pincode} | {_.salary}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}