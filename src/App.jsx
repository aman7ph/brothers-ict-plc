import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
