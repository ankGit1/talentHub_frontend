import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./progressBar.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CircularBar() {
  const paramCId = useParams().id;
  const [cStatus, setcStatus] = useState(0);

  useEffect(() => {
    const fetchCourseStatus = () => {
      const localData = JSON.parse(localStorage.getItem("user")).courseArr;
      const findCourse = localData.find((course) => course.cId === paramCId);
      setcStatus(Math.round(findCourse.cCompletion));
    };
    fetchCourseStatus();
  }, []);
  
  return (
    <div className="circularBar_topDiv">
      <CircularProgressbar
        className="circularBar"
        value={cStatus}
        text={`${cStatus} %`}
        circleRatio={0.75}
        styles={buildStyles({
          rotation: 1 / 2 + 1 / 8,
          strokeLinecap: "round",
          textSize: "16px",
          textColor: "white",
          pathColor: "green",
          trailColor: "#52708e",
        })}
      />
    </div>
  );
}

export default CircularBar;
