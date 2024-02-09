import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Video() {
  const video = useLocation().state; // from skeletonMaterial
  const [err, setErr] = useState("");

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user")).id;
    const updateStatus = async () => {
      await axios
        .put(
          `${import.meta.env.VITE_backend}/path/user/update/status/${
            video._id
          }/${video.courseId}/${localUser}`
        )
        .then((res) => {
          const localData = JSON.parse(localStorage.getItem("user"));
          const findCourse = localData.courseArr.find(
            (course) => course.cId === video.courseId
          );
          findCourse.cCompletion = res.data.completion;
          localStorage.setItem("user", JSON.stringify(localData));
        })
        .catch((err) => {
          setErr("getting difficulty while fetching data..");
        });
    };

    const updateWatchStatus = async () => {
      await axios
        .put(
          `${import.meta.env.VITE_backend}/path/watched/change/status/${
            video._id
          }`,
          {
            user: localUser,
          }
        )
        .then((res) => {
          console.log("status changed");
        })
        .catch((err) => {
          setErr("getting difficulty while fetching data..");
        });
    };
    if (video._id && localUser) updateStatus();
    if (video._id && localUser) updateWatchStatus();
  }, []);

  return (
    <div className="p-4 video_topDiv">
      {!err && (
        <div className="video-container">
          <h5 className="fw-semibold">{video.name}</h5>
          <video className="video-player" controls>
            <source src={video.link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {err && <p className="red">{err}</p>}
    </div>
  );
}

export default Video;
