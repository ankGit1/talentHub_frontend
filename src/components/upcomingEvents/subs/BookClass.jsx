import React, { useState } from "react";
import "./bookClass.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

function BookClass() {
  const classInfo = useLocation().state;
  const [regData, setRegData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const changeEvent = (data) => {
    return setRegData((prev) => {
      return { ...prev, ...data };
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${import.meta.env.VITE_backend}/path/seminarbook/post/register`,
        regData
      )
      .then((res) => {
        setErr("");
        setMsg(
          "Events details will be sent to your email shortly; don't forget to join!"
        );
        setRegData({ name: "", email: "", phone: "" });
      })
      .catch((err) => {
        setMsg("");
        setErr("Encountering issues sending your data; please try again");
      });
  };

  return (
    <div>
      <div className="bookClass_headingDiv py-4">
        <div className="bookClass_imgDiv pb-2">
          <h5 className="text-light-emphasis">Session Speaker</h5>
          <img src={classInfo.eImage} alt="img" />
          <h5 className="mt-2 fw-semibold">{classInfo.eSpeaker}</h5>
          <p>{classInfo.eIntro}</p>
          <p className="small-p">
            {classInfo.eExperience}+ years of experience
          </p>
        </div>
        <div className="bookClass_formDiv">
          <div className="p-3 bookClass_formContainer">
            <form onSubmit={(e) => submitForm(e)}>
              <div className="bookClass_regTitle">
                <h4 className="fw-bold">Registration Form</h4>
              </div>
              <p className="mb-1">Name-</p>
              <input
                className="mb-3"
                type="text"
                value={regData.name}
                onChange={(e) => changeEvent({ name: e.target.value })}
                required
              />
              <p className="mb-1">Email-</p>
              <input
                className="mb-3"
                type="email"
                value={regData.email}
                onChange={(e) => changeEvent({ email: e.target.value })}
                required
              />
              <p className="mb-1">Phone Number-</p>
              <input
                className="mb-3"
                type="text"
                value={regData.phone}
                onChange={(e) => changeEvent({ phone: e.target.value })}
                required
              />
              {msg && <p className="green">{msg}</p>}
              {err && <p className="red">{err}</p>}
              <button type="submit" className="btn btn-danger">
                Book a Class
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookClass;
