import React, { useEffect, useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import CourseCard from "../myCourses/CourseCard";
import { Link } from "react-router-dom";
import axios from "axios";

function Upcoming() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${import.meta.env.VITE_backend}/path/bookclass/get/seminars`)
        .then((res) => {
          setErr("");
          setData(res.data);
        })
        .catch((err) => {
          setErr(
            "We are currently experiencing difficulties in retrieving data"
          );
        });
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <p className="fw-bold">
        <span className="myCoursesLogo rounde-circle">
          <AiOutlineSchedule size={18} />
        </span>
        Book a Live Class, For <span className="red h5 fw-bold">Free!</span>
      </p>
      <div className="dashboard_upcoming">
        {data.length > 0 &&
          data.map((event) => (
            <Link key={event._id} to="bookclass" state={event}>
              <CourseCard info={event} btn="Register Yourself" />
            </Link>
          ))}
      </div>
      {err && <p className="red">{err}</p>}
    </div>
  );
}

export default Upcoming;
