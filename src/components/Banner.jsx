import React, { useState, useEffect } from "react";
// import { imagesData } from "../utils/data";
import { Link } from "gatsby";
import Slider from "react-slick";
import { FaCamera } from "react-icons/fa";

const Banner = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    // speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    // cssEase: "linear",
  };

  return (
    <div className=" md:pb-5 relative overflow-x-hidden">
      <Slider
        {...settings}
        className="2xl:w-[140%] xl:w-[160%] lg:w-[175%] md:w-[195%] w-full"
      >
        {/* <img className="md:px-2" src={imagesData[9].image} alt="" /> */}
        <img
          className="md:px-2"
          srcSet={`/medici-5.webp, ${"/banner-mobile-2.jpg"} 700w`}
          alt="gorgeous living room real estate photography orlando, fl"
        />
        <img
          className="md:px-2"
          srcSet={`/palm-2.webp, ${"/banner-mobile-1.jpg"} 700w`}
          alt="Beautiful bathroom real estate photography orlando, fl"
        />
        {/* <img
          className="md:px-2"
          srcSet={`${imagesData[15].image}, ${"/banner-mobile-3.jpg"} 700w`}
          alt=""
        /> */}
        {/* <img
          className="md:px-2"
          srcSet={`${imagesData[32].image}, ${"/banner-mobile-4.jpg"} 700w`}
          alt=""
        /> */}
        <img
          className="md:px-2"
          srcSet={`
/iran-home-2.webp, ${"/banner-mobile-6.jpg"} 700w`}
          alt="beautiful living room real estate photography orlando, fl"
        />
        <img
          className="md:px-2"
          srcSet={`/dan-house-2.webp, ${"/banner-mobile-5.jpg"} 700w`}
          alt="gorgeous kitchen real estate flambient photography orlando, fl"
        />
      </Slider>
      <BannerTextSquare />
    </div>
  );
};

const BannerTextSquare = () => {
  return (
    <div className="z-50 2xl:w-[550px] xl:w-[490px] lg:w-[400px] md:w-[370px] md:bg-stone-100 bg-slate-800 md:absolute 2xl:right-[15%] xl:right-[10%] lg:right-[6%] md:right-[5%] 2xl:top-[26%] xl:top-[22%] lg:top-[21%] md:top-[20%] xl:px-10 lg:px-7 md:px-5 px-3">
      <div className="h-full flex flex-col justify-center 2xl:pt-5 xl:pt-6 lg:pt-6 md:pt-6 pt-6 lg:pb-0 md:pb-7 pb-14">
        <FaCamera
          className="2xl:text-6xl 2xl:mb-12 xl:mb-8 lg:text-5xl text-3xl lg:mb-4 md:mb-4 mb-5 md:text-stone-400 text-zinc-100 md:m-0 m-auto"
          aria-label="Camera Icon"
        />
        <p className="informal-font md:text-yellow-500 text-white font-medium md:text-left text-center xl:text-base text-sm md:pb-1 pb-3">
          Orlando Realtors
        </p>
        <h1 className="formal-font font-bold 2xl:text-4xl lg:text-3xl text-2xl md:text-left text-center md:text-slate-700 text-slate-50 mb-6">
          Need Stunning Real Estate Photography To Sell Your Listings Fast?
        </h1>
        <h2 className="informal-font md:text-slate-600 text-white md:text-left text-center xl:text-base text-sm lg:pb-0 md:pb-5 pb-9">
          Next-Day Delivery on Professional Real Estate Photography. We help you
          exceed your sellers' expectations and position you as the top choice
          in your market.
        </h2>
        <div className="md:w-full w-11/12 md:m-0 m-auto 2xl:my-13 xl:my-10 lg:my-8 md:my-1 flex xl:gap-x-5 gap-x-3">
          <Link
            className=" xl:w-[50%] w-[50%] md:py-3 py-2 bg-[#e6b35b] text-center hover:opacity-80"
            title="Book a real estate photography shoot"
            to="https://portal.spiro.media/order/stunning/stunning-angles-order"
          >
            Book a Shoot
          </Link>
          <Link
            className=" xl:w-[30%] w-[50%] md:py-3 py-2 border-2 md:border-slate-700 md:text-slate-700 text-slate-50 text-center hover:bg-slate-900 hover:text-white"
            to="/services"
            title="View our real estate photography services"
          >
            Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
