import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

function CompanyCards() {
  const programmingLanguages = [
    {
      src: "/languages/python.png",
      title: "Python",
    },
    {
      src: "/languages/js.png",
      title: "JavaScript",
    },
    {
      src: "/languages/typescript.png",
      title: "TypeScript",
    },
    {
      src: "/languages/figma.png",
      title: "Figma",
    },
    {
      src: "/languages/java.png",
      title: "Java",
    },
    {
      src: "/languages/figma.png",
      title: "Figma",
    },
    {
      src: "/languages/java.png",
      title: "Java",
    },
  ];
  const data = [
    {
      img: "/imgs/preview.svg",
      title: "Software Engineer",
      location: "Bangalore",
      salary: "75000",
    },
    {
      img: "/imgs/preview.svg",
      title: "Data Analyst",
      location: "Delhi",
      salary: "65000",
    },
  ];
  return (
    <section>
      <h1 className="text-xl text-center font-bold ">
        What are you looking for
      </h1>
      <section className="flex py-5 gap-7 flex-wrap mx-auto w-96">
        {programmingLanguages.map(({ src, title }) => (
          <EachLanguageContainer title={title} src={src} key={src} />
        ))}
      </section>
    </section>
  );
}
const EachLanguageContainer = ({
  src,
  title,
}: {
  src: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col  items-center gap-2">
      <Image
        className="rounded-full shadow-2xl object-center object-contain hover:shadow-black/20 hover:shadow-lg size-14 "
        src={src}
        width={100}
        height={100}
        alt="javascript icon"
      />
      <h3 className="text-xs font-extralight capitalize">{title}</h3>
    </div>
  );
};
export default CompanyCards;
