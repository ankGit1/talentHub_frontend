import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { GrSchedulePlay } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { MdAssignment } from "react-icons/md";
import { GrResources } from "react-icons/gr";

function SideBar() {
  return (
    <div className="sidebar_topDiv p-2">
      <NavLink to="study" className="p-3 b_border">
        <MdOutlineLibraryBooks size={18} />
        <span className="px-2 fw-semibold">Study</span>
      </NavLink>
      <NavLink to="session" className="p-3 b_border">
        <GrSchedulePlay size={18} />
        <span className="px-2 fw-semibold">Sessions</span>
      </NavLink>
      <NavLink to="report" className="p-3 b_border">
        <TbReportAnalytics size={18} />
        <span className="px-2 fw-semibold">Skill Report</span>
      </NavLink>
      <NavLink to="notes" className="p-3 b_border">
        <MdAssignment size={18} />
        <span className="px-2 fw-semibold">Notes</span>
      </NavLink>
      <NavLink to="resources" className="p-3">
        <GrResources size={18} />
        <span className="px-2 fw-semibold">Resources</span>
      </NavLink>
    </div>
  );
}

export default SideBar;
