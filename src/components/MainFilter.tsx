import React from "react";
import { IoIosOptions } from "react-icons/io";
import { Button } from "./ui/button";
import { FaAngleDown } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const MainFilter = () => {
  return (
    <section className="flex items-center gap-1 justify-start w-screen mt-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"} className="flex items-center gap-1">
            <IoIosOptions />
            Filter
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {/* <Button variant={"outline"}>Location</Button> */}
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Job near me" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10">Within 5-10kms</SelectItem>
          <SelectItem value="dark">10-20kms</SelectItem>
          <SelectItem value="system">Ok to relocate</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Job Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Full time</SelectItem>
          <SelectItem value="dark">Internships</SelectItem>
          <SelectItem value="system">Fresher</SelectItem>
          <SelectItem value="system">Part time</SelectItem>
        </SelectContent>
      </Select>

      {/* popup */}

      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"} className="flex items-center gap-1">
            Skills
            {/* <FaAngleDown /> */}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"} className="flex items-center gap-1">
            Domain
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Domains</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MainFilter;
