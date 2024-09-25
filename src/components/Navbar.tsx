import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Logo from "./landingpage/logo";
export default function Navbar() {
  return (
    <header className="flex items-center justify-between  border-b pb-3">
      <div className="flex items-center ">
        <Logo />
        <div>{/* <IoLocationOutline size={32} /> */}</div>
        <div className="ml-1">
          <h3 className="text-[18px] mb-0">Home</h3>
          <p className="text-xs -mt-2">Kormangala</p>
        </div>
      </div>
      <Link href={"/profile"}>
        <Avatar>
          <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQHz30r9LyJ9gw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694761423535?e=1731542400&v=beta&t=OwwwpsrdfSnoIDQpu3asKIibAC0t5O5UzM-544enUuk" />
          <AvatarFallback className="border-2 border-black">LN</AvatarFallback>
        </Avatar>
      </Link>
    </header>
  );
}

