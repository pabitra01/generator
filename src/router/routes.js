import { routeTypes } from "./routeTypes";

export const routes = [
  {
    path: "/shadow/generator",
    component: routeTypes.SHADOW_GENERATOR_VIEW,
  },
  {
    path: "/color/generator",
    component: routeTypes.COLOR_GENERATOR_VIEW,
  },
  {
    path: "/text",
    component: routeTypes.TEXT_GENERATOR_VIEW,
  },
  {
    path: "/",
    component: routeTypes.TEXT_GENERATOR_VIEW,
  },
];
