import React from "react";
import { TfiClose } from "react-icons/tfi";

function FullScreenPopUp(props) {
  return (
    <div className="overlay-div ">
      <div className="outer-div ">
        <div className="background-div">
          {/* CLOSE..................................... */}
          <div
            onClick={() => {
              props.setShowServiceAreaFunction(false);
            }}
            className="close-button mb-8 flex justify-end"
          >
            <TfiClose className="icon" />
          </div>
          {/* TITLE....................................... */}
          <h1 style={{ fontFamily: "Josefin Sans" }}>Service Area Map</h1>
          {/* Map................................... */}
          <div className="map-div">
            <img src="/service-area-map.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenPopUp;
