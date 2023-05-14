import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ColorGenerator from "./components/generator/color/ColorGenerator";
import { routeTypes } from "./router/routeTypes";
import ShadowGenerator from "./components/generator/shadow/ShadowGenerator";
import EditContent from "./components/Editor/EditContent";
import { routes } from "./router/routes";
import Navbar from "./common/navbar/Navbar";
const Router = () => {
  const renderComponent = (type) => {
    switch (type) {
      case routeTypes.SHADOW_GENERATOR_VIEW:
        return (
          <>
            <div className=" row-span-1 sticky z-10 top-0">
              <Navbar />
            </div>
            <ShadowGenerator />
          </>
        );
      case routeTypes.COLOR_GENERATOR_VIEW:
        return (
          <>
            <div className=" row-span-1 sticky z-10 top-0">
              <Navbar />
            </div>
            <ColorGenerator />
          </>
        );
      default:
        return (
          <>
            <div className=" row-span-1 sticky z-10 top-0">
              <Navbar />
            </div>
            <EditContent />
          </>
        );
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={renderComponent(route.component)}
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
