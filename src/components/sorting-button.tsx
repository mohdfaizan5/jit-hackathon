import React from "react";
import { BsSortAlphaDown } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SortingButton = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button size={"sm"} className="scale-75">
            <BsSortAlphaDown />
            Sort
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Filter</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="account" className="w-[400px] flex">
                <TabsList className="flex flex-col items-stretch h-full text-left">
                  <TabsTrigger value="industry">Industry</TabsTrigger>
                  <TabsTrigger value="companySize">Company Size</TabsTrigger>
                  <TabsTrigger value="speciality">Speciality</TabsTrigger>
                  <TabsTrigger value="city">City</TabsTrigger>
                  <TabsTrigger value="technology">Technology</TabsTrigger>
                </TabsList>
                <TabsContent value="industry"  className="p-2">
                  Make changes to your account here.
                </TabsContent>
                <TabsContent value="companySize" className="p-2">
                  companySize Change your password here.
                </TabsContent>
                <TabsContent value="speciality" className="p-2">
                  speciality Change your password here.
                </TabsContent>
                <TabsContent value="city" className="p-2">
                  city Change your password here.
                </TabsContent>
                <TabsContent value="technology" className="p-2">
                  technology Change your password here.
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SortingButton;
