import React from "react";
import "./wrongPath.css";

function WrongPath() {
  return (
    <div className="wrongpath_topDiv">
      <div>
        <img className="wrongpathImg" src="/images/wrongpath.svg" alt="img" />
      </div>
      <h1 className="text-light-emphasis">Page Not Found</h1>
      <p className="text-light-emphasis">
        Looks like you've taken a wrong turn! Take a different path and keep
        exploring.
      </p>
    </div>
  );
}

export default WrongPath;
