import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex items-center px-10 bg-[#ffffff50]  backdrop-blur-xl justify-between w-screen">
      <Link
        to="/"
        className=" py-2 text-lg font-bold bg-clip-text bg-gradient-to-r text-black background-animate"
      >
        Generator
      </Link>
      <div className=" flex ">
        <Link
          className=" py-3 transition rounded-lg duration-[600ms] cursor-pointer text-black"
          to="/color"
        >
          Color
        </Link>
        <Link
          className=" py-3 transition rounded-lg duration-[600ms] cursor-pointer mx-10 text-black"
          to="/shadow"
        >
          Shadow
        </Link>
        <Link
          className=" py-3 transition rounded-lg duration-[600ms] cursor-pointer text-black "
          to="/text"
        >
          Text
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
