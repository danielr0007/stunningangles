import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imagesData } from "../utils/data";

function ServicesPhotoGallery() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  // Checks for screen size. If ipad or phone then expanded slider is not available
  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1385) {
      setSlidesToShow(3);
    } else if (screenWidth > 775) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    // pauseOnHover: false,
    // cssEase: "linear",
  };
  return (
    <div className="containerr">
      <Slider {...settings}>
        <img className="slider-image" src={imagesData[0].image} alt="" />
        <img className="slider-image" src={imagesData[1].image} alt="" />
        <img className="slider-image" src={imagesData[2].image} alt="" />
        <img className="slider-image" src={imagesData[3].image} alt="" />
      </Slider>
    </div>
  );
}

export default ServicesPhotoGallery;
