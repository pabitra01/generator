import React from "react";

const LeftContent = (props) => {
  console.log(props.TextColor);
  return (
    <div className="">
      <div
        className={`font-${props.fontStylePosition} ${props.fontStylePosition}`}
        style={{
          fontSize: `${props.FontSize}px`,
          textAlign: `${props.alignPosition}`,
          color: `${props.TextColor}`,
        }}
      >
        {props.text}
      </div>
    </div>
  );
};

export default LeftContent;
