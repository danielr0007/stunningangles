import React from "react";

function LeadForm() {
  return (
    <div className="lead-form-container">
      <h3>Claim Your Promo Code</h3>
      <div className="lead-form-div">
        <div className="firstname-div">
          <label htmlFor="firstname">First Name</label>
          <input type="text" />
        </div>
        <div className="lastname-div">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" />
        </div>
        <div className="email-div">
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div className="phone-div">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" />
        </div>
        <div className="postalcode-div">
          <label htmlFor="postalcode">Postal Code</label>
          <input type="text" />
        </div>
        <div className="agree-div">
          <input type="checkbox" className="checkbox" value="true" />
          <span>
            By checking the box, you expressly consent to ShowingTime+, directly
            or by third parties acting on its behalf, sending marketing messages
            (including text messages and calls) to the number you provide above,
            using an automated telephone dialing system or pre-recorded or
            artificial voices, related to the product or service you are
            inquiring about. Your consent is not required to obtain or purchase
            any goods or services.
          </span>
          <span class="hs-form-required">*</span>
        </div>
        <button>Claim Special Offer</button>
      </div>
    </div>
  );
}

export default LeadForm;
