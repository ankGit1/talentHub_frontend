import React from "react";
import Accordion from "react-bootstrap/Accordion";

function TabInfo({ idata }) {
  const { hours, info, tabName, videoNum } = idata;
  return (
    <div className="py-4 px-4">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{tabName}</Accordion.Header>
          <Accordion.Body>
            <div className="pb-2 text-white small-p">
              <p>{info}</p>
              <div className="tabInfo_flex">
                <span>{hours}</span>
                <span>{videoNum}</span>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TabInfo;
