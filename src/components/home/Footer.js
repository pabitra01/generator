import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  const CssGeneratorTool = [
    {
      content: "Box Shadow",
      link: "/shadow/generator",
    },
    {
      link: "/text",
      content: "Text",
    },
    {
      link: "/color",
      content: "Color",
    },
    {
      link: "/color/color-palette-generator",
      content: "Color Palette",
    },
  ];
  const Social = [
    { icon: AiFillInstagram },
    { icon: AiFillFacebook },
    { icon: AiOutlineTwitter },
    { icon: AiFillLinkedin },
  ];
  return (
    <div className=" bg-white px-10 pb-10 -mt-20 space-y-8 text-center ">
      <Link
        to="/"
        className="py-2 text-xl font-bold bg-clip-text bg-gradient-to-r text-black background-animate"
      >
        Generator
      </Link>
      <div className="flex justify-center items-center">
        {CssGeneratorTool.map((user) => (
          <Link to={user.link}>
            <div
              className={`py-2 px-5 hover:text-black bg-white cursor-pointer transition duration-500 hover:scale-105 gap-5 flex justify-center items-center rounded-lg ${user.shadow}`}
            >
              <h1>{user.content}</h1>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-10 ">
        {Social.map((user) => (
          <div className=" flex justify-between items-center w-fit">
            <user.icon className="text-2xl" />
          </div>
        ))}
      </div>
      <div className=" flex items-center justify-center">&#169; generator</div>
    </div>
  );
};

export default Footer;
