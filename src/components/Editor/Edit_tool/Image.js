import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Image = (props) => {
  const [isImage, setIsImage] = useState(false);
  const onToggleImageTab = () => {
    setIsImage(!isImage);
  };
  return (
    <div className="border-2 border-[#00ADB5]  p-2 rounded-lg">
      <div
        className=" font-bold  cursor-pointer  flex justify-between px-2 items-center"
        onClick={onToggleImageTab}
      >
        Image
        {isImage ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </div>
      <div className={isImage ? "px-2 block space-y-2" : "hidden"}>
        <div className="">
          <div className=" opacity-70 pt-3 pb-2">Image Url :</div>
          <div className=" grid grid-cols-6 space-y-1 gap-2">
            <div className=" col-span-4">
              <input
                type="url"
                placeholder="input url ...."
                className="px-5 py-2 w-full outline-none  bg-transparent border-2 border-[#00ADB5] rounded-lg "
                name=""
                onChange={(e) => props.setImageUrl(e.target.value)}
                id=""
              />
            </div>
            <div
              className="px-5 py-1 items-center transition duration-[600ms] hover:bg-[#00ADB5] col-span-2 flex justify-center cursor-pointer border-2 rounded-lg border-[#00ADB5]"
              onClick={props.onToggleTab}
            >
              <div className="">{props.isdivs ? "Remove" : "Add"}</div>
            </div>
            <div className="items-center col-span-6 flex justify-center rounded-lg ">
              <img src={props.ImageUrl} alt="" />
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-4 gap-2">
          <div className=" bg-cover col-span-4 opacity-70">Image Size :</div>
          <div className=" col-span-4">
            <input
              type="number"
              name=""
              onChange={(e) => props.setImageSize(e.target.value)}
              className="px-2 py-1 w-full outline-none border-2 border-[#00ADB5] rounded-lg bg-transparent"
              id=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
