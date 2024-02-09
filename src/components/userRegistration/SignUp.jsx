import React, { useState } from "react";
import "./userRegistration.css";
import { FaAddressCard } from "react-icons/fa6";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Form } from "react-bootstrap";
import axios from "axios";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    lname: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [err, setErr] = useState("");
  const [mes, setMes] = useState("");
  const [disBtn, setDisBtn] = useState(false);

  const fieldChange = (data) => {
    return setForm((prev) => {
      return { ...prev, ...data };
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setDisBtn(true);
    await axios
      .post(`${import.meta.env.VITE_backend}/path/user/signup`, form)
      .then((res) => {
        setErr("");
        setMes("You can login now!");
        setDisBtn(false);
        setForm({ name: "", lname: "", email: "", password: "", mobile: "" });
      })
      .catch((error) => {
        setMes("");
        setDisBtn(false);
        if (error.response.status === 422) {
          setErr(error.response.data);
        } else {
          setErr("something went wrong, please try again");
        }
      });
  };
  return (
    <div className="registration_login py-2">
      <div className="registrationHome_welcomeDiv mt-3">
        <h3 className="fw-bold">Sign-up</h3>
        <FaAddressCard size={30} color="gold" />
      </div>
      <p className="small-p mb-2">
        Sign-up to join our community and connect with us
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
            Sign-up and Refer to win iphone15, MacBook M1, and more.
          </p>
        </div>
      </div>
      <form className="my-3 py-3" onSubmit={submitForm}>
        <FloatingLabel
          controlId="floatingName"
          label="First Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="john"
            value={form.name}
            onChange={(e) => fieldChange({ name: e.target.value })}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatinglName"
          label="Last Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Doe"
            value={form.lname}
            onChange={(e) => fieldChange({ lname: e.target.value })}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
          <Form.Control
            type="email"
            placeholder="email"
            value={form.email}
            onChange={(e) => fieldChange({ email: e.target.value })}
          />
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          controlId="floatingPassword2"
          label="Password"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => fieldChange({ password: e.target.value })}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingNumber"
          label="Mobile Number"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="98765*****"
            value={form.mobile}
            onChange={(e) => fieldChange({ mobile: e.target.value })}
          />
        </FloatingLabel>
        {mes && <p className="green">{mes}</p>}
        {err && <p className="red">{err}</p>}
        <button
          type="submit"
          className="registrationHome_button"
          disabled={disBtn}
        >
          Sign up
        </button>
      </form>
      <div className="vsmall-p text-center py-2">
        © 2023 talenthut. All Rights Reserved.
      </div>
    </div>
  );
}

export default SignUp;
