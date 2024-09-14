import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

function CompanyCards() {
  const programmingLanguages = [
    {
      src: "/languages/python.png",
      title: "Gaming",
    },
    {
      src: "/languages/js.png",
      title: "Business Software",
    },
    {
      src: "/languages/typescript.png",
      title: "Home and Education",
    },
    {
      src: "/languages/figma.png",
      title: "Developer Tools",
    },
    {
      src: "/languages/java.png",
      title: "IT Services and IT Consultant",
    },
    {
      src: "/languages/figma.png",
      title: "Business Consultant and services",
    },
    {
      src: "/languages/java.png",
      title: "Computer hardware manufacturing",
    },
    {
      src: "/languages/java.png",
      title: "Entertainment Providers",
    },
  ];

  // "software dev, it, bfsi".split(",")

  return (
    <section className="">
      <h1 className="text-center text-2xl mt-10 mb-2">
        What are you looking for
      </h1>
      <section className="grid py-5 gap-5 grid-cols-3 grid-rows-3 mx-auto w-96">
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
      <h3 className="text-xs font-light text-pretty text-center capitalize">
        {title}
      </h3>
    </div>
  );
};
export default CompanyCards;
