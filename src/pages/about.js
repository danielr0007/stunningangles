import React from "react";
import Layout from "../components/Layout";
import GenericBanner from "../components/GenericBanner";
import MobileMenu from "../components/MobileMenu";
import { HiHomeModern } from "react-icons/hi2";
import { AiFillVideoCamera } from "react-icons/ai";
import { HiEmojiHappy } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { GiPapers } from "react-icons/gi";
import { BsLightningFill } from "react-icons/bs";
import "../styles/styles.scss";

function About() {
  return (
    <Layout>
      <MobileMenu />
      {/* SECTION ONE - BANNER......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="about-banner-section">
        <GenericBanner title="About" />
      </section>
      {/* SECTION TWO - INTRO......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="about-intro-section section-spacing">
        <div className="container-div">
          <div className="intro-text-section">
            <div className="title-container">
              <h2>ABOUT STUNNING</h2>
              <img src="/decoration-line.png" alt="" />
            </div>
            <h4>
              Helping Orlando, FL agents sell more homes with top quality media
            </h4>
            <p>
              Stunning Angles, led by Daniel, is a close-knit team with over 5
              years of visual marketing expertise. Daniel's passion for
              photography began in 2015 with e-commerce shoots, eventually
              leading him to real estate photography in 2021. The business has
              flourished, showcasing beautiful short films and residential
              photoshoots, primarily growing through word-of-mouth
              recommendations.
            </p>
            <div>
              <p>Daniel</p>
              <p>Owner, CEO</p>
            </div>
          </div>

          <div className="vision-mission-div">
            <div className="container">
              <div className="image-div">
                <img src="/iran-home-1.jpg" alt="" />
              </div>
              <h4>Our Mission</h4>
              <p>
                We aim to set ourselves apart from the competition by offering a
                service that blows people's minds. Our goal is to be the first
                choice for any realtor operating in the luxury market in need of
                top-notch photography/videography services.
              </p>
            </div>

            <div className="container">
              <div className="image-div">
                <img src="/irina-3.jpg" alt="" />
              </div>
              <h4>Our Vision</h4>
              <p>
                Our unwavering commitment: to build a brand renowned for
                exceptional creativity and top-quality work while constantly
                pushing the boundaries of what's achievable. Our aim is to
                expand further, setting new standards along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION THREE - WHY US......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="why-us-section section-spacing">
        <div className="width-container">
          <h3>Why Choose Us</h3>
          <img src="/decoration-line-2.png" alt="" />

          <div className="cards-div">
            <div className="card-div">
              <div className="icon-div">
                <HiHomeModern className="icon" />
              </div>

              <div>
                <h4>We're Specialized in Real Estate Photography:</h4>
                <p>
                  Our team consists of highly skilled and experienced
                  photographers who specialize in real estate.
                </p>
              </div>
            </div>
            <div className="card-div">
              <div className="icon-div">
                <AiFillVideoCamera className="icon" />
              </div>

              <div>
                <h4>We Shoot W/ Professional Equipment</h4>
                <p>
                  We invest in top-of-the-line camera equipment, lighting, and
                  editing tools to produce the best quality.
                </p>
              </div>
            </div>
            <div className="card-div">
              <div className="icon-div">
                <FaEye className="icon" />
              </div>

              <div>
                <h4>Our Editing Style Grabs Attention And Creates Interest</h4>
                <p>
                  Good quality is not enough, you must stand out. We edit images
                  and video strategically to make them pop.
                </p>
              </div>
            </div>
            <div className="card-div">
              <div className="icon-div">
                <BsLightningFill className="icon" />
              </div>

              <div>
                <h4>Fast Delivery of Media</h4>
                <p>
                  The instant the shoot is wrapped up, we get to editing,
                  delegating tasks to deliver the final product FAST!
                </p>
              </div>
            </div>
            <div className="card-div">
              <div className="icon-div">
                <GiPapers className="icon" />
              </div>

              <div>
                <h4>Tailored Made Packages</h4>
                <p>
                  We offer flexible packages tailored to your specific needs and
                  budget. Pick the one that matches your goals best.
                </p>
              </div>
            </div>
            <div className="card-div">
              <div className="icon-div">
                <HiEmojiHappy className="icon" />
              </div>

              <div>
                <h4>We're There For You, CONSISTENTLY</h4>
                <p>
                  Customer service so good you tell your friends, nothing less.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION FOUR - CEO MESSAGE......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="ceo-message-section section-spacing">
        <div className="width-container">
          <h3>Message from CEO</h3>
          <img src="/decoration-line.png" alt="" />
          <div className="ceo-content-div">
            <div className="ceo-pic-div">
              <img src="/me.webp" alt="" />
            </div>
            <div className="ceo-text-div">
              <h4>We Serve With Joy & Gratitude</h4>
              <p>
                I want to express my heartfelt gratitude for your trust and
                partnership. Your support is the driving force behind our
                success, and we're committed to delivering excellence in
                everything we do. As we face new challenges and opportunities
                together, know that our dedication to providing top-notch
                services remains unwavering. Your satisfaction is our priority,
                and we're excited about our journey ahead. Thank you for
                choosing us. We look forward to achieving even greater
                milestones together. <br />
                <br /> - Daniel Rasch
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
