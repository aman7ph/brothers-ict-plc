import { createBrowserRouter } from "react-router-dom";

import ServiceDetail from "../pages/ServiceDetail";
import GeneralLayout from "../layout/GeneralLayout";
import About from "../pages/About";
import LandingPage from "../pages/LandingPage";
import NewsPage from "../pages/NewsPage";
import NewsDetailPage from "../pages/NewsDetailPage";
import ErrorPage from "../pages/ErrorPage";
export const router = createBrowserRouter([
  {
    element: <GeneralLayout />,
    children: [
      {
        path: "/service/:category",
        element: <ServiceDetail></ServiceDetail>,
      },
      {
        path: "/",
        element: <LandingPage></LandingPage>,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "news/detail",
        element: <NewsDetailPage />,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
