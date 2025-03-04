import React from 'react';

const CheckOut = () => {
  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <div className="checkout-form">
        <label className="checkout-label">Full Name</label>
        <input type="text" className="checkout-input" placeholder="Enter your name" />

        <label className="checkout-label">Email Address</label>
        <input type="email" className="checkout-input" placeholder="Enter your email" />

        <label className="checkout-label">Shipping Address</label>
        <textarea className="checkout-textarea" placeholder="Enter your address"></textarea>

        <label className="checkout-label">Payment Method</label>
        <select className="checkout-select">
          <option>Credit Card</option>
          <option>PayPal</option>
          <option>Bank Transfer</option>
        </select>

        <button className="checkout-button">Place Order</button>
      </div>
    </div>
  );
};

export default CheckOut;
