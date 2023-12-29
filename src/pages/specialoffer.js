import React, { useState, useEffect } from "react";
import { process } from "../utils/data";
import ProcessStep from "../components/ProcessStep";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imagesData } from "../utils/data";
import LeadForm from "../components/specialoffer/LeadForm";
import { Link } from "gatsby";
import { FaUserCheck } from "react-icons/fa";
import { PiTelevisionSimple } from "react-icons/pi";
// import LazyLoad from "react-lazy-load";

function SpecialOffer() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 775) {
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
    <>
      {/* HEADER.......................................... */}
      {/* HEADER.......................................... */}
      {/* HEADER.......................................... */}
      {/* HEADER.......................................... */}
      <div className="special-offer-header">
        <div>
          <img src="/logo.png" alt="" />
        </div>
      </div>

      {/* HERO SECTION.................................. */}
      {/* HERO SECTION.................................. */}
      {/* HERO SECTION.................................. */}
      {/* HERO SECTION.................................. */}
      {/* HERO SECTION.................................. */}
      <section className="hero-section">
        <div className="width-container">
          <div className="message-div">
            <h1>The Real Estate Photography and Media You Need</h1>
            <h2>Claim your free media shoot today</h2>
            <p>
              Listing Media Services offers an easy, fast and reliable way to
              book and receive quality photography and rich media to help your
              listings stand out in any market. <br />
              <br /> For a limited time, you can claim your promo code for a
              free media shoot*.
            </p>

            <div className="media-container">
              <Slider {...settings}>
                <img
                  className="slider-image"
                  src={imagesData[0].image}
                  alt=""
                />
                <img
                  className="slider-image"
                  src={imagesData[1].image}
                  alt=""
                />
                <img
                  className="slider-image"
                  src={imagesData[2].image}
                  alt=""
                />
                <img
                  className="slider-image"
                  src={imagesData[3].image}
                  alt=""
                />
              </Slider>
            </div>

            <p className="small-writing">
              *Redeemable for Essentials and Premium packages only. Does not
              include media add-ons. Offer expires January 31, 2024.
            </p>
          </div>
          {/* FORM..................................... */}
          {/* FORM..................................... */}
          <div className="form-div">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* GALLERY........................................ */}
      {/* GALLERY........................................ */}
      {/* GALLERY........................................ */}
      {/* GALLERY........................................ */}
      {/* GALLERY........................................ */}
      <section>
        {/* <LazyLoad offset={200} once> */}
        <div className="images-container-special">
          {imagesData.slice(0, 9).map((imagesData, index) => (
            <img
              alt="Homes"
              // style={{
              //   display: "grid !important",
              //   border: "solidGreen",
              //   gridTemplateColumns:
              //     "repeat(4, minmax(300px, 600px)) !important",
              // }}
              className="images-special"
              key={imagesData.id}
              src={imagesData.image}
            />
          ))}
        </div>
        {/* </LazyLoad> */}
      </section>

      {/* HOW IT WORKS SECTION............................ */}
      {/* HOW IT WORKS SECTION............................ */}
      {/* HOW IT WORKS SECTION............................ */}
      {/* HOW IT WORKS SECTION............................ */}
      {/* HOW IT WORKS SECTION............................ */}
      <section className="process-section-outer-container section-spacing">
        <h3>Booking a Shoot, and What to Expect After</h3>
        <p>
          Your time is precious, for that reason we've streamlined our working
          process to be as simple and concise as possible. It involves just
          three easy steps outlined below.
        </p>

        <div className="process-cards-container">
          {process.map((item) => (
            <ProcessStep key={item.id} data={item} />
          ))}
        </div>
      </section>

      {/* WHAT THE PACKAGE INCLUDES.......................... */}
      {/* WHAT THE PACKAGE INCLUDES.......................... */}
      {/* WHAT THE PACKAGE INCLUDES.......................... */}
      {/* WHAT THE PACKAGE INCLUDES.......................... */}
      {/* WHAT THE PACKAGE INCLUDES.......................... */}
      <section className="package-includes-section">
        <div className="width-container">
          <div className="text-div">
            <p className="above-title-text">Feature Spotlight</p>
            <h2>Wow Buyers and Sellers With Interactive Floor Plans</h2>
            <p>
              Create an immersive experience with a clickable floor plan that
              lets them view rooms in the context of the overall home. <br />
              <br /> 70% of sellers confirmed they’re more likely to hire an
              agent who includes virtual tours or interactive floor plans in
              their services.* Interactive Floors Plans are included in all
              Listing Media Services packages.
            </p>
          </div>
          {/* VISUAL ELEMENT AKA IMAGE OF PACKAGE */}
          <div className="visual-element-div">
            <div className="package-card-shell">
              <h3>Complete Marketing Photo Blitz</h3>
              <p>We do so much</p>

              <p className="price">$210.00</p>
              <p className="new-price">$24.00</p>

              <div>
                <ul>
                  <li>Exterior Photos</li>
                  <li>Interior Photos</li>
                  <li>
                    6 Aerial/Drone Photos (Home & Neighborhood & Community
                    Amenities)
                  </li>
                  <li>Professional Editing</li>
                  <li>Image SlideShow Video</li>
                  <li>Hand-coded Listing Website</li>
                  <li>Premade Flyers</li>
                  <li>Premade Social Media Posts</li>
                  <li>
                    Delivered in both High Resolution and MLS or AirBnB format
                  </li>
                </ul>
              </div>

              <Link to="/#form">Order Package</Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETING KIT SECTION........................ */}
      {/* MARKETING KIT SECTION........................ */}
      {/* MARKETING KIT SECTION........................ */}
      {/* MARKETING KIT SECTION........................ */}
      {/* MARKETING KIT SECTION........................ */}
      <section className="extraservices-section-outer-container section-spacing">
        <div className="website-section">
          <div className="pic-div">
            <div className="pic-vic-div">
              <img src="/listing-site.png" alt="" />
            </div>
          </div>

          <div className="text-div">
            <h3>
              A dedicated, easily shareable, high-end, hand-coded listing
              website <span className="text-gold">FREE</span> with every shoot
            </h3>
            <div className="text">
              <PiTelevisionSimple className="icon" />
              <div>
                <h4>
                  Squeeze every drop of persuasion power out of photos and video
                  by displaying them at full resolution
                </h4>
                <p className="first-para">
                  MLS compresses all images upon upload, resulting in a
                  scrunched and often blurry appearance. In contrast, a
                  developer has invested hours in perfecting each listing site
                  to ensure that all images and videos are showcased in full
                  high-definition, presenting a sharp, detailed, and vivid
                  visual experience.
                </p>
              </div>
            </div>
            <div className="text">
              <FaUserCheck className="icon" />
              <div>
                <h4>Lock engagement with a Speedy/Intuitive user experience</h4>
                <p>
                  Due to the extensive data transfers on MLS, navigation can be
                  slow and challenging. Our dedicated listing site focuses
                  solely on one property, ensuring exceptional speed and
                  responsiveness. Additionally, our site's navigation is highly
                  intuitive, delivering a superb user experience sellers and
                  buyers will be impressed by.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="website-section">
          <div className="pic-div">
            <div className="pic-vic-div">
              <img src="/marketing-kit.png" alt="" />
            </div>
          </div>

          <div className="text-div">
            <h3>
              Marketing Done For You. Flyers, social media feed and story posts{" "}
              <span className="text-gold">FREE</span> w/ every shoot.
            </h3>
            <div className="text">
              <PiTelevisionSimple className="icon" />
              <div>
                <h4>
                  Spread the word about your new listing with beautiful flyers
                  displaying the top photos from the shoot.
                </h4>
                <p className="first-para">
                  Expand your marketing by handing out flyers at your open
                  houses, we make it easy by disigningthem for you. With every
                  shoot you get 5 different beautiful designs to choose from.
                </p>
              </div>
            </div>
            <div className="text">
              <FaUserCheck className="icon" />
              <div>
                <h4>
                  Get people to stop scrolling and focus on your new listing
                  with engaging social media feed and story posts
                </h4>
                <p>
                  Due to the extensive data on MLS, navigation can be slow and
                  challenging. Our dedicated listing site focuses solely on one
                  property, ensuring exceptional speed and responsiveness.
                  Additionally, our site's navigation is highly intuitive,
                  ensuring a superb user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER................................. */}
      {/* FOOTER................................. */}
      {/* FOOTER................................. */}
      {/* FOOTER................................. */}
      {/* FOOTER................................. */}
      <div className="footer"></div>
    </>
  );
}

export default SpecialOffer;
