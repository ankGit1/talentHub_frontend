import axios from "axios";
import React from "react";

function GoogleLogin() {
  const handleLogin = async () => {
    window.location.href = `${import.meta.env.VITE_backend}/auth/google`;
  };

  return (
    <button className="googleBtn" onClick={handleLogin}>
      <div className="googleImgDiv">
        <img src="./images/glogo.png" alt="logo" />
      </div>
      <div className="googleTextDiv">Sign In with Google</div>
    </button>
  );
}

export default GoogleLogin;
