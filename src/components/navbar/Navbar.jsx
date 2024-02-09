import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { HiHome } from "react-icons/hi2";
import { TbNotes } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { ImBooks } from "react-icons/im";
import GameInfo from "../gamifiedZone/GameInfo";
import Notification from "../notification/Notification";
import UserHome from "../userInfo/UserHome";
import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navbar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="py-2 px-4 navTopDiv">
      <div className="logoDiv">
        <img className="logoImg" src="/images/logo.png" alt="logo" />
        <span>
          <b>talent</b>hub <br />
          sigma
        </span>
      </div>
      <div className="navLinksDiv">
        <ul className="navLinksUl p-0 m-0">
          <li>
            <Link to="/learner">
              <HiHome size={18} /> Home
            </Link>
          </li>
          <li>
            <Link to="courses">
              <TbNotes size={18} /> Courses
            </Link>
          </li>
          <li>
            <Link to="calender">
              <SlCalender size={18} /> Calender
            </Link>
          </li>
          <li>
            <Link to="library">
              <ImBooks size={18} /> Library
            </Link>
          </li>
        </ul>
      </div>
      <div className="navBtnDiv">
        <Link to="refer">
          <button className="navBtn1">Refer and Earn</button>
        </Link>
        <GameInfo />
        <Notification />
        <UserHome />
      </div>
      <div className="navBtn5">
        <Button variant="dark" className="rounded-circle" onClick={handleShow}>
          <IoReorderThree />
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>John Doe</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="openNavLinksDiv">
              <Link className="hoverP p-2" to="/learner">
                Home
              </Link>
              <Link className="hoverP p-2" to="courses">
                Courses
              </Link>
              <Link className="hoverP p-2" to="calender">
                Calender
              </Link>
              <Link className="hoverP p-2" to="library">
                Library
              </Link>
            </div>
            <div className="openNavBtnDiv">
              <Link className="hoverP p-2" to="gamified">
                Learn Gamified Learning
              </Link>
              {/* <Link className="hoverP p-2">Notification</Link> */}
              <Link className="hoverP p-2" to="/learner/account">
                My Acoount
              </Link>
              <Link className="hoverP p-2" to="/learner/purchase">
                Purchase History
              </Link>
              <Link className="hoverP p-2" to="help-support">
                Help and Support
              </Link>
              <Link className="hoverP p-2" to="refer">
                Refer and Earn
              </Link>
              <Button onClick={logoutUser}>Logout</Button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default Navbar;
