import LogoutBtn from "@/components/client/logout-btn";
import Navbar from "@/components/navbar";
import { auth } from "@/lib/auth";
import React from "react";

const page = async () => {
  const session = await auth();
  return (
    <div>
      <Navbar />
      {session?.user?.email}
      <LogoutBtn/>
    </div>
  );
};

export default page;
