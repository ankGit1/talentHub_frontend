import React, { useEffect, useState } from "react";
import "./myCourses.css";
import { TbNotes } from "react-icons/tb";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";
import axios from "axios";

function MyCourses() {
  const [uCourses, setuCourses] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const locid = JSON.parse(localStorage.getItem("user"));
    const fetchCourses = async () => {
      await axios
        .get(
          `${import.meta.env.VITE_backend}/path/user/find/user-courses/${
            locid.id
          }`
        )
        .then((res) => {
          setErr("");
          setuCourses(res.data);
        })
        .catch((Err) => {
          setErr("We are getting difficulty while fetching data ...");
        });
    };
    fetchCourses();
  }, []);

  return (
    <div className="myCousesTopDiv">
      <p className="fw-bold">
        <span className="myCoursesLogo rounde-circle">
          <TbNotes size={18} />
        </span>
        My Couses
      </p>
      <div className="myCourses_courses">
        {!err &&
          uCourses?.length > 0 &&
          uCourses.map(
            (course, i) =>
              i < 2 && (
                <Link
                  key={course.cId}
                  to={`/learner/program-detail/${course.cId}/study`}
                >
                  <CourseCard info={course} btn="Resume Learning" />
                </Link>
              )
          )}

        {!err && uCourses?.length === 0 && (
          <div className="my-3 text-light-emphasis">
            <h3>No Course Found</h3>
            <p>
              You haven't added any courses yet. Explore the library for new
              courses and add them to your list.
            </p>
          </div>
        )}
        {err && <p className="red">{err}</p>}
      </div>
    </div>
  );
}

export default MyCourses;
