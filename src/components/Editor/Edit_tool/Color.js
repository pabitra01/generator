import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Color = (props) => {
  const [isColor, setIsColor] = useState(false);
  const onToggleColorTab = () => {
    setIsColor(!isColor);
  };
  return (
    <div className="  border-2 border-[#00ADB5]  p-2 rounded-lg">
      <div
        className=" font-bold flex cursor-pointer justify-between px-2 items-center"
        onClick={onToggleColorTab}
      >
        BackGround Color
        <MdKeyboardArrowDown />
      </div>
      <div className={isColor ? "px-2 py-2 w-full block space-y-2" : "hidden"}>
        <div className=" pt-2 opacity-70">Add Color :</div>
        <input
          className=" rounded-lg w-full h-10 bg-transparent"
          onChange={(e) => props.setColor(e.target.value)}
          type="color"
        />
      </div>
    </div>
  );
};

export default Color;
