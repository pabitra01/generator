import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routeTypes } from "./router/routeTypes";
import ShadowGenerator from "./components/generator/shadow/ShadowGenerator";
import EditContent from "./components/Editor/EditContent";
import { routes } from "./router/routes";
import Navbar from "./common/navbar/Navbar";
import HomeContent from "./components/home/HomeContent";
import ColorPalette from "./components/generator/color/ColorPalette";
import ColorGenerator from "./components/generator/color/ColorGenerator";
import ColorGeneratorRGB from "./components/generator/color/ColorGeneratorRGB";
import Shadow from "./components/generator/shadow/Shadow";
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
      case routeTypes.SHADOW_VIEW:
        return (
          <>
            <div className=" row-span-1 sticky z-10 top-0">
              <Navbar />
            </div>
            <ShadowGenerator />
          </>
        );
      case routeTypes.COLOR_PALETTE_GENERATOR_VIEW:
        return (
          <>
            <div className=" row-span-1 sticky z-10 top-0">
              <Navbar />
            </div>
            <ColorPalette />
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
      case routeTypes.COLOR_HOME_VIEW:
        return (
          <>
            <div className=" row-span-1 sticky z-10 top-0">
              <Navbar />
            </div>
            <HomeContent />
          </>
        );
      case routeTypes.COLOR_GENERATOR:
        return (
          <>
            <div className=" row-span-1 sticky z-10 top-0">
              <Navbar />
            </div>
            <ColorGeneratorRGB />
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
