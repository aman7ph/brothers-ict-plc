import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import GeneralLayout from "./layout/GeneralLayout";

const routers = [
  {
    path: "",
    element: <GeneralLayout />,
  },
];

const router = createBrowserRouter(routers);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
