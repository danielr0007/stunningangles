import React from "react";

function ServiceCardComponent(props) {
  return (
    <div className="service-card-container">
      <div className="card-image-container">
        <img src={props.cardData.image} alt="" />
      </div>
      <div className="card-text-container">
        <h4>
          <span>{props.cardData.firstName}</span> {props.cardData.lastName}
        </h4>
        <p>{props.cardData.description}</p>
        <a href="">Read More...</a>
      </div>
    </div>
  );
}

export default ServiceCardComponent;
