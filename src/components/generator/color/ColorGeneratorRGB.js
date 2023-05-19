import React, { useState } from "react";

const ColorGeneratorRGB = () => {
  const [ShadowHorizontalSize, setShadowHorizontalSize] = useState(0);
  const [ShadowVerticalSize, setShadowVerticalSize] = useState(0);
  const [Shadowblur, setShadowblur] = useState(0);
  const [CopyCss, setCopyCss] = useState(false);
  const onCopyTextCss = () => {
    navigator.clipboard.writeText(
      `background-color: rgb( ${ShadowHorizontalSize}, ${ShadowVerticalSize}, ${Shadowblur});`
    );
    setCopyCss(true);
    setTimeout(() => {
      setCopyCss(false);
    }, 1000);
  };
  return (
    <div className="grid grid-cols-6 gap-5 px-10">
      <div className="col-span-4 rounded-lg grid grid-rows-[7]">
        <div className=" row-span-6 flex justify-center items-center">
          <div
            className=" px-10 text-lg font-medium w-1/2 flex justify-center transition duration-600 select-all items-center aspect-[16/9] bg-white rounded-lg"
            style={{
              backgroundColor: `rgb(${ShadowHorizontalSize},${ShadowVerticalSize}, ${Shadowblur})`,
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
            <span className=" text-[#ff0000]">background-color</span>:{" "}
            <span className=" text-blue-700">
              rgb({ShadowHorizontalSize}, {ShadowVerticalSize}, {Shadowblur})
            </span>{" "}
            <span className=" text-blue-400"></span>;{/* </li>{" "} */}
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
      <div className=" col-span-2 py-3 select-none space-y-4 h-[80vh] rounded-lg mt-5 border-2 px-5 bg-[#ffffff70] backdrop-blur-2xl ">
        <div className=" py-1 space-y-1 ">
          <div className="  py-1 rounded flex justify-between items-center">
            Red
            <div className="px-2 overflow-hidden py-1 ">
              {ShadowHorizontalSize}
            </div>
          </div>
          <input
            type="range"
            defaultValue={0}
            max={255}
            min={0}
            onChange={(e) => setShadowHorizontalSize(e.target.value)}
            className="py-1 w-full accent-[#00acb4] Range-Red-Color "
            id=""
          />
        </div>
        <div className=" py-1 space-y-1 ">
          <div className=" py-1 rounded flex justify-between items-center">
            Green
            <div className="px-2 overflow-hidden py-1 ">
              {ShadowVerticalSize}
            </div>
          </div>
          <input
            type="range"
            defaultValue={0}
            max={255}
            min={0}
            name=""
            onChange={(e) => setShadowVerticalSize(e.target.value)}
            className="py-1 w-full  accent-[#00acb4] Range-Green-Color"
            id=""
          />
        </div>
        <div className=" py-1 space-y-1 ">
          <div className="  py-1 rounded flex justify-between items-center">
            Blue
            <div className="px-2 overflow-hidden py-1 ">{Shadowblur}</div>
          </div>
          <input
            type="range"
            defaultValue={0}
            max={255}
            min={0}
            name=""
            onChange={(e) => setShadowblur(e.target.value)}
            className="py-1 w-full accent-[#00acb4] Range-Blue-Color "
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default ColorGeneratorRGB;
