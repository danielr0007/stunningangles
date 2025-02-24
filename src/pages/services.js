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
          <h3>PREMIUM REAL ESTATE MEDIA</h3>
          <img src="/decoration-line-2.png" alt="" />
          <p>
            We leverage top-notch equipment, seasoned photographers, meticulous
            editors, and storytellers informed by market insights to craft the
            perfect message to sell your property at top price fast. Dive deeper
            into all our home selling media services below to discover how we
            can level-up your property's presentation.
          </p>
          <div className="cards-div">
            <div className="service-card">
              <div className="icon-div">
                <FaCamera className="icon" />
              </div>
              <h4>PHOTOS</h4>
              <p>
                Bright, punchy images that capture the eyes and hearts of
                potential buyers on MLS
              </p>
            </div>
            <div className="service-card">
              <div className="icon-div">
                <BsCameraReelsFill className="icon" />
              </div>
              <h4>VIDEOS</h4>
              <p>
                Creates the immersive illusion of touring the home through
                breathtaking 4K film w/ catchy music.
              </p>
            </div>
            <div className="service-card">
              <div className="icon-div">
                <RiComputerFill className="icon" />
              </div>
              <h4>VIRTUAL TOURS</h4>
              <p>
                For the detail oriented folks who need a complete feel of the
                property before reaching out
              </p>
            </div>
            <div className="service-card">
              <div className="icon-div">
                <FaRulerCombined className="icon" />
              </div>
              <h4>FLOORPLANS</h4>
              <p>
                Will this room be big enough for... Let the listing floorplan
                give action taking confidence to your prospects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION THREE - PHOTOS......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section id="services-photos" className="photos-section section-spacing">
        <h3>LISTING PHOTOS</h3>
        <p>
          Beyond just image quality, identifying those specific angles and
          standout features that deeply engage potential buyers is paramount.
          Through our expertise and planning, we have a knack for intuitively
          discovering these selling points. It's about going beyond the visuals
          to pinpoint those aspects that transform prospects into invested
          leads.
        </p>
        <div className="width-div">
          <ServicesPhotoGallery />
        </div>

        <Link to="https://portal.spiro.media/order/stunning/stunning-angles-order">
          Book A Shoot
        </Link>
      </section>

      {/* SECTION FOUR - VIDEO......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section id="services-video" className="video-section section-spacing">
        <div className="width-div">
          <h3>CINEMATIC VIDEO TOURS</h3>
          <p>
            Immersing viewers in the essence and allure of every room, our
            cinematic 4K videos masterfully encapsulate the charm of each space,
            showcasing its unique angles, textures, and the seamless flow of the
            entire property. These videos serve as a powerful pre-qualifier,
            engaging potential buyers at a deeper level.
          </p>

          <div className="videos-div">
            <div className="video-div">
              <iframe
                src="https://www.youtube.com/embed/xidgXMkjSkE?si=9eWuxTOv-bgAJfJ9"
                title="YouTube video player"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-div">
              <iframe
                src="https://www.youtube.com/embed/LJ4PcZMWrrY?si=dhvJzERJ85EJ_JWD"
                title="YouTube video player"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <Link to="https://portal.spiro.media/order/stunning/stunning-angles-order">
            Schedule A Video
          </Link>
        </div>
      </section>

      {/* SECTION FIVE - VIRTUAL TOUR......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section
        id="services-virtual-tour"
        className="virtual-tour-section section-spacing"
      >
        <div className="width-div">
          <div className="image-div">
            <img src="/virtual-tour-shot.jpg" alt="" />
          </div>

          <div className="text-content-div">
            <h3>VIRTUAL TOURS</h3>
            <p>
              An interactive journey that invites exploration. It allows buyers
              to absorb the ambiance, texture, and layout from the comfort of
              their own screens. <br />
              <br /> It's more than a walkthrough—it's an opportunity for them
              to mentally move in, picturing their lifestyle and making an
              emotional connection with what could be their future home.
            </p>
            <ul>
              {/* <li>3D Matterport Tour</li> */}
              <li>Zillow 3D Home Tour</li>
              <li>Matterport 3D Home Tour</li>
            </ul>
            <Link to="https://portal.spiro.media/order/stunning/stunning-angles-order">
              Book A Shoot
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION SIX - FLOOR PLANS......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section id="services-floorplan" className="floor-plan-section">
        <div className="width-div">
          <div className="text-content-div">
            <h3>FLOOR PLANS</h3>
            <img src="/decoration-line.png" alt="" />
            <p>
              You know what Zillow said is the most important piece of media
              after the listing photos? You guessed it… floor plans! “81% of
              buyers said they were more likely to visit a home if the listing
              included a floor plan they like.”
            </p>
            <Link to="https://portal.spiro.media/order/stunning/stunning-angles-order">
              Book A Shoot
            </Link>
          </div>

          <div className="image-div">
            <img src="/floorplan-shot.webp" alt="" />
          </div>
        </div>
      </section>

      {/* SECTION SEVEN - MORE SERVICES......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section id="services-drone" className="more-services-section">
        <div className="width-div">
          <h3>ADD MORE SELLING POWER</h3>

          <TabsComponent />
        </div>
      </section>
    </Layout>
  );
}

export default Services;
