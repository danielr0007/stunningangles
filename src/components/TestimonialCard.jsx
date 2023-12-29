import React from "react";
import { FaStar } from "react-icons/fa";

function TestimonialCard(props) {
  console.log(props.testi.name);
  return (
    <div className="testi-card">
      <div className="pic-container">
        <img src={props.testi.image} alt="" />
      </div>
      <h4>{props.testi.name}</h4>
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p>{props.testi.message}</p>
    </div>
  );
}

export default TestimonialCard;
