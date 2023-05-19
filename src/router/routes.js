import { routeTypes } from "./routeTypes";

export const routes = [
  {
    path: "/shadow/generator",
    component: routeTypes.SHADOW_GENERATOR_VIEW,
  },
  {
    path: "/",
    component: routeTypes.COLOR_HOME_VIEW,
  },
  {
    path: "/color",
    component: routeTypes.COLOR_GENERATOR_VIEW,
  },
  {
    path: "/color/color-palette-generator",
    component: routeTypes.COLOR_PALETTE_GENERATOR_VIEW,
  },
  {
    path: "/color/color-generator",
    component: routeTypes.COLOR_GENERATOR,
  },
  {
    path: "/text",
    component: routeTypes.TEXT_GENERATOR_VIEW,
  },
  {
    path: "/shadow",
    component: routeTypes.SHADOW_VIEW,
  },
  {
    path: "/text",
    component: routeTypes.TEXT_GENERATOR_VIEW,
  },
  {
    path: "/text",
    component: routeTypes.TEXT_GENERATOR_VIEW,
  },
  {
    path: "/text",
    component: routeTypes.TEXT_GENERATOR_VIEW,
  },
  {
    path: "/text",
    component: routeTypes.TEXT_GENERATOR_VIEW,
  },
  {
    path: "/text",
    component: routeTypes.TEXT_GENERATOR_VIEW,
  },
];
