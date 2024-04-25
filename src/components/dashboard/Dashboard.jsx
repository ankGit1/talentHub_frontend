import React from "react";
import "./dashboard.css";
import Recommendation from "../recommendation/Recommendation";
import MyCourses from "../myCourses/MyCourses";
import MyCalender from "../myCalender/MyCalender";
import { Link } from "react-router-dom";
import Upcoming from "../upcomingEvents/Upcoming";
import MarqueeComp from "./MarqueeComp";
import { useInView } from "react-intersection-observer";

function Dashboard() {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  
  return (
    <div className="dashboardTopDiv">
      <Recommendation />
      <div className="myCourse_CalenderDiv p-4">
        <MyCourses />
        <MyCalender />
      </div>
      <div className="px-4" ref={ref1}>
        {inView1 && (
          <Link to="refer">
            <div className="dashReferDiv">
              <img
                className="dashboard_referImg"
                src="/images/halfRefer.png"
                alt="refer"
              />
              <div className="dashboard_referText">
                <h6 className="offerTitle mb-2">
                  Unleash Knowledge, Earn{" "}
                  <span className="rewardWord">Rewards</span> - Our Refer and
                  Earn Scheme!
                </h6>
                <p>
                  Join our Refer and Earn Scheme to embark on an exciting
                  journey of knowledge sharing and rewarding experiences.
                </p>
                <i>
                  <span className="underlineText">
                    Spread the Love for Learning
                  </span>
                  and Reap the Benefits!
                </i>
              </div>
            </div>
          </Link>
        )}
      </div>
      <div ref={ref2}>{inView2 && <MarqueeComp />}</div>
      <div>
        <Upcoming />
      </div>
    </div>
  );
}

export default Dashboard;
