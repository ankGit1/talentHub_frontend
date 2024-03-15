import React, { useEffect, useState } from "react";
import "./myCalender.css";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import SessionSkeleton from "./SessionSkeleton";
import axios from "axios";

function MyCalender() {
  const courseId = JSON.parse(localStorage.getItem("user"))?.courseArr[0]?.cId;
  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  const [cal, setCal] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchCalender = async () => {
      await axios
        .get(
          `${
            import.meta.env.VITE_backend
          }/path/calender/get/next-three/${courseId}`
        )
        .then((res) => {
          setErr("");
          setCal(res.data);
        })
        .catch((err) => {
          setErr("We are getting difficulty while fetching data ...");
        });
    };
    if (courseId) fetchCalender();
  }, []);

  useEffect(() => {
    const updateLocaleStorage = async () => {
      await axios
        .get(
          `${
            import.meta.env.VITE_backend
          }/path/user/get/localstorage/courses/${userId}`
        )
        .then((res) => {
          const localData = JSON.parse(localStorage.getItem("user"));
          localData.courseArr = res.data;
          localStorage.setItem("user", JSON.stringify(localData));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (userId) updateLocaleStorage();
  }, []);

  return (
    <div className="myCalenderTopDiv">
      <p className="fw-bold">
        <span className="myCoursesLogo rounde-circle">
          <SlCalender size={18} />
        </span>
        My Calender
      </p>
      <div>
        <div className="myCalender_contain">
          <div className="MyCalender_eventTitle mb-2">
            <p className="fw-bolder">Upcoming Events</p>
            {courseId && (
              <Link to="calender">
                <span className="border-bottom border-dark">Open Calender</span>
              </Link>
            )}
          </div>
          {!err && courseId && (
            <div>
              {cal.map((c) => (
                <SessionSkeleton key={c._id} info={c} />
              ))}
            </div>
          )}
          {!err && !courseId && (
            <p className="my-3 text-light-emphasis">
              You don't have any upcoming events. Add new courses from Library,
              and your events will showcase here.
            </p>
          )}
          {err && <p className="red">{err}</p>}
        </div>
      </div>
    </div>
  );
}

export default MyCalender;
