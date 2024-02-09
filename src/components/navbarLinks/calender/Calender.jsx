import React, { useEffect, useState } from "react";
import "./calender.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";

const Calender = () => {
  const [eventDate, setEventDate] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const courseId = JSON.parse(localStorage.getItem("user"))?.courseArr[0]
      ?.cId;
    const fetchCalender = async () => {
      await axios
        .get(
          `${
            import.meta.env.VITE_backend
          }/path/calender/get/all-events/${courseId}`
        )
        .then((res) => {
          setErr("");
          const formatDate = res.data.map((ses) => {
            return { title: ses.title, start: ses.start };
          });
          setEventDate(formatDate);
        })
        .catch((err) => {
          setErr("something went wrong, please try again later.");
        });
    };

    if (courseId) fetchCalender();
  }, []);

  return (
    <>
      <div className="p-4 calenderDiv">
        {eventDate.length > 0 && !err ? (
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={eventDate}
            height={"100vh"}
          />
        ) : (
          <h5 className="my-3 text-light-emphasis">
            Currently you don't have any Events. Add new courses from Library,
            and your events will showcase here.
          </h5>
        )}
        {err && <p className="red">{err}</p>}
      </div>
    </>
  );
};

export default Calender;
