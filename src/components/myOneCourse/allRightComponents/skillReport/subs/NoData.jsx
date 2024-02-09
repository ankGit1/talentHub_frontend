import React from "react";
import { CgUnavailable } from "react-icons/cg";

function NoData() {
  return (
    <div className="nodata">
      <div className="text-body-secondary">
        <CgUnavailable size={40} />
        <p>no data available</p>
      </div>
      <p>You have to submit projects at the end ot the course</p>
    </div>
  );
}

export default NoData;
