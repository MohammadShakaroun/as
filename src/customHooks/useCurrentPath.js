import { matchRoutes, useLocation } from "react-router-dom";

const routes = [
  { path: "/" },
  { path: "/home" },
  { path: "/contact" },
  { path: "/services" },
  { path: "/register" },
  { path: "/about" },
];

export const useCurrentPath = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location);

  return { route };
};
