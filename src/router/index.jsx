import { createBrowserRouter } from "react-router-dom";

import Service from "../pages/Service";
import GeneralLayout from "../layout/GeneralLayout";
import About from "../pages/About";
import LandingPage from "../pages/LandingPage";
export const router = createBrowserRouter([
  {
    element: <GeneralLayout />,
    children: [
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/",
        element: <LandingPage></LandingPage>,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
