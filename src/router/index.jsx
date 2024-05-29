import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/Default";
import Service from "../pages/Service";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/service",
        element: <Service></Service>,
      },
    ],
  },
]);
