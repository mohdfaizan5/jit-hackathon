import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { jobData } from "@/registry/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
