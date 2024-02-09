import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    lname: "",
    email: "",
    phone: "",
    sub: "",
    mes: "",
  });
  const [err, setErr] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const changeForm = (data) => {
    return setForm((prev) => {
      return { ...prev, ...data };
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post(`${import.meta.env.VITE_backend}/path/support/post/help`, form)
      .then((res) => {
        setErr("");
        setForm({
          name: "",
          lname: "",
          email: "",
          phone: "",
          sub: "",
          mes: "",
        });
        setSuccessMsg(
          "Your message has been received. Our team is on it, and we’ll be in touch soon."
        );
      })
      .catch((err) => {
        setSuccessMsg("");
        setErr(
          err.response.data
            ? err.response.data
            : "We are experiencing difficulty sending your query. Please try again later."
        );
      });
  };

  return (
    <div className="contact_topDiv p-3 my-4">
      <form onSubmit={submitForm}>
        <div className="p-3">
          <div className="flex_inputDiv">
            <div>
              <p>First-Name</p>
              <input
                type="text"
                value={form.name}
                onChange={(e) => changeForm({ name: e.target.value })}
              />
            </div>
            <div>
              <p>Last-Name</p>
              <input
                type="text"
                value={form.lname}
                onChange={(e) => changeForm({ lname: e.target.value })}
              />
            </div>
          </div>
          <div className="flex_inputDiv">
            <div>
              <p>Email</p>
              <input
                type="email"
                value={form.email}
                onChange={(e) => changeForm({ email: e.target.value })}
              />
            </div>
            <div>
              <p>Phone</p>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => changeForm({ phone: e.target.value })}
              />
            </div>
          </div>
          <div className="flex_inputDiv">
            <div>
              <p>Subject</p>
              <input
                type="text"
                value={form.sub}
                onChange={(e) => changeForm({ sub: e.target.value })}
              />
            </div>
          </div>
          <div className="about_inputDiv">
            <div>
              <p>Message</p>
              <textarea
                value={form.mes}
                onChange={(e) => changeForm({ mes: e.target.value })}
              ></textarea>
            </div>
          </div>
          {err && <p className="red">{err}</p>}
          {successMsg && <p className="green">{successMsg}</p>}
          <div className="edit_userForm">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <div className="contact_rside p-3">
        <div>
          <MdEmail />
          <p>support@talenthub.com</p>
        </div>
        <div>
          <FaPhoneAlt />
          <p>+91 9876543210</p>
        </div>
        <div>
          <IoLocation />
          <p>some where in the world.</p>
        </div>
        <div>
          <a href="https://www.linkedin.com/">
            <FaLinkedin className="mx-1" />
          </a>
          <a href="https://twitter.com/">
            <FaSquareXTwitter className="mx-1" />
          </a>
          <a href="https://www.facebook.com/">
            <FaMeta className="mx-1" />
          </a>
          <p>Social Profiles</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
