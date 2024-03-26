import React, { useEffect } from "react";

function Cancel() {
  useEffect(() => {
    localStorage.removeItem("key");
    localStorage.removeItem("addCourse");
  }, []);
  return (
    <div className="paymentStaus_topDiv px-2">
      <img src="/images/failed.gif" alt="gif" />
      <h3>Payment failed</h3>
      <p>Don't worry. We will try your payment again in next few days</p>
    </div>
  );
}

export default Cancel;
