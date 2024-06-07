import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex md:w-screen items-center justify-center md:min-h-screen md:gap-20">
      <form
        className=""
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button className="flex items-center gap-3" variant={"outline"}>
          <FaGithub size={24}/>
          Login with Github
        </Button>
      </form>
      <div className="">
        <Image
          src={"/imgs/job_hunt_re_q203.svg"}
          width={200}
          height={200}
          alt="Job searching"
        />
      </div>
    </div>
  );
};

export default page;
