import React, { useState, useEffect } from "react";
import { specialOfferProcess } from "../utils/data";
import ProcessStep from "../components/ProcessStep";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imagesData, testimonials } from "../utils/data";
// import LeadForm from "../components/specialoffer/LeadForm";
import { Link } from "gatsby";
import { FaUserCheck, FaRegCalendarCheck } from "react-icons/fa";
import { PiTelevisionSimple } from "react-icons/pi";
import { TbMailFast } from "react-icons/tb";
import { IoHappyOutline } from "react-icons/io5";
import ToCheckoutComponent from "../components/specialoffer/ToCheckoutComponent";
import Marquee from "react-fast-marquee";
import TestimonialCard from "../components/TestimonialCard";
// import LazyLoad from "react-lazy-load";
import chris from "../../static/chris.jpg";
import dar from "../../static/dar.jpg";
import nichole from "../../static/nichole.jpg";
import omar from "../../static/omar.jpg";
import jorge from "../../static/jorge.jpg";
import { Helmet } from "react-helmet";

function SpecialOffer() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const pics = [jorge, omar, dar, nichole, chris];

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
      <Helmet>
        {/* HOTJAR........................... */}
        <script>
          {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3801883,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
        </script>

        {/* Google analytics........................ */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZQLQGED39F"
        ></script>
        <script>
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZQLQGED39F');`}
        </script>

        {/* <!-- Google tag CONVERSIONS (gtag.js)............................. --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11418107590"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11418107590');`}
        </script>

        {/* FACEBOOK DOMAIN VERIFICATION............... */}
        <meta
          name="facebook-domain-verification"
          content="ooxiek6thr6g7w1glt0z1r9hj1i4bo"
        />
      </Helmet>
      {/* HEADER.......................................... */}
      {/* HEADER.......................................... */}
      {/* HEADER.......................................... */}
      {/* HEADER.......................................... */}
      <div className="bg-[#60203a] md:h-[280px] h-[220px]">
        <div>
          <Link to="/">
            <img
              className="m-auto md:w-[350px] w-[300px]"
              src="/logo.png"
              alt="logo"
            />
          </Link>
        </div>
      </div>

      {/* HERO SECTION.................................. */}
      {/* HERO SECTION.................................. */}
      {/* HERO SECTION.................................. */}
      {/* HERO SECTION.................................. */}
      {/* HERO SECTION.................................. */}
      <section className="hero-section" id="promo">
        <div className="width-container">
          <div className="message-div">
            <h1 className="md:text-5xl text-3xl mb-10 md:leading-snug leading-snug">
              Secure a Pro Real Estate Photographer for Only $149 w/ This
              JamPacked Valentines Bundle Deal
            </h1>
            <h2 className="md:text-4xl text-2xl text-[#e6b35b] mb-16 md:leading-snug leading-snug ">
              25% OFF Regular Price + Free Floorplan
            </h2>
            <p>
              30 beautiful professionally edited listing photos ***five of them
              aerial*** delivered the next day—plus marketing materials
              (responsive listing website, social media posts, listing flyers,
              and a slide-show video). **Normally $197** <br />
              <br />
              <span className="text-xl">
                We serve Orlando Area, Orange County, Seminole County, and Lake
                County
              </span>
            </p>

            <div className="media-container" id="checkout">
              <Slider {...settings}>
                <img
                  className="slider-image"
                  src={imagesData[9].image}
                  alt=""
                />
                <img
                  className="slider-image"
                  src={imagesData[19].image}
                  alt=""
                />
                <img
                  className="slider-image"
                  src={imagesData[15].image}
                  alt=""
                />
                <img
                  className="slider-image"
                  src={imagesData[32].image}
                  alt=""
                />
                <img
                  className="slider-image"
                  src={imagesData[6].image}
                  alt=""
                />
                <img
                  className="slider-image"
                  src={imagesData[12].image}
                  alt=""
                />
                <img
                  className="slider-image"
                  src={imagesData[17].image}
                  alt=""
                />
              </Slider>
            </div>

            <ToCheckoutComponent />
            {/* <a
              className=" bg-[#f64a64] px-20 py-6 text-lg mb-6 block hover:bg-[#e6b35b] transition-all duration-250 ease-in"
              href="https://portal.spiro.media/order/stunning/valentine-special-offer"
            >
              Secure My Shoot Now
            </a> */}

            <p className="small-writing">
              *Can be redeemed only once. Photo package only. No cinematic
              video. Does not include media add-ons. Offer expires March 1st,
              2024, or when fully booked for February-March.*
            </p>
          </div>
          {/* FORM..................................... */}
          {/* FORM..................................... */}
        </div>
      </section>

      {/* GALLERY........................................ */}
      {/* GALLERY........................................ */}
      {/* GALLERY........................................ */}
      {/* GALLERY........................................ */}
      {/* GALLERY........................................ */}
      <section id="gallery">
        {/* <LazyLoad offset={200} once> */}
        <div className="images-container-special">
          {imagesData.slice(0, 16).map((imagesData, index) => (
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

      {/* THE 3 F's SECTION............................... */}
      {/* THE 3 F's SECTION............................... */}
      {/* THE 3 F's SECTION............................... */}
      {/* THE 3 F's SECTION............................... */}
      <section className="three-f-section">
        <div className="container m-auto pt-14 md:pb-14 pb-14 md:px-10 px-6 text-white">
          <p className=" text-yellow-600 mb-4">WHY GO WITH US?</p>
          <h2 className="lg:text-[45px] md:text-4xl lg:w-8/12 md:w-10/12 lg:leading-tight leading-normal text-3xl sect-title mb-16">
            Our Commitment to the 3 F's Keep Our Clients Coming Back
          </h2>
          <div className="lg:flex">
            <div className="md:px-10 px-6 lg:mb-0 mb-12 border-l-[1px] border-zinc-400 basis-1/3">
              <TbMailFast className="text-4xl mb-5" />
              <h4 className="sect-ititle text-xl font-semibold mb-5">Fast</h4>
              <p>
                Next-day delivery without compromising quality. A quick
                turnaround allows our clients to place their listings on the
                market in a flash!
              </p>
            </div>
            <div className="md:px-10 px-6 lg:mb-0 mb-12 border-l-[1px] border-zinc-400 basis-1/3">
              <FaRegCalendarCheck className="text-4xl mb-5" />
              <h4 className="sect-ititle text-xl font-semibold mb-5">
                Flexible
              </h4>
              <p>
                Life can be chaotic, especially in Real Estate—that's why we
                have flexible scheduling. Need a photo session ASAP? We're on
                it. Something came up and need to reschedule? No problem!
              </p>
            </div>
            <div className="md:px-10 px-6 lg:mb-0 mb-12 border-l-[1px] border-zinc-400 basis-1/3">
              <IoHappyOutline className="text-4xl mb-5" />
              <h4 className="sect-ititle text-xl font-semibold mb-5">
                Friendly
              </h4>
              <p>
                Sure, photos and videos are our thing... But ultimately we're in
                the business of people. We serve our clients with attentiveness
                and smiles.
              </p>
            </div>
          </div>

          <div className="lg:mt-32 mt-24">
            <p className="pb-10 text-lg lg:w-8/12 md:w-11/12 w-12/12 italic">
              "We strive to build a close working relationship with all of our
              clients by being accommodating and eager to help. Rest assured,
              you are our priority.."
            </p>

            <div className="flex justify-start items-center gap-5">
              <div className="w-[50px] h-[50px] rounded-full">
                <img
                  className="object-cover h-full w-full rounded-full"
                  src="/me.webp"
                  alt=""
                />
              </div>
              <p className="text-sm">- Daniel, CEO and Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION............................ */}
      {/* HOW IT WORKS SECTION............................ */}
      {/* HOW IT WORKS SECTION............................ */}
      {/* HOW IT WORKS SECTION............................ */}
      {/* HOW IT WORKS SECTION............................ */}
      <section
        id="process"
        className="process-section-outer-container section-spacing relative"
      >
        {/* SHAPE DIVIDER........................................ */}
        {/* SHAPE DIVIDER........................................ */}
        {/* SHAPE DIVIDER........................................ */}
        <div class="custom-shape-divider-top-1707163441 md:block hidden">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        {/* SECTION CONTENT.............................................. */}
        {/* SECTION CONTENT.............................................. */}
        {/* SECTION CONTENT.............................................. */}
        <h3 className="md:mt-14">Our process is simple</h3>
        <p>
          After purchasing this deal, you'll receive a promo code and a link for
          you to book your session. The code does not expire, redeem when
          needed.
        </p>

        <div className="process-cards-container">
          {specialOfferProcess.map((item) => (
            <ProcessStep key={item.id} data={item} />
          ))}
        </div>
      </section>

      {/* WHAT THE PACKAGE INCLUDES.......................... */}
      {/* WHAT THE PACKAGE INCLUDES.......................... */}
      {/* WHAT THE PACKAGE INCLUDES.......................... */}
      {/* WHAT THE PACKAGE INCLUDES.......................... */}
      {/* WHAT THE PACKAGE INCLUDES.......................... */}
      <section id="package" className=" bg-slate-50 py-14 md:px-10 px-6">
        <div className="container m-auto">
          <h2 className="sect-title md:text-4xl text-3xl font-light mb-10">
            A Hot Deal For You
          </h2>
          <div className="relative w-full h-full py-14 border-y-[1px] border-t-black border-b-black lg:flex lg:gap-11">
            <div className="basis-1/2">
              <h3 className="sect-3-ititle md:text-3xl text-2xl font-light mb-6">
                A Potent Media Package To Show Off Your Listing
              </h3>
              <p className="lg:w-10/12 lg:mb-0 mb-10  md:text-xl text-base leading-8">
                We don't have Cupid's arrows but this is the next best thing. A
                media package designed to capture and show the best a property
                has to offer in a variety of different ways.
              </p>
            </div>
            <img
              src="/cupid.png"
              alt=""
              className="absolute xl:top-72 xl:left-96 xl:block hidden xl:w-64 "
            />
            <div className="basis-1/2 flex justify-center items-center">
              <div className="special-offer-package-card-shell lg:w-[550px] relative">
                <img
                  src="/twenty5-off.png"
                  alt=""
                  className="absolute md:-top-12 md:-left-12 -top-8 -left-6 md:w-28 w-20"
                />
                <h3>Complete Marketing Photo Blitz</h3>
                <p>
                  Beautiful high-resolution images with a modern feature-packed
                  website and eye-catching social posts all in one mighty
                  bundle.
                </p>

                <p className="price">$197.00</p>
                <p className="new-price">$149.00</p>

                <div>
                  <ul>
                    <li>25 MLS High-Res Photos</li>
                    <li>
                      5 Aerial/Drone Photos (Home & Neighborhood & Community
                      Amenities)
                    </li>
                    <li>Professional HDR Editing</li>
                    <li>Image SlideShow Video</li>
                    <li>Modern Feature Packed Listing Website</li>
                    <li>Premade Flyers</li>
                    <li>Premade Social Media Posts</li>
                    <li>
                      Delivered in both High Resolution and MLS or AirBnB format
                    </li>
                  </ul>
                </div>

                <Link to="/specialoffer#checkout">Order Package Now</Link>
              </div>
            </div>
          </div>

          {/* Second selling point.................................. */}
          {/* Second selling point.................................. */}
          {/* Second selling point.................................. */}
          <div className="w-full py-14 lg:flex lg:gap-11">
            <div className=" basis-1/2">
              <h3 className="sect-ititle md:text-3xl text-2xl font-light mb-6">
                Free 2D Floorplan
              </h3>
              <p className="lg:w-10/12 lg:mb-0 mb-10  md:text-xl text-base leading-8">
                Normally $50...Free with this offer. Our precise floorplans
                bring clarity and structure to your listings, helping buyers
                imagine furnishing their future home.
              </p>
            </div>
            <div className="basis-1/2 flex justify-center items-center">
              <div className="lg:w-[550px] shadow-md bg-white p-8 rounded-3xl flex justify-center items-center">
                <img src="/floor-plan.jpg" alt="" />
              </div>
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
              website <span className="text-gold">INCLUDED</span>
            </h3>
            <div className="text">
              <PiTelevisionSimple className="icon" />
              <div>
                <h4>
                  Squeeze every drop of persuasion power out of photos and video
                  by displaying them at full resolution
                </h4>
                <p className="first-para">
                  MLS compresses images, resulting in a scrunched and often
                  blurry appearance. In contrast, Our listing sites ensure that
                  all images and videos are showcased in full high-definition,
                  presenting a sharp, detailed, and vivid visual experience.
                </p>
              </div>
            </div>
            <div className="text">
              <FaUserCheck className="icon" />
              <div>
                <h4>Lock engagement with a Speedy/Intuitive user experience</h4>
                <p>
                  Navigation can be slow and challenging on MLS. Our listing
                  site focuses solely on one property, ensuring exceptional
                  speed and responsiveness. Additionally, our site's navigation
                  is highly intuitive, delivering a superb user experience
                  sellers and buyers will be impressed by.
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
              <span className="text-gold">INCLUDED</span>
            </h3>
            <div className="text">
              <PiTelevisionSimple className="icon" />
              <div>
                <h4>
                  Spread the word with beautiful flyers displaying the top
                  photos from your listing.
                </h4>
                <p className="first-para">
                  Expand your marketing by handing out flyers at your open
                  houses, we make it easy by disigning them for you. With every
                  shoot you get 5 different beautiful designs to choose from.
                </p>
              </div>
            </div>
            <div className="text">
              <FaUserCheck className="icon" />
              <div>
                <h4>
                  Stop scrolling and get people to focus on your listing with
                  engaging social media feed/story posts
                </h4>
                <p>
                  Our beautifully structured, color rich, movement packed social
                  media posts are yours to show off your listing in a manner
                  that will command attention and engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION.................................................. */}
      {/* TESTIMONIAL SECTION.................................................. */}
      {/* TESTIMONIAL SECTION.................................................. */}
      {/* TESTIMONIAL SECTION.................................................. */}
      {/* TESTIMONIAL SECTION.................................................. */}
      {/* TESTIMONIAL SECTION.................................................. */}
      <section
        id="testimonials"
        className="testimonial-section-outer-container section-spacing"
      >
        <div className="testimonial-carousel-container">
          <Marquee
            style={{ marginBottom: ".5rem" }}
            pauseOnHover={true}
            speed={35}
          >
            <TestimonialCard testi={testimonials[0]} pics={pics[0]} />
            <TestimonialCard testi={testimonials[1]} pics={pics[1]} />
            <TestimonialCard testi={testimonials[2]} pics={pics[2]} />
            <TestimonialCard testi={testimonials[3]} pics={pics[3]} />
            <TestimonialCard testi={testimonials[4]} pics={pics[4]} />
            {/* <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard /> */}
          </Marquee>
          {/* <Marquee pauseOnHover={true} speed={20} direction="right">
            <TestimonialCard testi={testimonials[0]} />
            <TestimonialCard testi={testimonials[1]} />
            <TestimonialCard testi={testimonials[2]} />
            <TestimonialCard testi={testimonials[3]} />
            <TestimonialCard testi={testimonials[4]} />
          </Marquee> */}
        </div>
      </section>

      {/* FOOTER................................. */}
      {/* FOOTER................................. */}
      {/* FOOTER................................. */}
      {/* FOOTER................................. */}
      {/* FOOTER................................. */}
      <div className="footer">
        ©2024 Stunning Angles. Real Estate Photography Services. <br />
        All rights reserved.
      </div>
    </>
  );
}

export default SpecialOffer;
