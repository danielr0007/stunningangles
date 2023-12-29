import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { imagesData } from "../utils/data";
import ExpandedGallerySlider from "./ExpandedGallerySlider";
import LazyLoad from "react-lazy-load";

function GallerySlider() {
  const [showExpandedGallery, setShowExpandedGallery] = useState(false);
  const [clickedImageId, setClickedImageId] = useState(null);
  // const [width, setWidth] = useState(null);

  useEffect(() => {
    if (showExpandedGallery) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showExpandedGallery]);

  function expandImage(id) {
    setShowExpandedGallery(true);
    setClickedImageId(id);
  }

  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    // cssEase: "linear",
  };

  return (
    <div className="container">
      <Slider {...settings}>
        <LazyLoad offset={200} once>
          <div className="images-container">
            {imagesData.slice(0, 9).map((imagesData, index) => (
              <img
                alt="Homes"
                style={{
                  display: "grid !important",
                  border: "solidGreen",
                  gridTemplateColumns:
                    "repeat(4, minmax(300px, 600px)) !important",
                }}
                className="imagess"
                onClick={() => {
                  expandImage(imagesData.id);
                }}
                key={imagesData.id}
                src={imagesData.image}
              />
            ))}
          </div>
        </LazyLoad>
        <LazyLoad offset={200} once>
          <div className="images-container">
            {imagesData.slice(9, 18).map((imagesData, index) => (
              <img
                alt="Homes"
                style={{
                  display: "grid !important",
                  border: "solidGreen",
                  gridTemplateColumns:
                    "repeat(4, minmax(300px, 600px)) !important",
                }}
                className="imagess"
                onClick={() => {
                  expandImage(imagesData.id);
                }}
                key={imagesData.id}
                src={imagesData.image}
              />
            ))}
          </div>
        </LazyLoad>
        <LazyLoad offset={200} once>
          <div className="images-container">
            {imagesData.slice(18, 27).map((imagesData, index) => (
              <img
                alt="Homes"
                style={{
                  display: "grid !important",
                  border: "solidGreen",
                  gridTemplateColumns:
                    "repeat(4, minmax(300px, 600px)) !important",
                }}
                className="imagess"
                onClick={() => {
                  expandImage(imagesData.id);
                }}
                key={imagesData.id}
                src={imagesData.image}
              />
            ))}
          </div>
        </LazyLoad>
        {/* <div className="images-container">
          {imagesData.slice(27, 36).map((imagesData, index) => (
            <img
              style={{
                display: "grid !important",
                border: "solidGreen",
                gridTemplateColumns:
                  "repeat(4, minmax(300px, 600px)) !important",
              }}
              className="imagess"
              onClick={() => {
                expandImage(imagesData.id);
              }}
              key={imagesData.id}
              src={imagesData.image}
            />
          ))}
        </div>
        <div className="images-container">
          {imagesData.slice(36, 45).map((imagesData, index) => (
            <img
              style={{
                display: "grid !important",
                border: "solidGreen",
                gridTemplateColumns:
                  "repeat(4, minmax(300px, 600px)) !important",
              }}
              className="imagess"
              onClick={() => {
                expandImage(imagesData.id);
              }}
              key={imagesData.id}
              src={imagesData.image}
            />
          ))}
        </div> */}
      </Slider>
      {showExpandedGallery && (
        <ExpandedGallerySlider
          expandedGallery={setShowExpandedGallery}
          clickedImageId={clickedImageId}
        />
      )}
    </div>
  );
}

export default GallerySlider;
