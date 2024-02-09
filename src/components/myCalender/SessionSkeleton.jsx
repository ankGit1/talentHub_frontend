import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { MdAccessTime } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";

function SessionSkeleton({ info }) {
  const { _id, date, month, time, courseName, title } = info;
  return (
    <div className="myCalender_events py-2 b_border">
      <div className="myCalender_date">
        <Card style={{ width: "4rem" }} className="border-0">
          <ListGroup>
            <ListGroup.Item className="p-1 sesSkeleton_month">
              {month}
            </ListGroup.Item>
            <ListGroup.Item className="p-1 sesSkeleton_date">
              {date}
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <div className="myCalender_text">
          <p className="mb-0 lineDot">
            <MdAccessTime size={18} />
            <span className="mx-2 small-p fw-semibold">{time}</span>
          </p>
          <p className="my-1 text-body-secondary small-p lineDot">
            {courseName}
          </p>
          <p className="mb-1 text-body-secondary small-p">{title}</p>
        </div>
      </div>
      <div>
        <a href="https://zoom.us/join">
          <button className="joinBtn small-p">
            <CiVideoOn /> join
          </button>
        </a>
      </div>
    </div>
  );
}

export default SessionSkeleton;
