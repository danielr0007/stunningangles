import * as React from "react";
import Layout from "../components/Layout";
import "../styles/styles.scss";
import Banner from "../components/Banner";
import TeamHomeSection from "../components/TeamHomeSection";
import Video from "../components/Video";
import ServiceCardComponent from "../components/ServiceCardComponent";
import { services, process, packages } from "../utils/data";
import GallerySlider from "../components/GallerySlider";
import ProcessStep from "../components/ProcessStep";
import Marquee from "react-fast-marquee";
import TestimonialCard from "../components/TestimonialCard";
import MobileMenu from "../components/MobileMenu";
import { FaBluetooth, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useFadeInOnScrollHook from "../utils/useFadeInOnScrollHook";
import PackageCard from "../components/PackageCard";
import BookingForm from "../components/BookingForm";
import LazyLoad from "react-lazy-load";

export default function Home() {
  const { ref, isVisible } = useFadeInOnScrollHook();

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
          <Video />
          {/* </LazyLoad> */}
        </section>

        {/* SECTION TWO - SERVICES......................................................................... */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        <section className="services-section-outer-container section-spacing">
          <div>
            <div>
              <h3>Our Services</h3>
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
            <h3>Top Quality for Top Performers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              quia doloremque magni aliquam accusamus totam, eos fugiat velit
              laudantium rem?
            </p>
            <img src="/decoration-line-2.png" alt="" />
          </div>

          <GallerySlider />
        </section>

        {/* SECTION FOUR - WHO WE HELP......................................................................... */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        {/* ........................................................................................ */}
        <section className="whowehelp-section-outer-container">
          <h3>Perfect For...</h3>
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
          <h3>Our Working Process</h3>
          <p>
            We've distilled our interior design process into 4 Steps – the same
            steps we have been using for more than 41 years, In this steps, the
            designer visits your home to gather more.
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
              <h3>Testimonials</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
                tenetur repellat dolor accusantium quis dolores.
              </p>
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
              <h3>We Leave You Social Media Marketing Ready</h3>
              <div className="text">
                <FaBluetooth className="icon" />
                <div>
                  <h4>Sell products and services</h4>
                  <p className="first-para">
                    Grow your online store with landing pages built to sell.
                    Connect ecommerce tools to showcase your products and accept
                    payments right on your page, simplifying your buyer journey.
                  </p>
                </div>
              </div>
              <div className="text">
                <FaBluetooth className="icon" />
                <div>
                  <h4>Collect leads and signups</h4>
                  <p>
                    Expand your email list, fill your sales pipeline, and get
                    new customers. With form-based landing pages, you can
                    capture visitor information and keep your marketing funnel
                    full.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="website-section">
            <div className="pic-div">
              <div className="pic-vic-div">
                <img src="/site-image.jpg" alt="" />
              </div>
            </div>

            <div className="text-div">
              <h3>Free listing websites, marketing suite, and lead capture!</h3>
              <div className="text">
                <FaBluetooth className="icon" />
                <div>
                  <h4>Get your business online</h4>
                  <p className="first-para">
                    Grow your online store with landing pages built to sell.
                    Connect ecommerce tools to showcase your products and accept
                    payments right on your page, simplifying your buyer journey.
                  </p>
                </div>
              </div>
              <div className="text">
                <FaBluetooth className="icon" />
                <div>
                  <h4>Grow your marketing agency</h4>
                  <p>
                    Expand your email list, fill your sales pipeline, and get
                    new customers. With form-based landing pages, you can
                    capture visitor information and keep your marketing funnel
                    full.
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

          <div className="package-cards-container">
            {packages.map((p, i) => {
              return <PackageCard key={i} data={p} />;
            })}
          </div>

          <div className="disclaimer-div">
            <p>
              Pricing above indicates our package pricing for professional real
              estate photography for most homes within our local Orlando service
              area. Additional fees apply for homes greater than 3,000 sq. ft.,
              as well as homes with special features such as large amounts of
              land, unique landscapes, or unique amenities. We have several
              add-on service available, which we can discuss at time of booking.
              For best service and/or any questions, please contact.
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
      </Layout>
    </>
  );
}
