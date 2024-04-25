import React from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { RiUserShared2Fill } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import axios from "axios";

function UserHome() {
  const fetchName = JSON.parse(localStorage.getItem("user"))?.name;
  const initials = fetchName?.charAt(0).toUpperCase();
  const logoutUser = () => {
    const gLogout = async () => {
      try {
        await axios.post(`${import.meta.env.VITE_backend}/logout`);
      } catch (error) {
        console.log("something went wrong");
      }
    };
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    gLogout();
  };
  return (
    <div className="navCoinDiv showShadow">
      <button className="navBtn4 fw-semibold">
        {initials ? initials : "U"}
      </button>
      <div className="navCoinShadowDiv p-3">
        <h5 className="b_border pb-3">{`Hello, ${
          initials + fetchName?.slice(1)
        }`}</h5>
        <Link to="/learner/account">
          <p className="hoverP small-p m-0 p-1">
            <MdAccountCircle className="rightMargin" size={16} /> My Account
          </p>
        </Link>
        <Link to="/learner/purchase">
          <p className="hoverP small-p m-0 p-1">
            <MdHistory className="rightMargin" size={16} /> Purchase History
          </p>
        </Link>
        <Link to="help-support">
          <p className="hoverP small-p m-0 p-1">
            <MdSupportAgent className="rightMargin" size={16} /> Help and
            Support
          </p>
        </Link>
        <Link to="refer">
          <p className="hoverP small-p m-0 p-1">
            <RiUserShared2Fill className="rightMargin" size={16} /> Refer and
            Earn
          </p>
        </Link>
        <Link to="/">
          <p className="hoverP small-p m-0 p-1" onClick={logoutUser}>
            <MdOutlineLogout className="rightMargin" size={16} /> Logout
          </p>
        </Link>
      </div>
    </div>
  );
}

export default UserHome;
