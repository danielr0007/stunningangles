import React from "react";

function ProcessStep(props) {
  return (
    <div className="card">
      <div className="image-container">
        <div className="number-circle">{props.data.id}</div>
        <div>
          <img src={props.data.image} alt="icons" />
        </div>
      </div>

      <h4>{props.data.name}</h4>
      <p>{props.data.description}</p>
    </div>
  );
}

export default ProcessStep;
