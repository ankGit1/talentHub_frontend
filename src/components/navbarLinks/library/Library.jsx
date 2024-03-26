import React, { useEffect, useState } from "react";
import "../courses/allCourses.css";
import CourseCard from "../../myCourses/CourseCard";
import axios from "axios";

function Library() {
  const [courses, setCourses] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    let lKey = localStorage.getItem("key");
    let lCourse = localStorage.getItem("addCourse");
    if (lKey) localStorage.removeItem(lKey);
    if (lCourse) localStorage.removeItem(lCourse);

    const fetchCourses = async () => {
      await axios
        .get(`${import.meta.env.VITE_backend}/path/course/get/library/courses`)
        .then((res) => {
          setErr("");
          setCourses(res.data);
        })
        .catch((err) => {
          setErr("getting difficulty while fetching data.");
        });
    };
    fetchCourses();
  }, []);

  return (
    <div className="p-4 allCourses_topDiv">
      <h2>Library</h2>
      <p>Pick a course to start your journey!</p>
      <div className="allCoureContainer">
        {courses.length > 0 &&
          courses.map((course) => (
            <CourseCard
              key={course._id}
              info={course}
              btn={course.type === "Subscription" ? "Purchase" : "Add Course"}
            />
          ))}
      </div>
      {err && <p className="red">{err}</p>}
    </div>
  );
}

export default Library;
