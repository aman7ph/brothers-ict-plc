import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import GeneralLayout from "./layout/GeneralLayout";
import About from "./page/About";

const routers = [
  {
    path: "",
    element: <GeneralLayout />,
  },
  {
    path: "about",
    element: <About />,
  },
];

const router = createBrowserRouter(routers);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
