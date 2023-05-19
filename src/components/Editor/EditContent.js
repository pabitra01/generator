import React, { useState } from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
const EditContent = () => {
  const [color, setColor] = useState("");
  const [TextColor, setTextColor] = useState("#000000");
  const [text, setText] = useState("Input Text...");

  const [height, setheight] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [FontSize, setFontSize] = useState(30);
  const [BoldSize, setBoldSize] = useState(300);
  const [ImageSize, setImageSize] = useState("");
  const [isdivs, setIsdivs] = useState(false);
  const [fontFamily, setfontFamily] = useState("");
  const onToggleTab = () => {
    setIsdivs(!isdivs);
  };
  const [alignPosition, setAlignPosition] = useState("left");
  const onAlign = (position) => {
    setAlignPosition(position);
  };
  const [fontStylePosition, setFontStylePosition] = useState("");
  const onFontStyle = (position) => {
    setFontStylePosition(position);
  };
  return (
    <div className=" row-span-6 px-10 pt-10 grid grid-cols-6 gap-5">
      <div className=" overflow-auto  h-[80vh] col-span-4">
        <LeftContent
          color={color}
          TextColor={TextColor}
          isdivs={isdivs}
          text={text}
          BoldSize={BoldSize}
          height={height}
          fontFamily={fontFamily}
          ImageUrl={ImageUrl}
          alignPosition={alignPosition}
          fontStylePosition={fontStylePosition}
          FontSize={FontSize}
          ImageSize={ImageSize}
        />
      </div>
      <div className=" col-span-2 rounded-[10px] ">
        <RightContent
          setColor={setColor}
          setheight={setheight}
          onToggleTab={onToggleTab}
          ImageUrl={ImageUrl}
          FontSize={FontSize}
          BoldSize={BoldSize}
          setTextColor={setTextColor}
          setImageUrl={setImageUrl}
          setFontSize={setFontSize}
          isdivs={isdivs}
          setfontFamily={setfontFamily}
          setBoldSize={setBoldSize}
          onAlign={onAlign}
          onFontStyle={onFontStyle}
          alignPosition={alignPosition}
          fontStylePosition={fontStylePosition}
          setImageSize={setImageSize}
          setText={setText}
        />
      </div>
    </div>
  );
};

export default EditContent;
