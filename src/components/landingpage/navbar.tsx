import React from "react";
import Logo from "./logo";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b py-4 px-5 flex items-center justify-between">
      <Logo />
      <Menu size={26} />
    </header>
  );
};

export default Navbar;
