import React from "react";
import { useState } from "react";
import { imagesData } from "../utils/data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function GeneralExpandedGallery(props) {
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
    <div className="slider-general">
      <FaArrowAltCircleLeft
        className="left-arrow-general"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="right-arrow-general"
        onClick={nextSlide}
      />
      {imagesData.map((Data, index) => {
        return (
          <div
            className={
              index === current ? "slide-active-general" : "slide-general"
            }
            key={index}
          >
            {index === current && (
              <img
                src={Data.image}
                alt="real estate views"
                className="image-general"
              />
            )}
          </div>
        );
      })}
      <button
        onClick={() => showExpandedGalleryFunction(false)}
        className="close-btn-general"
      >
        Close
      </button>
    </div>
  );
}

export default GeneralExpandedGallery;
