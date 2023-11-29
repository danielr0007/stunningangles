import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const RevealerSlider = () => {
  const FIRST_IMAGE = {
    imageUrl: "/poggi-12.jpg",
  };
  const SECOND_IMAGE = {
    imageUrl: "/unedited-livingroom.jpg",
  };

  return (
    <div className="revealer-component-div">
      <ReactBeforeSliderComponent
        firstImage={FIRST_IMAGE}
        secondImage={SECOND_IMAGE}
      />
    </div>
  );
};

export default RevealerSlider;
