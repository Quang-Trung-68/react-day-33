import { PATHS } from "./configs/paths.js";
import { LAYOUTS } from "./configs/layouts.js";

import Home from "./pages/Home/index.jsx";
import News from "./pages/News/index.jsx";
import About from "./pages/About/index.jsx";
import Login from "./pages/Login/index.jsx";
import Register from "./pages/Register/index.jsx";

export const ROUTES = [
  {
    layout: LAYOUTS.DEFAULT,
    children: [
      {
        path: PATHS.HOME,
        title: "Home",
        element: Home,
      },
      {
        path: PATHS.NEWS,
        title: "News",
        element: News,
      },
      {
        path: PATHS.ABOUT,
        title: "About",
        element: About,
      },
    ],
  },
  {
    layout: LAYOUTS.AUTH,
    children: [
      {
        path: PATHS.LOGIN,
        title: "Login",
        element: Login,
      },
      {
        path: PATHS.REGISTER,
        title: "Register",
        element: Register,
      },
    ],
  },
];
