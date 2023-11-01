import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { imagesData } from "../utils/data";

const ExpandedGallerySlider = (props) => {
  const showExpandedGalleryFunction = props.expandedGallery;
  const clickedImageId = props.clickedImageId;

  const [current, setCurrent] = useState(Number(clickedImageId));

  const length = imagesData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(imagesData) || imagesData.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {imagesData.map((Data, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={Data.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
      <button
        onClick={() => showExpandedGalleryFunction(false)}
        className="close-btn"
      >
        Close
      </button>
    </div>
  );
};

export default ExpandedGallerySlider;
