import LogoutBtn from "@/components/client/logout-btn";
import Navbar from "@/components/navbar";
import UpdateForPro from "@/components/update-for-pro";
import { auth } from "@/lib/auth";
import React from "react";

const page = async () => {
  const session = await auth();
  return (
    <div >
      <Navbar />
      <main className="flex flex-col px-5 items-start justify-center min-h-[50vh]">
        <div className="flex justify-between w-full items-baseline">
          <h3>
            {session?.user?.email?.split('@')[0]}
          </h3>
          <LogoutBtn />
        </div>
        <p className="opacity-80 mb-10">
          {session?.user?.email}
        </p>

        {session?.user.isPremium ?
          <p>Your a Premium user 🔥</p>
          : <UpdateForPro />}

      </main>
    </div>
  );
};

export default page;
