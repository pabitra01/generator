import React from "react";
import { Link } from "react-router-dom";
import { shadow } from "../../../data/Data";

const Shadow = () => {
  return (
    <>
      <div className="px-10 flex justify-between">
        <h1 className="w-fit rounded-lg my-2 py-3">
          Select Your Favorite Color
        </h1>
        <div className=" flex">
          {" "}
          <Link to="/shadow/generator">
            {" "}
            <div className="px-4 w-fit mx-3 rounded-lg my-2 py-3 hover:border-[#00acb4] transition duration-500 hover:bg-white border-2">
              Generate Shadow
            </div>
          </Link>
          {/* <Link to="/color/color-palette-generator">
            {" "}
            <div className="px-4 w-fit rounded-lg my-2 py-3 hover:border-[#00acb4] border-[##e2e8f0] transition duration-500 hover:bg-white border-2">
              Generate Color Palette
            </div>
          </Link> */}
        </div>
      </div>
      <div className=" grid grid-cols-5 gap-20 py-10 px-10 ">
        {shadow.map((user) => (
          <div
            className={`aspect-square  text-center select-all flex justify-center items-center rounded-lg ${user.shadow}`}
            style={{ boxShadow: `${user.shadow}` }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Shadow;
