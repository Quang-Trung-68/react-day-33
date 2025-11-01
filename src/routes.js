import { PATHS } from "@/configs/paths.js";
import { LAYOUTS } from "@/configs/layouts.js";

import Home from "@pages/Home";
import News from "@pages/News";
import About from "@pages/About";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Term from "@pages/Term";
import NotFound from "@pages/NotFound";

export const ROUTES = [
  {
    layout: LAYOUTS.DEFAULT,
    children: [
      {
        path: PATHS.HOME,
        title: "Home",
        element: Home,
        isShowInNav: true,
      },
      {
        path: PATHS.NEWS,
        title: "News",
        element: News,
        isShowInNav: true,
      },
      {
        path: PATHS.ABOUT,
        title: "About",
        element: About,
        isShowInNav: true,
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
        isShowInNav: true,
      },
      {
        path: PATHS.REGISTER,
        title: "Register",
        element: Register,
        isShowInNav: true,
      },
    ],
  },
  {
    layout: LAYOUTS.NO_LAYOUT,
    children: [
      {
        path: PATHS.TERM,
        title: "Term",
        element: Term,
        isShowInNav: false,
      },
      {
        path: PATHS.NOT_FOUND,
        title: "Not Found",
        element: NotFound,
        isShowInNav: false,
      },
    ],
  },
];
