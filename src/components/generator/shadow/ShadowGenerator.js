import React, { useState } from "react";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { AiOutlineBorderOuter } from "react-icons/ai";

const ShadowGenerator = () => {
  const [ShadowHorizontalSize, setShadowHorizontalSize] = useState(0);
  const [ShadowVerticalSize, setShadowVerticalSize] = useState(0);
  const [Shadowblur, setShadowblur] = useState(0);
  const [ShadowSpread, setShadowSpread] = useState(0);
  const [ShadowColor, setShadowColor] = useState("#000000");
  const [ShadowPosition, setShadowPosition] = useState("");
  const [CopyCss, setCopyCss] = useState(false);
  const [Copy, setCopy] = useState(false);
  const onCopyTextCss = () => {
    navigator.clipboard.writeText(
      `boxShadow: ${ShadowHorizontalSize}px ${ShadowVerticalSize}px ${Shadowblur}px ${ShadowSpread}px ${ShadowColor} ${ShadowPosition};`
    );
    setCopyCss(true);
    setTimeout(() => {
      setCopyCss(false);
    }, 1000);
  };
  const onCopyText = () => {
    setCopy(!Copy);
  };
  const onShadow = (position) => {
    setShadowPosition(position);
  };
  return (
    <div className="grid grid-cols-6 gap-5 px-10">
      <div className="col-span-4 rounded-lg grid grid-rows-[7]">
        <div className=" row-span-6 flex justify-center items-center">
          <div
            className=" px-10 text-lg font-medium w-1/2 flex justify-center transition duration-600 select-all items-center aspect-[16/9] bg-white rounded-lg"
            style={{
              boxShadow: `${ShadowHorizontalSize}px ${ShadowVerticalSize}px ${Shadowblur}px ${ShadowSpread}px ${ShadowColor} ${ShadowPosition}`,
            }}
          ></div>
        </div>
        <div className=" border-2 selection:text-[#00acb4] selection:bg-[#cdf5f7] relative rounded-lg flex px-5 items-center bg-white/70 backdrop-blur-xl">
          <code className=" overflow-auto ">
            {/* <li type="1">
              <span className=" text-yellow-400">.element</span>
              {" {"}
            </li> */}
            {/* <li type="1"> */}
            <span className=" text-[#ff0000]">box-shadow</span>:{" "}
            <span className=" text-blue-700">
              {ShadowHorizontalSize}
              px {ShadowVerticalSize}
              px {Shadowblur}
              px {ShadowSpread}
              px {ShadowColor}
            </span>{" "}
            <span className=" text-blue-400"> {ShadowPosition}</span>;
            {/* </li>{" "} */}
            {/* <li type="1">{"}"}</li> */}
          </code>
          <div
            className=" absolute text-[#00acb4] select-none cursor-pointer px-4 right-3 py-2 rounded-lg"
            onClick={onCopyTextCss}
          >
            {CopyCss ? "Copied" : "Copy"}
          </div>
        </div>{" "}
      </div>
      <div className=" col-span-2 py-3 select-none space-y-4 rounded-lg mt-5 border-2 px-5 bg-[#ffffff70] backdrop-blur-2xl ">
        <div className=" py-1 space-y-1 ">
          <div className="  py-1 rounded flex justify-between items-center">
            Horizontal Offset
            <div className="px-2 overflow-hidden py-1 ">
              {ShadowHorizontalSize} px
            </div>
          </div>
          <input
            type="range"
            defaultValue={0}
            max={100}
            min={-100}
            onChange={(e) => setShadowHorizontalSize(e.target.value)}
            className="py-1 w-full accent-[#00acb4] rounded-lg "
            id=""
          />
        </div>
        <div className=" py-1 space-y-1 ">
          <div className=" py-1 rounded flex justify-between items-center">
            Vertical Offset
            <div className="px-2 overflow-hidden py-1 ">
              {ShadowVerticalSize} px
            </div>
          </div>
          <input
            type="range"
            defaultValue={0}
            max={100}
            min={-100}
            name=""
            onChange={(e) => setShadowVerticalSize(e.target.value)}
            className="py-1 w-full  accent-[#00acb4]  rounded-lg "
            id=""
          />
        </div>
        <div className=" py-1 space-y-1 ">
          <div className="  py-1 rounded flex justify-between items-center">
            Blur
            <div className="px-2 overflow-hidden py-1 ">{Shadowblur} px</div>
          </div>
          <input
            type="range"
            defaultValue={0}
            max={100}
            min={0}
            name=""
            onChange={(e) => setShadowblur(e.target.value)}
            className="py-1 w-full accent-[#00acb4]  rounded-lg "
            id=""
          />
        </div>
        <div className=" py-1 space-y-1 ">
          <div className="  py-1 rounded flex justify-between items-center">
            Spread
            <div className="px-2 overflow-hidden py-1 ">{ShadowSpread} px</div>
          </div>
          <input
            type="range"
            defaultValue={0}
            max={100}
            min={0}
            name=""
            onChange={(e) => setShadowSpread(e.target.value)}
            className="py-1 w-full accent-[#00acb4]  rounded-lg "
            id=""
          />
        </div>
        <div className=" py-1 flex justify-between space-y-1 ">
          <div className=" py-1 rounded ">
            Color
            <div className="overflow-hidden py-1 flex justify-center items-center border-[#00ADB5] rounded-lg">
              <div className=" py-1 w-20 outline-none bg-transparent ">
                {ShadowColor}
              </div>

              <input
                type="color"
                onChange={(e) => setShadowColor(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className=" grid grid-cols-2 gap-4">
            <div
              onClick={() => onShadow("")}
              className={` flex justify-center border-2 transition duration-300 border-[#00ADB5] rounded-lg px-5 py-2 cursor-pointer items-center gap-2 ${
                ShadowPosition === ""
                  ? " bg-[#00ADB5] text-[#eeeeee] "
                  : "  text-[#00ADB5]"
              }`}
            >
              <AiOutlineBorderOuter /> Outline
            </div>
            <div
              onClick={() => onShadow("inset")}
              className={` flex justify-center border-2 transition duration-300 border-[#00ADB5] rounded-lg px-5 py-2 cursor-pointer items-center gap-2 ${
                ShadowPosition === "inset"
                  ? " bg-[#00ADB5] text-[#eeeeee] "
                  : "  text-[#00ADB5]"
              }`}
            >
              <BsLayoutSidebarInset /> Inset
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShadowGenerator;
