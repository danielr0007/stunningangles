import React from "react";
import { TfiClose } from "react-icons/tfi";

function FormFeedback(props) {
  return (
    <div className="formfeedback-overlay-div">
      <div className="formfeedback-outer-div">
        <div className="formfeedback-background-div">
          {/* CLOSE..................................... */}
          <div
            onClick={() => {
              props.setShowFormFeedbackFunction(false);
            }}
            className="formfeedback-close-button mb-8 flex justify-end"
          >
            <TfiClose className="icon" />
          </div>
          {/* TITLE....................................... */}
          {/* <h2>Service Area Map</h2> */}
          {/* Map................................... */}
          <p>{props.serverFormAnswer}</p>
        </div>
      </div>
    </div>
  );
}

export default FormFeedback;
