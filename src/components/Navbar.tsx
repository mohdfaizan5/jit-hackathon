import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
function Navbar() {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center ">
        <div>
          <IoLocationOutline size={32} />
        </div>
        <div className="ml-1">
          <h3 className="text-[18px]">Home</h3>
          <p className="text-xs leading-2">Kormangala</p>
        </div>
      </div>
      <Link href={"/profile"}>
        <Avatar>
          <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQHz30r9LyJ9gw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694761423535?e=1731542400&v=beta&t=OwwwpsrdfSnoIDQpu3asKIibAC0t5O5UzM-544enUuk" />
          <AvatarFallback className="border-2 border-black">LN</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
}

export default Navbar;
