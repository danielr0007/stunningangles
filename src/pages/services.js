import React from "react";
import Layout from "../components/Layout";
import GenericBanner from "../components/GenericBanner";
import { FaCamera, FaRulerCombined } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import { RiComputerFill } from "react-icons/ri";
import ServicesPhotoGallery from "../components/ServicesPhotoGallery";
import TabsComponent from "../components/TabsComponent";
import MobileMenu from "../components/MobileMenu";
import { Link } from "gatsby";

function Services() {
  return (
    <Layout>
      <MobileMenu />
      {/* SECTION ONE - BANNER......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="services-banner-section">
        <GenericBanner title="Services" />
      </section>
      {/* SECTION TWO - OVERVIEW SERVICES......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="overview-services-section section-spacing">
        <div className="width-div">
          <h3>LISTING MEDIA</h3>
          <img src="/decoration-line-2.png" alt="" />
          <p>
            We have gone to great lengths to make sure your media is perfect
            every single time. From our in-house editors, to a quality control
            team, to our highly trained photographers… we think you will be
            impressed.
          </p>
          <div className="cards-div">
            <div className="service-card">
              <div className="icon-div">
                <FaCamera className="icon" />
              </div>
              <h4>PHOTOS</h4>
              <p>More than important than ever. Professionals you can trust.</p>
            </div>
            <div className="service-card">
              <div className="icon-div">
                <BsCameraReelsFill className="icon" />
              </div>
              <h4>VIDEOS</h4>
              <p>Sell the house and your personal brand. Video is a must!</p>
            </div>
            <div className="service-card">
              <div className="icon-div">
                <RiComputerFill className="icon" />
              </div>
              <h4>VIRTUAL TOURS</h4>
              <p>Out of town buyers or for a second look at midnight.</p>
            </div>
            <div className="service-card">
              <div className="icon-div">
                <FaRulerCombined className="icon" />
              </div>
              <h4>FLOORPLANS</h4>
              <p>Does the furniture fit? What if we moved that wall...</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION THREE - PHOTOS......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="photos-section section-spacing">
        <h3>LISTING PHOTOS</h3>
        <p>The quality your listing deserves.</p>
        <div className="width-div">
          <ServicesPhotoGallery />
        </div>

        <Link to="/#booking">Book A Shoot</Link>
      </section>

      {/* SECTION FOUR - VIDEO......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="video-section section-spacing">
        <div className="width-div">
          <h3>CINEMATIC VIDEO TOUR</h3>
          <p>
            We’ve set a new standard across the board. Our Cinematic Tours bring
            a whole new level of quality while still being delivered the next
            business day.
          </p>

          <div className="videos-div">
            <div className="video-div"></div>
            <div className="video-div"></div>
            <div className="video-div"></div>
          </div>

          <Link to="/#booking">Schedule A Video</Link>
        </div>
      </section>

      {/* SECTION FIVE - VIRTUAL TOUR......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="virtual-tour-section section-spacing">
        <div className="width-div">
          <div className="image-div">
            <img src="/20.jpg" alt="" />
          </div>

          <div className="text-content-div">
            <h3>VIRTUAL TOURS</h3>
            <p>
              An immersive experience for buyers and more online exposure for
              sellers. We offer 2 different kinds of virtual tours:
            </p>
            <ul>
              <li>3D Matterport Tour</li>
              <li>Zillow 3D Home Tour</li>
            </ul>
            <Link to="/#booking">Book A Shoot</Link>
          </div>
        </div>
      </section>

      {/* SECTION SIX - FLOOR PLANS......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="floor-plan-section">
        <div className="width-div">
          <div className="text-content-div">
            <h3>SCHEMATIC FLOOR PLANS</h3>
            <img src="/decoration-line.png" alt="" />
            <p>
              You know what Zillow said is the most important piece of media
              after the listing photos? You guessed it… floor plans! “81% of
              buyers said they were more likely to visit a home if the listing
              included a floor plan they like.”
            </p>
            <Link to="/#booking">Book A Shoot</Link>
          </div>

          <div className="image-div">
            <img src="/23.jpg" alt="" />
          </div>
        </div>
      </section>

      {/* SECTION SEVEN - MORE SERVICES......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="more-services-section">
        <div className="width-div">
          <h3>PLUS SO MUCH MORE</h3>

          <TabsComponent />
        </div>
      </section>
    </Layout>
  );
}

export default Services;
