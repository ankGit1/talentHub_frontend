import React from "react";
import "./programeHome.css";
import TopBar from "../topBar/TopBar";
import { Outlet } from "react-router-dom";
import SideBar from "../sideBar/SideBar";

function ProgrameHome() {
  return (
    <div className="p-4 programmeHome_topDiv">
      <TopBar />
      <div className="programmeHome_flexDiv py-4">
        <div className="ProgrammeHome_flexLeft">
          <SideBar />
        </div>
        <div className="ProgrammeHome_flexRight p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProgrameHome;
