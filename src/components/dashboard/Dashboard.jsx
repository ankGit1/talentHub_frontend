import React from "react";
import "./dashboard.css";
import Recommendation from "../recommendation/Recommendation";
import MyCourses from "../myCourses/MyCourses";
import MyCalender from "../myCalender/MyCalender";
import { Link } from "react-router-dom";
import Upcoming from "../upcomingEvents/Upcoming";

function Dashboard() {
  return (
    <div className="dashboardTopDiv">
      <Recommendation />
      <div className="myCourse_CalenderDiv p-4">
        <MyCourses />
        <MyCalender />
      </div>
      <div className="px-4">
        <Link to="refer">
          <div className="dashReferDiv">
            <img
              className="dashboard_referImg"
              src="/images/halfRefer.png"
              alt="refer"
            />
            <div className="dashboard_referText">
              <h6 className="fw-bold mb-2">
                Unleash Knowledge, Earn Rewards - Our Refer and Earn Scheme!
              </h6>
              <p>
                Join our Refer and Earn Scheme to embark on an exciting journey
                of knowledge sharing and rewarding experiences.
              </p>
              <h6>Tiered Rewards System</h6>
              <p className="fw-semibold">
                <span>1. Bronze Level</span>
                <span>2. Silver Level</span>
                <span>3. Gold Level</span>
              </p>
              <p>Spread the Love for Learning and Reap the Benefits!</p>
              <button className="dashRefer_button">Start Refering</button>
            </div>
          </div>
        </Link>
      </div>
      <Upcoming />
    </div>
  );
}

export default Dashboard;
