import React, { useEffect } from "react";
import "./paymentStatus.css";
import axios from "axios";

function Success() {
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get("session_id");

  const updateLocaleStorage = async (userId) => {
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
  useEffect(() => {
    let key = localStorage.getItem("key");
    let courseLoc = localStorage.getItem("addCourse");

    const sendCourse = async () => {
      let course = JSON.parse(courseLoc);
      await axios
        .post(`${import.meta.env.VITE_backend}/path/course/push/user/course/`, {
          courseId: course.courseId,
          user: course.user,
        })
        .then((res) => {
          updateLocaleStorage(course.user);
          localStorage.removeItem("key");
          localStorage.removeItem("addCourse");
        })
        .catch((err) => {
          localStorage.removeItem("key");
          localStorage.removeItem("addCourse");
        });
    };
    if (sessionId === key) sendCourse();
  }, []);
  return (
    <div className="paymentStaus_topDiv px-2">
      <img src="/images/success.gif" alt="gif" />
      <h3>Payment Successfull</h3>
      <p>Your course successfully added into courses section</p>
    </div>
  );
}

export default Success;
