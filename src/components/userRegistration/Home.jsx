import React, { useState } from "react";
import "./userRegistration.css";
import Login from "./Login";
import SignUp from "./SignUp";

function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSignUpClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`registrationHome_topDiv ${isFlipped ? "flipped" : ""}`}>
      <div className="registrationHome_formDiv px-2">
        <div className="main-container">
          <div className="registrationHome_nav py-3">
            <div>
              <img className="logoImg" src="/images/logo.png" alt="logo" />
              <h5 className="mb-0">
                <b>talent</b>hub <br />
                sigma
              </h5>
            </div>
            <p onClick={handleSignUpClick}>{isFlipped ? "Login" : "Sign-up"}</p>
          </div>
          <div className="flip-card">
            <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
              <div className="flip-card-front">
                <Login />
              </div>
              <div className="flip-card-back">
                <SignUp />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="registrationHome_imageDiv">
        <img src="/images/studyHome.svg" alt="image" />
      </div>
    </div>
  );
}

export default Home;
