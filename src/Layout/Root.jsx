import { Outlet } from "react-router-dom";

import Home from "../Pages/Home";
import Navbar from "../Pages/shared/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1440px] mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
