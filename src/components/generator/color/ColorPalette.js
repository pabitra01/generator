import React, { useState } from "react";

const ColorPalette = () => {
  const [bgcolor, setbgcolor] = useState("#000066");
  const [textcolor, settextcolor] = useState("#4646EA");
  const [color, setcolor] = useState("#0001E6");
  const [secondcolor, setsecondcolor] = useState("#1F1F66");
  const [firstcolor, setfirstcolor] = useState("#0000B3");
  return (
    <>
      <div className=" grid grid-cols-5 h-[90vh] w-screen px-10 ">
        <div
          className=" bg-slate-100 justify-center flex items-end"
          style={{ backgroundColor: `${bgcolor}` }}
        >
          <label htmlFor="bgcolor">
            <div className=" bg-white/70 px-5 py-3 mb-5 rounded-lg">
              {bgcolor}
            </div>
          </label>
          <input
            type="color"
            className="hidden"
            name=""
            onChange={(e) => setbgcolor(e.target.value)}
            id="bgcolor"
          />
        </div>
        <div
          className=" bg-slate-100 justify-center flex items-end"
          style={{ backgroundColor: `${textcolor}` }}
        >
          <label htmlFor="textcolor">
            <div className=" bg-white/70 px-5 py-3 mb-5 rounded-lg">
              {textcolor}
            </div>
          </label>
          <input
            type="color"
            className="hidden"
            name=""
            onChange={(e) => settextcolor(e.target.value)}
            id="textcolor"
          />
        </div>
        <div
          className=" bg-slate-100 justify-center flex items-end"
          style={{ backgroundColor: `${color}` }}
        >
          <label htmlFor="color">
            <div className=" bg-white/70 px-5 py-3 mb-5 rounded-lg">
              {color}
            </div>
          </label>
          <input
            type="color"
            className="hidden"
            name=""
            onChange={(e) => setcolor(e.target.value)}
            id="color"
          />
        </div>
        <div
          className=" bg-slate-100 justify-center flex items-end"
          style={{ backgroundColor: `${secondcolor}` }}
        >
          <label htmlFor="secondcolor">
            <div className=" bg-white/70 px-5 py-3 mb-5 rounded-lg">
              {secondcolor}
            </div>
          </label>
          <input
            type="color"
            className="hidden"
            name=""
            onChange={(e) => setsecondcolor(e.target.value)}
            id="secondcolor"
          />
        </div>
        <div
          className=" bg-slate-100 justify-center flex items-end"
          style={{ backgroundColor: `${firstcolor}` }}
        >
          <label htmlFor="firstcolor">
            <div className=" bg-white/70 px-5 py-3 mb-5 rounded-lg">
              {firstcolor}
            </div>
          </label>
          <input
            type="color"
            className="hidden"
            name=""
            onChange={(e) => setfirstcolor(e.target.value)}
            id="firstcolor"
          />
        </div>
      </div>
    </>
  );
};

export default ColorPalette;
