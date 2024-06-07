import React from "react";
import { IoIosOptions } from "react-icons/io";
import { Button } from "./ui/button";
import { FaAngleDown } from "react-icons/fa";

const MainFilter = () => {
  return (
    <section className="flex items-center gap-1 justify-start w-screen mt-4">
      <Button variant={"outline"} className="flex items-center gap-1">
        <IoIosOptions />
        Filter
      </Button>
      <Button variant={"outline"}>Remote</Button>
      <Button variant={"outline"}>Location</Button>
      <Button variant={"outline"} className="flex items-center gap-1">
        Within 10kms
        <FaAngleDown />
      </Button>
      <Button variant={"outline"} className="flex items-center gap-1">
        Skills
        <FaAngleDown />
      </Button>
    </section>
  );
};

export default MainFilter;
