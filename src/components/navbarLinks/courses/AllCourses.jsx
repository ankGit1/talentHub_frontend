import React, { useEffect, useState } from "react";
import "./allCourses.css";
import CourseCard from "../../myCourses/CourseCard";
import { Link } from "react-router-dom";
import axios from "axios";

function AllCourses() {
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
    if (locid) fetchCourses();
  }, []);

  return (
    <div className="p-4 allCourses_topDiv">
      <h2>Courses</h2>
      <p>You can find all your courses here!</p>
      <div className="allCoureContainer">
        {uCourses?.length > 0 ? (
          uCourses.map((course) => (
            <Link
              key={course.cId}
              to={`/learner/program-detail/${course.cId}/study`}
            >
              <CourseCard info={course} btn="Resume Learning" />
            </Link>
          ))
        ) : (
          <p className="my-3 text-light-emphasis noCourseMsg">
            You haven't added any courses yet. Explore the library for new
            courses and add them to your list.
          </p>
        )}
      </div>
    </div>
  );
}

export default AllCourses;
