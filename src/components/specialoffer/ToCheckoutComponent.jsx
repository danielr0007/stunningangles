import React, { useState, useEffect } from "react";
import { useLocation } from "@reach/router";

const api = "https://stunning-backend.onrender.com/create-checkout-session";
// const testApi = "http://localhost:3000/create-checkout-session";

const ProductDisplay = () => (
  <div>
    {/* <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div> */}
    <form action={api} method="POST">
      <button
        className="bg-[#f64a64] capitalize m-auto px-20 py-5 text-lg mb-6 hover:bg-[#e6b35b] transition-all duration-250 ease-in"
        type="submit"
      >
        Get my bundle deal now
      </button>
    </form>
  </div>
);

const Message = ({ message }) => (
  <div>
    <p>{message}</p>
  </div>
);

const ToCheckoutComponent = () => {
  const [message, setMessage] = useState("");
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    // if (query.get("canceled")) {
    //   setMessage(
    //     "Order canceled -- continue to shop around and checkout when you're ready."
    //   );
    // }
  }, [location.search]);

  return message ? <Message message={message} /> : <ProductDisplay />;
};

export default ToCheckoutComponent;
