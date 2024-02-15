import React, { useState } from "react";
import "./userRegistration.css";
import { FaHandSparkles } from "react-icons/fa";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const fieldChange = (data) => {
    return setForm((prev) => {
      return { ...prev, ...data };
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post(`${import.meta.env.VITE_backend}/path/user/login`, form)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.info));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        setErr("");
        navigate("/learner");
      })
      .catch((err) => {
        setErr(err.response.data);
      });
  };

  return (
    <div className="registration_login py-2">
      <div className="registrationHome_welcomeDiv mt-3">
        <h3 className="fw-bold">Welcome</h3>
        <FaHandSparkles size={30} color="gold" />
      </div>
      <p className="small-p mb-2 ">
        Log in and kickstart your immersive learning journey
      </p>
      <div className="registrationHome_slidingImages p-2 my-4">
        <img
          className="slidingImg"
          src="/images/slidingImages.gif"
          alt="sliding-Images"
        />
        <div>
          <h6 className="fw-bold">Refer & Win</h6>
          <p className="mb-0 smallw-p">
            Log in and Refer to win iphone15, MacBook M1, and more.
          </p>
        </div>
      </div>
      <form className="my-3 py-3" onSubmit={submitForm}>
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control
            type="email"
            placeholder="email"
            value={form.email}
            onChange={(e) => fieldChange({ email: e.target.value })}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword1" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => fieldChange({ password: e.target.value })}
          />
        </FloatingLabel>

        {err && <p className="red">{err}</p>}

        <button type="submit" className="registrationHome_button mt-3">
          Login
        </button>
      </form>
      <div className="vsmall-p text-center py-2">
        © 2024 talenthub. All Rights Reserved.
      </div>
    </div>
  );
}

export default Login;
