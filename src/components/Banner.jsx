import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "gatsby";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define your slides with headline, subheadline, button text, and image URL
  const slides = [
    {
      headline: "Elevate Your Brand with High-Quality Real Estate Photography",
      subheadline:
        "Make a lasting impression and establish your reputation as a top-tier realtor with stunning visuals.",
      buttonText: "Button 1",
      imageUrl: "/banner1.jpg", // Replace with the URL of your first image
    },
    {
      headline:
        "Unlock the Full Potential of Your Listings: Professional Real Estate Photography",
      subheadline:
        "Discover the power of compelling visuals that attract more buyers and help you sell properties faster.",
      buttonText: "Button 2",
      imageUrl: "/banner2.jpg", // Replace with the URL of your second image
    },
    // Add more slides as needed
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000); // Change slide every 5 seconds

    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="banner-image-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgb(26, 47, 71, 1) 10%, rgba(0, 0, 0, .7) 59%, rgba(0, 0, 0, .7) 100%),
            url(${slide.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: currentSlide === index ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          className={currentSlide === index ? "active" : ""}
        >
          <div className="banner-text-container">
            <h1>{slide.headline}</h1>
            <h2>{slide.subheadline}</h2>
            <div>
              <Link to="/#booking">Book A Shoot</Link>
              <Link to="/services">See Services</Link>
            </div>
          </div>

          <button className="banner-next" onClick={nextSlide}>
            <FaArrowAltCircleRight />
          </button>
          <button className="banner-previous" onClick={prevSlide}>
            <FaArrowAltCircleLeft />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Banner;
