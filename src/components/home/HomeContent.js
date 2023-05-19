import React from "react";
import Home from "./Home";
import CSSGeneratorTool from "./CSSGeneratorTool";
import { Waveup } from "../../icon/Icon";
// import Footer from "./Footer";

const HomeContent = () => {
  return (
    <>
      <Home />
      <CSSGeneratorTool />
      <Waveup />
      {/* <Footer /> */}
    </>
  );
};

export default HomeContent;
