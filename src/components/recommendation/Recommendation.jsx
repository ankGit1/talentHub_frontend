import React from "react";
import "./recommendation.css";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

function Recommendation() {
  return (
    <div className="py-4 px-4">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Recommended for you</Accordion.Header>
          <Accordion.Body>
            <div className="recommendImgDiv pb-2">
              <Link to="refer">
                <img src="/images/rec1.svg" alt="img" />
              </Link>
              <Link to="library">
                <img src="/images/rec2.svg" alt="img" />
              </Link>
              <Link to="library">
                <img src="/images/rec3.svg" alt="img" />
              </Link>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Recommendation;
