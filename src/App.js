import React from "react";
import Router from "./Router";
import Navbar from "./common/navbar/Navbar";

const App = () => {
  return (
    <div className=" grid grid-rows-[7] ">
      <div className="">
        <Router />
      </div>
    </div>
  );
};

export default App;
