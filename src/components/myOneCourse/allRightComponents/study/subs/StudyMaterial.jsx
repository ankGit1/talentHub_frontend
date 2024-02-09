import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import SketetonMaterial from "./SketetonMaterial";
import axios from "axios";

function StudyMaterial({ items }) {
  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  const [activeIndex, setActiveIndex] = useState(null);
  const [videosData, setVideosData] = useState([]);
  const [err, setErr] = useState("");

  const handleClick = async (itemId) => {
    setActiveIndex(itemId === activeIndex ? null : itemId);
    if (itemId !== activeIndex && userId) {
      await axios
        .get(
          `${
            import.meta.env.VITE_backend
          }/path/material/get/mat-vid/${itemId}/${userId}`
        )
        .then((res) => {
          setErr("");
          setVideosData(res.data);
        })
        .catch((err) => {
          setErr("getting difficulty while fetching data");
        });
    }
  };

  return (
    <div className="px-4">
      {items.map((item) => (
        <div key={item._id} className="accordion-item my-2">
          <div
            className={`accordion-title ${
              item._id === activeIndex ? "active" : ""
            }`}
            onClick={() => handleClick(item._id)}
          >
            <div className="studyMaterial_header">
              <p className="my-0 studyMaterial_topic">{item.week}</p>
              <span className="material_title">{item.title}</span>
            </div>
            <div className="studyMaterial_progressbar">
              <span className="small-p">{Math.round(item.completion)} %</span>
              <ProgressBar now={item.completion} visuallyHidden />
            </div>
          </div>
          {item._id === activeIndex && (
            <div className="accordion-content border p-2">
              {videosData.length > 0 && <SketetonMaterial data={videosData} />}
              {err && <p className="red">{err}</p>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default StudyMaterial;
