import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="max-w-[1920px  ">
      <header className="">
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
      </header>

      <Outlet></Outlet>
    </div>
  );
};
export default DefaultLayout;
