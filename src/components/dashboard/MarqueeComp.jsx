import React from "react";
import Marquee from "react-fast-marquee";
import { GoPeople } from "react-icons/go";

function MarqueeComp() {
  return (
    <div className="marqueeTop p-4">
      <p className="fw-bold">
        <span className="myCoursesLogo rounde-circle">
          <GoPeople size={18} />
        </span>
        Our Partners
      </p>
      <Marquee className="morquee">
        <img src="./images/company1.png" alt="img" />
        <img src="./images/company2.png" alt="img" />
        <img src="./images/company3.png" alt="img" />
        <img src="./images/company4.png" alt="img" />
        <img src="./images/company5.png" alt="img" />
        <img src="./images/company6.png" alt="img" />
        <img src="./images/company7.png" alt="img" />
        <img src="./images/company8.png" alt="img" />
        <img src="./images/company9.png" alt="img" />
        <img src="./images/company10.png" alt="img" />
        <img src="./images/company11.png" alt="img" />
        <img src="./images/company12.png" alt="img" />
      </Marquee>
    </div>
  );
}

export default MarqueeComp;
