import React, { useState } from "react";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
} from "react-icons/ai";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdNotInterested,
} from "react-icons/md";

const Text = (props) => {
  const [IsBold, setIsBold] = useState(false);
  const onToggleBoldTab = () => {
    setIsBold(!IsBold);
  };
  return (
    <div className="rounded-lg">
      <div className="px-2 space-y-4 ">
        <div className="">
          <div className=" py-2 pb-1">Input Text :</div>
          <input
            type="text"
            placeholder="input text ..."
            className="px-5 py-2 border-2 outline-none  border-[#00ADB5] w-full bg-transparent rounded-lg "
            onChange={(e) => props.setText(e.target.value)}
            id=""
          />
        </div>
        <div className=" ">
          <div className=" flex justify-between">
            Text Size : <div className="">{props.FontSize} px</div>
          </div>
          <input
            type="range"
            name=""
            defaultValue={30}
            max={100}
            min={10}
            onChange={(e) => props.setFontSize(e.target.value)}
            className="py-1 w-full accent-[#00acb4] rounded-lg "
            id=""
          />
        </div>
        <div className=" flex items-center gap-5">
          <div className=" pb-2 font-bold text-center">Align :</div>
          <div className=" flex bg-white rounded-lg gap-5 p-1">
            <div
              className={`  rounded-lg transition duration-[600ms] cursor-pointer px-3 py-2${
                props.alignPosition === "left"
                  ? " bg-[#00ADB5] text-[#ffffff] "
                  : " text-[#00ADB5]"
              }`}
              onClick={() => props.onAlign("left")}
            >
              <AiOutlineAlignLeft />
            </div>
            <div
              className={`  rounded-lg transition duration-[600ms] cursor-pointer px-3 py-2${
                props.alignPosition === "center"
                  ? " bg-[#00ADB5] text-[#ffffff] "
                  : " text-[#00ADB5]"
              }`}
              onClick={() => props.onAlign("center")}
            >
              <AiOutlineAlignCenter />
            </div>
            <div
              className={`  rounded-lg transition duration-[600ms] cursor-pointer px-3 py-2${
                props.alignPosition === "right"
                  ? " bg-[#00ADB5] text-[#ffffff] "
                  : " text-[#00ADB5]"
              }`}
              onClick={() => props.onAlign("right")}
            >
              <AiOutlineAlignRight />
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-5">
          <div className="pb-2 font-bold text-center">Style :</div>
          <div className=" flex bg-white rounded-lg gap-5 p-1">
            <div
              className={`  rounded-lg transition duration-[600ms] cursor-pointer px-3 py-2${
                props.fontStylePosition === ""
                  ? " bg-[#00ADB5] text-[#ffffff] "
                  : " text-[#00ADB5]"
              }`}
              onClick={() => props.onFontStyle("")}
            >
              <MdNotInterested />
            </div>
            <div
              className={`  rounded-lg transition duration-[600ms] cursor-pointer px-3 py-2${
                props.fontStylePosition === "italic"
                  ? " bg-[#00ADB5] text-[#ffffff] "
                  : " text-[#00ADB5]"
              }`}
              onClick={() => props.onFontStyle("italic")}
            >
              <AiOutlineItalic />
            </div>
            <div
              className={`  rounded-lg transition duration-[600ms] cursor-pointer px-3 py-2${
                props.fontStylePosition === "underline"
                  ? " bg-[#00ADB5] text-[#ffffff] "
                  : " text-[#00ADB5]"
              }`}
              onClick={() => props.onFontStyle("underline")}
            >
              <AiOutlineUnderline />
            </div>
          </div>
        </div>
        <div className=" pt-2">Add Color :</div>
        <input
          className=" rounded-lg w-full h-10  bg-transparent"
          onChange={(e) => props.setTextColor(e.target.value)}
          type="color"
        />
        {/* <div className=" w-32 h-32 relative" id="box">
          <div className="w-10 h-10 bg-slate-600 absolute"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Text;
