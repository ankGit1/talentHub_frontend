import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

function Root_dash_prog() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Root_dash_prog;
