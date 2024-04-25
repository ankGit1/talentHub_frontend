import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CardProgress({ per }) {
  return (
    <div style={{ width: "50px" }}>
      <CircularProgressbar
        value={per}
        text={`${Math.round(per) || 0}%`}
        styles={buildStyles({
          strokeLinecap: "round",
          textSize: "24px",
          textColor: "green",
          pathColor: "#121b37",
          trailColor: "#e5e9fc",
        })}
      />
    </div>
  );
}

export default CardProgress;
