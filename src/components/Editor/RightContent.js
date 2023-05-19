import React from "react";
import Text from "./Edit_tool/Text";

const RightContent = (props) => {
  return (
    <div className="py-3 select-none space-y-4 rounded-lg  border-2 px-3 bg-[#ffffff70] backdrop-blur-2xl">
      <Text
        setText={props.setText}
        setFontSize={props.setFontSize}
        FontSize={props.FontSize}
        onAlign={props.onAlign}
        setfontFamily={props.setfontFamily}
        onFontStyle={props.onFontStyle}
        alignPosition={props.alignPosition}
        BoldSize={props.BoldSize}
        setTextColor={props.setTextColor}
        fontStylePosition={props.fontStylePosition}
        setBoldSize={props.setBoldSize}
      />
    </div>
  );
};

export default RightContent;
