import React, { useState } from "react";
import { MdOutlineAssignment } from "react-icons/md";
import { SiWheniwork } from "react-icons/si";
import TableComp from "./TableComp";
import NoData from "./NoData";

const SkillTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="my-4">
      <div className="skillTabs_tab-header">
        <button
          onClick={() => handleTabClick("tab1")}
          className={activeTab === "tab1" ? "active" : ""}
        >
          <MdOutlineAssignment /> Assignments
        </button>
        <button
          onClick={() => handleTabClick("tab2")}
          className={activeTab === "tab2" ? "active" : ""}
        >
          <SiWheniwork /> Projects
        </button>
      </div>
      <div className="skillTabs_tab-content">
        {activeTab === "tab1" && <TableComp />}
        {activeTab === "tab2" && <NoData />}
      </div>
    </div>
  );
};

export default SkillTabs;
