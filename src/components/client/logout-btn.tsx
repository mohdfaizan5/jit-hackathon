"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOutAction } from "@/actions/auth.action";

const LogoutBtn = () => {
  return (
    <Button
      onClick={async () => {
        await signOutAction();
      }}
      variant={"destructive"}
    >
      Logout
    </Button>
  );
};

export default LogoutBtn;
