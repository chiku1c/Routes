import { lazy } from "react";

const Login = lazy(() => import("../pages/Auth/Login/index"));
const Regestration = lazy(() => import("../pages/Auth/Regestration/index"));
const Home = lazy(() => import("../pages/Home/index"));

export const privateRouteList = [
  {
    title: "home",
    path: "/home",
    allowedRoles: ["user"],
    element: Home,
  },
  {
    title: "projectlist",
    path: "/projectlist/:id",
    allowedRoles: ["admin"],
    // element: Projectlist,
  },
  {
    title: "dashboard",
    path: "/dashboard-home",
    allowedRoles: ["admin"],
    // element: Dashbord,
  },
];

export const publicRouteList = [
  {
    title: "Login",
    path: "/",
    element: Login,
  },
  {
    title: "signup",
    path: "/signup",
    element: Regestration,
  },
  {
    title: "workspace",
    path: "/workspace",
    // element: WorkSpace,
  },
];
