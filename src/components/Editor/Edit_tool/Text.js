import React, { useState } from "react";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineItalic,
  AiOutlineUnderline,
} from "react-icons/ai";
import { MdNotInterested } from "react-icons/md";
import { FontStyle } from "../../../data/Data";

const Text = (props) => {
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
            className="py-1 w-full accent-[#00acb4] range rounded-lg "
            id=""
          />
        </div>{" "}
        <div className=" ">
          <div className=" flex justify-between">
            Bold Size : <div className="">{props.BoldSize}</div>
          </div>
          <input
            type="range"
            name=""
            defaultValue={300}
            max={1000}
            step={100}
            min={100}
            onChange={(e) => props.setBoldSize(e.target.value)}
            className="py-1 w-full accent-[#00acb4] range rounded-lg "
            id=""
          />
        </div>
        <div className=" flex items-center gap-5">
          <div className=" pb-2 text-center">Align :</div>
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
          <div className="pb-2 text-center">Style :</div>
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
        <div className="">
          {" "}
          <div className=" pt-2">Add Color :</div>
          <input
            className=" rounded-lg w-full h-10  bg-transparent"
            onChange={(e) => props.setTextColor(e.target.value)}
            type="color"
          />
        </div>
        <div className="">
          <div className=" pb-2 ">Font Style</div>
          <select
            className=" w-full py-2 px-2 outline-none appearance-none rounded-lg border-2 border-[#00acb4]"
            onChange={(e) => props.setfontFamily(e.target.value)}
          >
            {FontStyle.map((data) => (
              <option
                value={data.fontstyle}
                style={{ fontFamily: `${data.fontstyle}` }}
              >
                {data.fontstyle}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Text;
