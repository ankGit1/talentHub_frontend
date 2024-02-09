import React from "react";
import "./topbar.css";
import { IoMdTime } from "react-icons/io";
import { MdAssignment } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { AiOutlineRise } from "react-icons/ai";
import CircularBar from "../../ProgressBar/CircularBar";
import { useParams } from "react-router-dom";
import { useGetCourseQuery } from "../../redux/rtk-query/courseRtk";

function TopBar() {
  const paramCId = useParams().id;
  const { data: courseInfo, error, isLoading } = useGetCourseQuery(paramCId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: Sorry, we are experiencing difficulty fetching course data
      </div>
    );
  }

  return (
    <div className="topbarTop p-3">
      <>
        <span className="small-p p-2 rounded-2 topBarCourse_type">
          {courseInfo.type}
        </span>
        <div className="topbar_contain">
          <div>
            <h3 className="mt-3">{courseInfo.name}</h3>
            <p className="smallw-p py-2">{courseInfo.about}</p>
            <div>
              <span className="smallw-p topbar_courseDetails">
                <IoMdTime size={18} /> {courseInfo.duration}
              </span>
              <span className="smallw-p topbar_courseDetails">
                <FaFileAlt size={18} /> {courseInfo.assessments} Assessments
              </span>
              <span className="smallw-p topbar_courseDetails">
                <MdAssignment size={18} /> {courseInfo.assignments} Assignments
              </span>
              <span className="smallw-p topbar_courseDetails">
                <FaLaptopCode size={18} /> {courseInfo.handsOn} Hands-On
              </span>
              <span className="smallw-p topbar_courseDetails">
                <AiOutlineRise size={18} /> {courseInfo.level}
              </span>
            </div>
          </div>
          <div className="topBar_progressDiv">
            <p>Your Performance Status</p>
            <CircularBar />
          </div>
        </div>
      </>
    </div>
  );
}

export default TopBar;
