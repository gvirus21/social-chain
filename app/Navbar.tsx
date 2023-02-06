import React from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="flex px-10 md:px-20 justify-between items-center h-16 shadow-md">
      <a>Social Mint</a>

      <div className="">
        <CgProfile />
      </div>
    </nav>
  );
};

export default Navbar;
