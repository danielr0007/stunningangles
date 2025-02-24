import * as React from "react";
import Layout from "../components/Layout";
// import "../styles/styles.scss";
import Banner from "../components/Banner";
import TeamHomeSection from "../components/TeamHomeSection";
import Video from "../components/Video";
import ServiceCardComponent from "../components/ServiceCardComponent";
import {
  services,
  process,
  // packages,
  defaultPackage,
  testimonials,
} from "../utils/data";
import GallerySlider from "../components/GallerySlider";
import ProcessStep from "../components/ProcessStep";
import Marquee from "react-fast-marquee";
import TestimonialCard from "../components/TestimonialCard";
import MobileMenu from "../components/MobileMenu";
import {
  FaPhoneAlt,
  FaLocationArrow,
  FaFilm,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import { PiTelevisionSimple } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import useFadeInOnScrollHook from "../utils/useFadeInOnScrollHook";
import PackageCard from "../components/PackageCard";
// import BookingForm from "../components/BookingForm";
import LazyLoad from "react-lazy-load";
import RevealerSlider from "../components/RevealerSlider";
// import { useState } from "react";
// import FullScreenPopUp from "../components/FullScreenPopUp";
import { Link } from "gatsby";
import PopUpGeneric from "../components/PopUpGeneric";
// import FormFeedback from "../components/FormFeedback";

export default function Home() {
  const { ref, isVisible } = useFadeInOnScrollHook();
  // const [showServiceArea, setShowServiceArea] = useState(true);

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
              <h3>All Your Real Estate Media Needs In One Place</h3>
              <img src="/decoration-line.png" alt="yellow decoration lines" />
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
            <h3>
              Stop Letting Dull Photos <span className="text-gold">Lose</span>{" "}
              You Business.
            </h3>
            <p>We deliver next day while maintaining magazine like quality.</p>

            <img src="/decoration-line-2.png" alt="yellow decoration lines" />
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
              <h2>Unleash Your Listing's Potential w/ Virtual Staging</h2>
              <p>
                Allow potential buyers to visualize the space's potential. This
                ultra realistic staging technology can make your listing more
                appealing and increase its perceived value, all without the
                expense of physical staging.
              </p>
              <Link to="https://portal.spiro.media/order/stunning/stunning-angles-order">
                Book A Shoot
              </Link>
            </div>

            <div className="revealer-component-div">
              <LazyLoad className="lazy" offset={200} once>
                <RevealerSlider
                  originalImage="/unedited-livingroom.jpg"
                  editedImage="/poggi-12.jpg"
                />
              </LazyLoad>
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
            <h4>Luxury Homes</h4>
            <h4>Small Homes</h4>
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
          <h3>How It Works</h3>
          <p>
            Ready to begin? Our process is S-I-M-P-L-E. It involves just three
            easy steps outlined below.
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
                <TestimonialCard testi={testimonials[0]} />
                <TestimonialCard testi={testimonials[1]} />
                <TestimonialCard testi={testimonials[2]} />
                <TestimonialCard testi={testimonials[3]} />
                <TestimonialCard testi={testimonials[4]} />
                <TestimonialCard testi={testimonials[5]} />
                {/* <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard /> */}
              </Marquee>
              <Marquee pauseOnHover={true} speed={20} direction="right">
                <TestimonialCard testi={testimonials[0]} />
                <TestimonialCard testi={testimonials[1]} />
                <TestimonialCard testi={testimonials[2]} />
                <TestimonialCard testi={testimonials[3]} />
                <TestimonialCard testi={testimonials[4]} />
                <TestimonialCard testi={testimonials[5]} />
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
                  alt="yellow decoration lines"
                />
                <img src="/iphone-image.png" alt="" />
                <LazyLoad className="lazy" offset={100} once>
                  <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="vid"
                    src="/reel.mp4"
                  ></video>
                </LazyLoad>
              </div>
            </div>
            <div className="text-div">
              <h3>
                Command <span className="text-gold">attention</span> with the
                new most consumed content type on social: Reels!
              </h3>
              <div className="text">
                <FaFilm className="icon" />
                <div>
                  <h4>
                    Leverage the addictive power of tiktok & Insta reels w/ the
                    immersive power of video
                  </h4>
                  <p className="first-para">
                    30-60 second vertical videos for your listings, showcasing
                    their best features in a fun and trendy style set to music.
                    It's a surefire method to make your property stand out and
                    bring enough numbers to sell at top price!
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
                    vertical, short videos offer the most assured path to high
                    organic reach.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WEBSITE SECT....................................................... */}
          <div className="website-section">
            <div className="pic-div">
              <div className="pic-vic-div">
                <img
                  src="/listing-site.png"
                  alt="listing site in different device sizes"
                />
              </div>
            </div>

            <div className="text-div">
              <h3>
                A dedicated, easily shareable, listing website{" "}
                <span className="text-gold">FREE</span> with every package.
              </h3>
              <div className="text">
                <PiTelevisionSimple className="icon" />
                <div>
                  <h4>
                    Squeeze every drop of persuasion power out of photos and
                    video by displaying them at full resolution
                  </h4>
                  <p className="first-para">
                    MLS compresses all images upon upload, resulting in a
                    scrunched and often blurry appearance. In contrast, each
                    listing site ensures that all images and videos are
                    showcased in high-definition, presenting a detailed and
                    vivid visual experience.
                  </p>
                </div>
              </div>
              <div className="text">
                <FaUserCheck className="icon" />
                <div>
                  <h4>
                    Lock engagement with a Speedy/Intuitive user experience
                  </h4>
                  <p>
                    Due to the extensive data transfers on MLS, navigation can
                    be slow and challenging. Our listing site is light, focusing
                    solely on one property; ensuring exceptional speed and
                    responsiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing done for you sect.............................................. */}
          <div className="website-section">
            <div className="pic-div">
              <LazyLoad className="lazy" offset={200} once>
                <div className="pic-vic-div">
                  <img
                    src="/marketing-kit.png"
                    alt="flyers and social media posts"
                  />
                </div>
              </LazyLoad>
            </div>

            <div className="text-div">
              <h3>
                Marketing Done for You: Attractive and Customizable{" "}
                <span className="text-gold">
                  Premade Flyers & Social Media Posts
                </span>
              </h3>
              <div className="text">
                <PiTelevisionSimple className="icon" />
                <div>
                  <h4>
                    Spread the word about your new listing with beautiful flyers
                    displaying the top photos.
                  </h4>
                  <p className="first-para">
                    Expand your marketing by handing out flyers at your open
                    houses, we design them for you. With every shoot you get a
                    ton of beautiful designs to choose from.
                  </p>
                </div>
              </div>
              <div className="text">
                <FaUserCheck className="icon" />
                <div>
                  <h4>
                    Choose from many pre-made social media posts. Easily
                    customizable to fit stories, posts, or reels.
                  </h4>
                  <p>
                    Our beautifully structured, color rich, movement packed
                    social media posts are yours to show off your listing in a
                    manner that will command attention and engagement.
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
        <section id="booking" className="packages-section-outer-container">
          <h3>Main Packages</h3>

          <div className="package-cards-container">
            {defaultPackage.map((p, i) => {
              return <PackageCard key={i} data={p} />;
            })}
          </div>

          <div className="disclaimer-div">
            <p>
              Photos start at $145. Click to see our{" "}
              <a
                className="font-semibold text-yellow-600"
                href="https://portal.spiro.media/order/stunning/stunning-angles-order"
                target="_blank"
                rel="noopener noreferrer"
              >
                ORDER PAGE
              </a>
              <br />
              <br /> For personalized assistance or any inquiries, please don't
              hesitate to reach out for the best service.
            </p>
          </div>
        </section>

        {/* SECTION TEN - CONTACT SQUARE......................................................................... */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        <section id="contact" className="contact-section-outer-container">
          <div className="contact-container">
            <div className="phone-slice">
              <FaPhoneAlt />
              <p>‪(407) 815-4882‬</p>
            </div>
            <div className="address-slice">
              <MdEmail />
              <p>stunningangleshomephotography@gmail.com</p>
            </div>
            <div className="email-slice">
              <FaLocationArrow />
              <p>
                Altamonte Springs, <br /> FL, 32714
              </p>
            </div>
          </div>
        </section>
        {/* POP UP............ */}
        <PopUpGeneric />
      </Layout>
    </>
  );
}
