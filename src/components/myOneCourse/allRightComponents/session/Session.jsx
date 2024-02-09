import React, { useEffect, useState } from "react";
import "./session.css";
import SessionSkeleton from "../../../myCalender/SessionSkeleton";
import axios from "axios";
import { useParams } from "react-router-dom";

function Session() {
  const paramCId = useParams().id;
  const [activeTab, setActiveTab] = useState("Upcoming-Sessions");
  const [pastData, setPastData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  const [err, setErr] = useState("");

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  const sortSession = (sessions) => {
    const todayDate = new Date();
    const upcomingSes = sessions.filter((ses) => {
      const sesDate = new Date(`${ses.year}-${ses.month}-${ses.date}`);
      return sesDate > todayDate;
    });
    const pastSes = sessions.filter((ses) => {
      const sesDate = new Date(`${ses.year}-${ses.month}-${ses.date}`);
      return sesDate < todayDate;
    });

    setUpcomingData(upcomingSes);
    setPastData(pastSes);
  };

  useEffect(() => {
    const fetchCalender = async () => {
      await axios
        .get(
          `${
            import.meta.env.VITE_backend
          }/path/calender/get/all-session/${paramCId}`
        )
        .then((res) => {
          setErr("");
          sortSession(res.data);
        })
        .catch((err) => {
          setErr("getting difficulty while fetching data");
        });
    };
    fetchCalender();
  }, []);

  return (
    <div className="p-2">
      <div className="session_btnDiv">
        <div
          onClick={() => handleTabClick("Upcoming-Sessions")}
          className={activeTab === "Upcoming-Sessions" ? "active" : ""}
        >
          <p className="my-2 study_tabTitle">Upcoming Sessions</p>
        </div>
        <div
          onClick={() => handleTabClick("Past-Sessions")}
          className={activeTab === "Past-Sessions" ? "active" : ""}
        >
          <p className="my-2 study_tabTitle">Past Sessions</p>
        </div>
      </div>

      {!err && (
        <div className="tab-content">
          <div
            className="tabs_block"
            style={{
              display: activeTab === "Upcoming-Sessions" ? "block" : "none",
            }}
          >
            <div className="sessionSkeleton_outerDiv">
              {upcomingData.length > 0 &&
                upcomingData.map((ses) => (
                  <SessionSkeleton key={ses._id} info={ses} />
                ))}
            </div>
          </div>
          <div
            className="tabs_block"
            style={{
              display: activeTab === "Past-Sessions" ? "block" : "none",
            }}
          >
            <div className="sessionSkeleton_outerDiv">
              {pastData.length > 0 &&
                pastData.map((ses) => (
                  <SessionSkeleton key={ses._id} info={ses} />
                ))}
            </div>
          </div>
        </div>
      )}
      {err && <p className="red">{err}</p>}
    </div>
  );
}

export default Session;
