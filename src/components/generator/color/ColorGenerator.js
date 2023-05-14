import React, { useState } from "react";
import { shadow } from "./ColorData";
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
      className="aspect-[9/16] mb-2 text-center transition-all text-black rounded-lg col-span-1  select-all flex justify-center items-center cursor-pointer "
      style={{
        backgroundColor: `${props.color}`,
      }}
      onClick={handleClickColor}
    >
      {" "}
      {copied && "Copied"}
    </div>
  );
};
const ColorGenerator = () => {
  return (
    <div className=" w-screen grid grid-cols-10 gap-2 py-10 px-10 ">
      {shadow.map((user) => (
        <Color color={user.color} />
      ))}
    </div>
  );
};

export default ColorGenerator;
