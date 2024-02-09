import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";
import axios from "axios";

function SketetonMaterial({ data }) {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [err, setErr] = useState("");

  const updatePoints = async () => {
    if (userId) {
      await axios
        .put(`${import.meta.env.VITE_backend}/path/user/update/points`, {
          id: userId,
        })
        .then((res) => {
          console.log("points updated..");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const showVideo = async (vid) => {
    await axios
      .put(
        `${import.meta.env.VITE_backend}/path/user/update/material-watch/${
          vid._id
        }/${vid.materialId}/${userId}`
      )
      .then((res) => {
        setErr("");
        updatePoints();
        navigate("/learner/video", { state: vid });
      })
      .catch((err) => {
        setErr("something went wrong, please try again.");
      });
  };

  useEffect(() => {
    const getLocalUser = JSON.parse(localStorage.getItem("user")).id;
    setUserId(getLocalUser);
  }, []);

  return (
    <div>
      {data.length > 0 &&
        data.map((video) => (
          <div
            key={video._id}
            className={`px-4 py-2 skeleton_MatContainer ${
              video.watched ? "green" : ""
            }`}
          >
            {!err && (
              <>
                <div className="skeleton_left">
                  <FaRegCirclePlay className="mx-2" />
                  <span
                    className="clickToWatch"
                    onClick={() => showVideo(video)}
                  >
                    {video.name}
                  </span>
                </div>
                <span className="small-p">{video.duration}</span>
              </>
            )}
            {err && <p className="red">{err}</p>}
          </div>
        ))}
    </div>
  );
}

export default SketetonMaterial;
