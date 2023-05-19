import React from "react";
import { AiOutlineBgColors } from "react-icons/ai";
import { RxShadow } from "react-icons/rx";
import { IoIosColorPalette } from "react-icons/io";
import { RiText } from "react-icons/ri";
import { Link } from "react-router-dom";

const CSSGeneratorTool = () => {
  const CssGeneratorTool = [
    {
      icon: RxShadow,
      content: "Box Shadow",
      link: "/shadow/generator",
    },
    {
      icon: RiText,
      link: "/text",
      content: "Text",
    },
    {
      link: "/color",
      icon: AiOutlineBgColors,
      content: "Color",
    },
    {
      icon: IoIosColorPalette,
      link: "/color/color-palette-generator",
      content: "Color Palette",
    },
  ];
  return (
    <div className=" px-10 -mt-20">
      <h1 className=" text-[30px] py-5">CSS Generators Tool</h1>
      <div className=" grid grid-cols-4 text-lg gap-5">
        {CssGeneratorTool.map((user) => (
          <Link to={user.link}>
            <div
              className={`py-5 px-5 bg-white cursor-pointer transition duration-500 hover:scale-105 gap-5 flex justify-center items-center rounded-lg ${user.shadow}`}
            >
              <user.icon className="text-xl" />
              <h1>{user.content}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CSSGeneratorTool;
