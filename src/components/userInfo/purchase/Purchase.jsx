import React from "react";
import "./purchase.css";

function Purchase() {
  return (
    <div className="purchase_topDiv p-4">
      <div className="purchase_titleDiv">
        <div>
          <h2 className="fw-bold mb-5">Purchase History</h2>
          <p className="fw-semibold">Welcome Back!</p>
          <p>
            Your Shopping Odyssey Unfolds Here. <br />
            Discover, Remember, and Cherish Your Recent Purchases <br /> on Our
            Platform.
          </p>
        </div>
        <div>
          <img src="/images/edit-purchase.png" alt="img" />
        </div>
      </div>
      <div className="bg-white rounded p-4 my-4">
        <div className="order_title py-3">
          <h4>My Order</h4>
        </div>
        <div className="order_infoDiv py-3">
          <div>
            <p className="fw-semibold">Order Id-</p>
            <p>r85749er147le</p>
          </div>
          <div>
            <p className="fw-semibold">Order Placed-</p>
            <p>25-5-2025</p>
          </div>
          <div>
            <p className="fw-semibold">Total Amount-</p>
            <p>$ 100</p>
          </div>
          <div>
            <p className="fw-semibold">Discount-</p>
            <p>-</p>
          </div>
          <div>
            <p className="fw-semibold">Amount Paid-</p>
            <p>$ 100</p>
          </div>
          <div>
            <p className="fw-semibold">Amount Due</p>
            <p>-</p>
          </div>
          <div>
            <p className="fw-semibold">Tax</p>
            <p>$ 10</p>
          </div>
          <div>
            <p className="fw-semibold">Status</p>
            <p>Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
