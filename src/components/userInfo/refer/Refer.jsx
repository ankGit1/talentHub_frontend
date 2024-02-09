import React from "react";
import "./refer.css";

function Refer() {
  return (
    <div className="p-4 refer_topDiv">
      <div className="bg-white p-5 referSize">
        <div className="refer_btnDiv">
          <img src="/images/referandearn.png" alt="img" />
          <div className="my-3">
            <a href="https://accounts.google.com">
              <button className="btn btn-danger">Refer and Earn</button>
            </a>
          </div>
        </div>
        <h4 className="fw-bold">It's easy to get started</h4>
        <div className="refer_infoDiv my-4">
          <div>
            <img src="/images/cash.png" alt="img" className="my-3" />
            <p>
              After purchasing your friend will get up to 10% of their course
              value as CashBack in their account.
            </p>
          </div>
          <div>
            <img src="/images/cash.png" alt="img" className="my-3" />
            <p>
              You get up to 10% as CashBack when your friends completes their
              course
            </p>
          </div>
          <div>
            <img src="/images/cash.png" alt="img" className="my-3" />
            <p>
              Start entering your friends by entering their email address or
              share your links via social media
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Refer;
