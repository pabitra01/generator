import React from "react";
import Router from "./Router";
import Navbar from "./common/navbar/Navbar";

const App = () => {
  return (
    <div className="  grid-rows-[7] md:grid hidden ">
      <div className="">
        <Router />
      </div>
    </div>
  );
};

export default App;
