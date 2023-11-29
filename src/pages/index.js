import * as React from "react";
import Layout from "../components/Layout";
import "../styles/styles.scss";
import Banner from "../components/Banner";
import TeamHomeSection from "../components/TeamHomeSection";
import Video from "../components/Video";
import ServiceCardComponent from "../components/ServiceCardComponent";
import { services, process, packages, defaultPackage } from "../utils/data";
import GallerySlider from "../components/GallerySlider";
import ProcessStep from "../components/ProcessStep";
import Marquee from "react-fast-marquee";
import TestimonialCard from "../components/TestimonialCard";
import MobileMenu from "../components/MobileMenu";
import {
  FaBluetooth,
  FaPhoneAlt,
  FaLocationArrow,
  FaLongArrowAltLeft,
  FaFilm,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import { PiTelevisionSimple } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import useFadeInOnScrollHook from "../utils/useFadeInOnScrollHook";
import PackageCard from "../components/PackageCard";
import BookingForm from "../components/BookingForm";
import LazyLoad from "react-lazy-load";
import RevealerSlider from "../components/RevealerSlider";
import { useState } from "react";
import FullScreenPopUp from "../components/FullScreenPopUp";

export default function Home() {
  const { ref, isVisible } = useFadeInOnScrollHook();
  const [showServiceArea, setShowServiceArea] = useState(false);

  const [currentPackage, setCurrentPackage] = useState(defaultPackage);

  function handleShowPackage(e) {
    const value = e.target.value;

    if (value == 0 || value === "") {
      setCurrentPackage(defaultPackage);
    } else if (value <= 1000) {
      console.log("tier1");
      setCurrentPackage(packages[0].packages);
    } else if (value <= 2000) {
      console.log("tier2");
      setCurrentPackage(packages[1].packages);
    } else if (value <= 3000) {
      console.log("tier3");
      setCurrentPackage(packages[2].packages);
    } else if (value <= 4000) {
      console.log("tier4");
      setCurrentPackage(packages[3].packages);
    } else if (value <= 5000) {
      console.log("tier5");
      setCurrentPackage(packages[4].packages);
    } else {
      setCurrentPackage(defaultPackage);
    }
  }

  return (
    <>
      <Layout>
        <MobileMenu />
        {/* BANNER SECTION-HERO SECTION............................................................ */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        <section className="banner-container">
          <Banner />
        </section>

        {/* SECTION ONE - TEAM......................................................................... */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        <section className="team-section-outer-container section-spacing">
          <TeamHomeSection />
          {/* <LazyLoad height={200}> */}
          <Video controls />
          {/* </LazyLoad> */}
        </section>

        {/* SECTION TWO - SERVICES......................................................................... */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        <section className="services-section-outer-container section-spacing">
          <div>
            <div>
              <h3>Skyrocket Perceived Value With:</h3>
              <img src="/decoration-line.png" alt="" />
            </div>

            <div className="service-cards-container">
              {services.map((item) => {
                return <ServiceCardComponent key={item.id} cardData={item} />;
              })}
            </div>
          </div>
        </section>

        {/* SECTION THREE - GALLERY SLIDER......................................................................... */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        <section
          ref={ref}
          className={`gallery-section-outer-container section-spacing ${
            isVisible ? "fade-in" : "opaque"
          }`}
        >
          <div>
            <h3>An Image is Worth a Thousand Reasons to Buy</h3>
            <p>
              Top performers require top quality to remain kings and queens of
              their market, and we're here to deliver just that. Our method
              involves careful planning so that every photo showcases the most
              appealing and marketable features of a home in the best possible
              light. <br />
              <br /> Thousands of dollars' worth of equipment and thousands of
              hours of skill building and experience all come together to
              provide you with stunning images that translate into more
              showings, more referrals, multiple offers, and a shorter time on
              the market.
            </p>

            <img src="/decoration-line-2.png" alt="" />
          </div>

          <GallerySlider />
        </section>

        {/* SECTION COMPARATIVE REVEALER........................................................................ */}
        {/* SECTION COMPARATIVE REVEALER........................................................................ */}
        {/* SECTION COMPARATIVE REVEALER........................................................................ */}
        {/* SECTION COMPARATIVE REVEALER........................................................................ */}
        {/* SECTION COMPARATIVE REVEALER........................................................................ */}
        {/* SECTION COMPARATIVE REVEALER........................................................................ */}
        {/* SECTION COMPARATIVE REVEALER........................................................................ */}
        <section className="revealer-section">
          <div className="revealer-section-container">
            <div className="revealer-text-div">
              <h2>
                A natural and polished, welcoming feel to every photograph
              </h2>
              <p>
                Beyond our expertise in capturing the most stunning angles of
                your listing, our editing skills set us apart. We transform raw
                HDR images into crisp, vibrant, and naturally evocative pieces
                of art. Our meticulous approach ensures a balance, avoiding the
                look of overly edited, AI-generated photos. (See for yourself,
                drag the divider from side to side)
              </p>
            </div>

            <div className="revealer-component-div">
              <RevealerSlider
                originalImage="/unedited-livingroom.jpg"
                editedImage="/poggi-12.jpg"
              />
            </div>
          </div>
        </section>

        {/* SECTION FOUR - WHO WE HELP......................................................................... */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        <section className="whowehelp-section-outer-container">
          <h3>Our Pics & Vids are Perfect for Marketing the Following</h3>
          <Marquee pauseOnHover={true} speed={100} autoFill={true}>
            <h4>Big Houses</h4>
            <h4>Small Houses</h4>
            <h4>AirBnb</h4>
            <h4>Apartments</h4>
            <h4>Condos</h4>
            <h4>Offices</h4>
            <h4>Rentals</h4>
          </Marquee>
        </section>

        {/* SECTION FIVE - OUR PROCESS......................................................................... */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        <section className="process-section-outer-container section-spacing">
          <h3>Booking a Shoot, and What to Expect After</h3>
          <p>
            Your time is precious, for that reason we've streamlined our working
            process to be as simple and concise as possible (lightning quick).
            It involves just three easy steps outlined below.
          </p>

          <div className="process-cards-container">
            {process.map((item) => (
              <ProcessStep key={item.id} data={item} />
            ))}
          </div>
        </section>

        {/* SECTION SIX - TESTIMONIALS......................................................................... */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        <section className="testimonial-section-outer-container section-spacing">
          <div>
            <div className="text-container">
              <h3>We've Made a Few Fans Along the Way</h3>
              <p>Here's what our clients have to say</p>
              <img src="/decoration-line-2.png" alt="" />
            </div>

            <div className="testimonial-carousel-container">
              <Marquee
                style={{ marginBottom: "5rem" }}
                pauseOnHover={true}
                speed={20}
              >
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </Marquee>
              <Marquee pauseOnHover={true} speed={20} direction="right">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </Marquee>
            </div>
          </div>
        </section>

        {/* SECTION SEVEN - EXTRA SERVICES......................................................................... */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        <section className="extraservices-section-outer-container section-spacing">
          <div className="reels-section">
            <div className="pic-div">
              <div className="pic-vic-div">
                <img
                  className="social-decor"
                  src="/socialmedias-decor.png"
                  alt=""
                />
                <img src="/iphone-image.png" alt="" />
                <LazyLoad className="lazy" offset={100} once>
                  <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="vid"
                    src="/iphone-video.mp4"
                  ></video>
                </LazyLoad>
              </div>
            </div>
            <div className="text-div">
              <h3>
                Command attention with the new most consumed content type on
                social: Reels!
              </h3>
              <div className="text">
                <FaFilm className="icon" />
                <div>
                  <h4>
                    The addictive power of tiktok & Insta reels w/ the immersive
                    power of video working to make the sale
                  </h4>
                  <p className="first-para">
                    We craft captivating 30-45 second vertical videos for your
                    listings, showcasing their best features in a fun and trendy
                    style set to music. This ensures maximum attention, glueing
                    viewers to your new listing. It's a surefire method to make
                    your property stand out and bring enough numbers to sell at
                    top price!
                  </p>
                </div>
              </div>
              <div className="text">
                <FaUsers className="icon" />
                <div>
                  <h4>
                    "Like the sand of the sea" Reach a multitude of people and
                    share with ease
                  </h4>
                  <p>
                    Given TikTok and Instagram's emphasis on reels, these
                    vertical, short videos offer the most assured path to
                    achieve high organic reach. Additionally, due to their
                    smaller file size and brevity, sharing these videos is
                    incredibly fast and straightforward. Simply save the compact
                    clip on your phone and effortlessly share it through any
                    messaging platform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="website-section">
            <div className="pic-div">
              <div className="pic-vic-div">
                <img src="/listing-site.png" alt="" />
              </div>
            </div>

            <div className="text-div">
              <h3>
                High-end, hand-coded listing website included with every shoot
              </h3>
              <div className="text">
                <PiTelevisionSimple className="icon" />
                <div>
                  <h4>
                    Get the most out of photos and video by displaying them at
                    full resolution—ensuring love at first sight
                  </h4>
                  <p className="first-para">
                    MLS compresses all images upon upload, resulting in a
                    scrunched and often blurry appearance. In contrast, a
                    developer has invested hours in perfecting each listing site
                    template to ensure that all images and videos are showcased
                    in full high-definition, presenting a sharp, detailed, and
                    vivid visual experience.
                  </p>
                </div>
              </div>
              <div className="text">
                <FaUserCheck className="icon" />
                <div>
                  <h4>
                    Hold engagement with a Speedy/Intuitive user experience
                  </h4>
                  <p>
                    Due to the extensive data on MLS, navigation can be slow and
                    challenging. Our dedicated listing site focuses solely on
                    one property, ensuring exceptional speed and responsiveness.
                    Additionally, our site's navigation is highly intuitive,
                    ensuring a superb user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION EIGHT - PACKAGES......................................................................... */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        <section className="packages-section-outer-container">
          <h1>Packages</h1>
          <div className="sqft-input-div">
            <p>Enter the square footage of the home for a price estimate</p>
            <div>
              <label htmlFor="sqft" id="sqft">
                Square Footage:
              </label>
              <input
                type="number"
                placeholder="2345"
                onChange={handleShowPackage}
                // value={sqft}
              />{" "}
              <FaLongArrowAltLeft
                style={{ fontSize: "1.5rem", color: "red" }}
              />
            </div>
          </div>
          <div className="package-cards-container">
            {currentPackage.map((p, i) => {
              return <PackageCard key={i} data={p} />;
            })}
          </div>

          <div className="disclaimer-div">
            <p>
              Our listed pricing reflects our professional real estate
              photography packages tailored for most homes. Additional fees may
              apply for properties with special features like extensive land,
              unique landscapes, or exclusive amenities. Explore our available
              add-on services detailed below. Reach out for homes over 5,000
              sqft. <br />
              <br /> NOTE: If you are trying to schedule a photo or video shoot
              outside of our service area highlighted in blue{" "}
              <span onClick={() => setShowServiceArea(true)}>
                (click here to see)
              </span>
              , please contact us. Travel fees will apply. For personalized
              assistance or any inquiries, please reach out for the best
              service.
            </p>
          </div>
        </section>

        {/* SECTION NINE - BOOKING FORM......................................................................... */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        <section
          className="booking-section-outer-container section-spacing"
          id="booking"
        >
          <div className="booking-container">
            <p>Ready to Book?</p>
            <h1>Schedule Online Today</h1>
            <BookingForm />
          </div>
        </section>

        {/* SECTION TEN - CONTACT SQUARE......................................................................... */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        <section className="contact-section-outer-container">
          <div className="contact-container">
            <div className="phone-slice">
              <FaPhoneAlt />
              <p>954-415-8906</p>
            </div>
            <div className="address-slice">
              <MdEmail />
              <p> StunningAngles@gmail.com</p>
            </div>
            <div className="email-slice">
              <FaLocationArrow />
              <p>
                7864 Beachfern Circle, <br /> Davie, FL, 33321
              </p>
            </div>
          </div>
        </section>
        {/* POP UP............ */}
        {showServiceArea ? (
          <FullScreenPopUp setShowServiceAreaFunction={setShowServiceArea} />
        ) : (
          ""
        )}
      </Layout>
    </>
  );
}
