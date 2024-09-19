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
import AdvancedFilterSystem from "./advanced-filter-system";
import { cn } from "@/lib/utils";

const SortingButton = ({ className }: { className?: string }) => {

  return (
    <div className={cn("", className)}>
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
              <AdvancedFilterSystem />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SortingButton;
