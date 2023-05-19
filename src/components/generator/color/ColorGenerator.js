import React, { useState } from "react";
import { shadow } from "./ColorData";
import { Link } from "react-router-dom";

const Color = (props) => {
  const [copied, setCopied] = useState(false);

  const handleClickColor = () => {
    navigator.clipboard.writeText(props.color);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, [1000]);
  };
  return (
    <div
      className=" mb-3 hover:text-[#00ADB5] group cursor-pointer  "
      onClick={handleClickColor}
    >
      <div
        className="aspect-[9/16] text-center group-hover:scale-105 transition duration-500 text-black rounded-lg col-span-1 flex justify-center items-end "
        style={{
          backgroundColor: `${props.color}`,
        }}
      >
        <div
          className={
            copied &&
            " rounded py-3 pt-20 bg-gradient-to-b to-[#EEEEEE] via-[#EEEEEE]/50 via-[75%] from-transparent w-full px-2"
          }
        >
          {copied && " Copied "}
        </div>
      </div>
      <div className="flex justify-center uppercase bg-white/20  py-1 rounded">
        {props.color}
      </div>
    </div>
  );
};
const ColorGenerator = () => {
  return (
    <>
      <div className="px-10 ">
        {/* <div className="w-fit rounded-lg my-2 py-3">
          Select Your Favorite Color
        </div> */}
        <div className=" flex float-right">
          {" "}
          <Link to="/color/color-generator">
            {" "}
            <div className="px-4 w-fit mx-3 rounded-lg my-2 py-3 hover:border-[#00acb4] border-[##e2e8f0] transition duration-500 hover:bg-white border-2">
              Generate Color
            </div>
          </Link>
          <Link to="/color/color-palette-generator">
            {" "}
            <div className="px-4 w-fit rounded-lg my-2 py-3 hover:border-[#00acb4] border-[##e2e8f0] transition duration-500 hover:bg-white border-2">
              Generate Color Palette
            </div>
          </Link>
        </div>
      </div>
      <div className=" w-screen grid grid-cols-10 gap-2  py-10 px-10 ">
        {shadow.map((user, index) => (
          <Color color={user.color} index={index} />
        ))}
      </div>
    </>
  );
};

export default ColorGenerator;
