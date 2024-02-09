import React, { useEffect, useState } from "react";
import Chart from "./subs/Chart";
import "./skillReport.css";
import SkillTabs from "./subs/SkillTabs";
import axios from "axios";

function SkillReport() {
  const [materialData, setMaterialData] = useState([]);
  const [err, setErr] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")).id;
    const fetchData = async () => {
      await axios
        .get(
          `${import.meta.env.VITE_backend}/path/user/get/skill-report/${user}`
        )
        .then((res) => {
          setErr("");
          setMaterialData(res.data);
        })
        .catch((err) => {
          setErr("getting difficulty while fetching data");
        });
    };
    if (user) fetchData();
  }, []);
  return (
    <div>
      <div className="chartWrapper">
        <div className="skillReport_chartDiv">
          {materialData.length > 0 && !err ? (
            <Chart passData={materialData} />
          ) : (
            <p className="my-5 fw-semibold">
              Unlock your skill report by taking action! Haven't watched any
              videos or completed assignments and assessments yet? Start now to
              see your progress in the Skill Report Section!
            </p>
          )}
          {err && <p className="red">{err}</p>}
        </div>
      </div>
      <SkillTabs />
    </div>
  );
}

export default SkillReport;
