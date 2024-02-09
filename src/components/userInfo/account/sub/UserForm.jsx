import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiSendPlaneLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

function UserForm({ info, userId }) {
  const [disValue, setDisValue] = useState(true);
  const [err, setErr] = useState("");
  const [form, setForm] = useState({
    name: info.name,
    lname: info.lname,
    email: info.email,
    education: info.education,
    category: info.category,
    mobile: info.mobile,
    about: info.about,
  });

  const changeForm = (data) => {
    return setForm((prev) => {
      return { ...prev, ...data };
    });
  };

  const editForm = (e) => {
    e.preventDefault();
    setDisValue(!disValue);
    if (!disValue) {
      setForm({
        name: info.name,
        lname: info.lname,
        email: info.email,
        education: info.education,
        category: info.category,
        mobile: info.mobile,
        about: info.about,
      });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`${import.meta.env.VITE_backend}/path/user/update/userData/${userId}`, {
        form,
      })
      .then((res) => {
        setErr("");
        setDisValue(!disValue);
      })
      .catch((err) => {
        setErr("getting difficulty while uploading data");
      });
  };

  return (
    <div>
      {info && (
        <form>
          <div className="p-3">
            <div className="flex_inputDiv">
              <div>
                <p>First-Name</p>
                <input
                  type="text"
                  value={form.name}
                  disabled={disValue}
                  onChange={(e) => changeForm({ name: e.target.value })}
                />
              </div>
              <div>
                <p>Last-Name</p>
                <input
                  type="text"
                  value={form.lname}
                  disabled={disValue}
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
                  disabled={disValue}
                  onChange={(e) => changeForm({ email: e.target.value })}
                />
              </div>
              <div>
                <p>Education</p>
                <input
                  type="text"
                  value={form.education}
                  disabled={disValue}
                  onChange={(e) => changeForm({ education: e.target.value })}
                />
              </div>
            </div>
            <div className="flex_inputDiv">
              <div>
                <p>Category</p>
                <input
                  type="text"
                  value={form.category}
                  disabled={disValue}
                  onChange={(e) => changeForm({ category: e.target.value })}
                />
              </div>
              <div>
                <p>Phone</p>
                <input
                  type="tel"
                  value={form.mobile}
                  disabled={disValue}
                  onChange={(e) => changeForm({ mobile: e.target.value })}
                />
              </div>
            </div>
            <div className="about_inputDiv">
              <div>
                <p>About</p>
                <textarea
                  value={form.about}
                  disabled={disValue}
                  onChange={(e) => changeForm({ about: e.target.value })}
                ></textarea>
              </div>
            </div>
            <div className="edit_userForm">
              <button type="button" onClick={(e) => editForm(e)}>
                {disValue ? <CiEdit /> : <RxCross2 />}
                {disValue ? "edit" : "cancel"}
              </button>
              {!disValue && (
                <button type="submit" onClick={(e) => submitForm(e)}>
                  <RiSendPlaneLine /> Submit
                </button>
              )}
            </div>
          </div>
        </form>
      )}
      {err && <p className="red">{err}</p>}
    </div>
  );
}

export default UserForm;
