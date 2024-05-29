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
  return <h1 className="text-fuchsia-600">Brothers</h1>;
}

export default App;
