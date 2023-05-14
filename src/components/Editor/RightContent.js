import React from "react";
import Color from "./Edit_tool/Color";
import Text from "./Edit_tool/Text";

const RightContent = (props) => {
  return (
    <div className="py-3 select-none space-y-4 rounded-lg mt-5 border-2 px-3 bg-[#ffffff70] backdrop-blur-2xl">
      <Text
        setText={props.setText}
        setFontSize={props.setFontSize}
        FontSize={props.FontSize}
        onAlign={props.onAlign}
        onFontStyle={props.onFontStyle}
        alignPosition={props.alignPosition}
        setTextColor={props.setTextColor}
        fontStylePosition={props.fontStylePosition}
      />
      <Color setColor={props.setColor} />
    </div>
  );
};

export default RightContent;
