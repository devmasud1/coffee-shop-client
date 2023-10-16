import { Outlet } from "react-router-dom";

// import Home from "../Pages/Home";
import Navbar from "../Pages/shared/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
