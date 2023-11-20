import React from "react";
import Layout from "../components/Layout";
import GenericBanner from "../components/GenericBanner";
import MobileMenu from "../components/MobileMenu";
import { MdMoreTime } from "react-icons/md";
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
            <h4>Delivering the best quality to our clients.</h4>
            <p>
              Stunning Angles is a small team with over a decade of experience
              in visual marketing. The owner, Daniel Rasch, first picked up a
              camera in 2009 and started out filming short film documentaries.
              The love for the art of photography grew over the years and Daniel
              started exploring architectural photography in 2014. After
              creating a few luxury short films and several residential
              photoshoots, the business began to grow, solely through word of
              mouth marketing.
            </p>
            <div>
              <p>Daniel</p>
              <p>Owner, CEO</p>
            </div>
          </div>

          <div className="vision-mission-div">
            <div className="container">
              <div className="image-div">
                <img src="/poggi-3.jpg" alt="" />
              </div>
              <h4>Our Mission</h4>
              <p>
                Be the most recognized leader in the architecture and real
                estate visuals industry. To constantly evolve and produce the
                best creative work possible. To "always be learning.
              </p>
            </div>

            <div className="container">
              <div className="image-div">
                <img src="/poggi-7.jpg" alt="" />
              </div>
              <h4>Our Vision</h4>
              <p>
                We will continue to create a brand recognized for outstanding
                creative and quality work while pushing the boundaries of what's
                been done. Pushing further into the luxury market.
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
                <MdMoreTime className="icon" />
              </div>

              <div>
                <h4>Expertise in Real Estate Photography:</h4>
                <p>
                  Our team consists of highly skilled and experienced
                  photographers who specialize in real estate.
                </p>
              </div>
            </div>
            <div className="card-div">
              <div className="icon-div">
                <MdMoreTime className="icon" />
              </div>

              <div>
                <h4>Professional Equipment</h4>
                <p>
                  We invest in top-of-the-line camera equipment, lighting, and
                  editing tools to capture high-quality images.
                </p>
              </div>
            </div>
            <div className="card-div">
              <div className="icon-div">
                <MdMoreTime className="icon" />
              </div>

              <div>
                <h4>Stunning Visuals</h4>
                <p>We have a keen eye for composition, lighting, and detail.</p>
              </div>
            </div>
            <div className="card-div">
              <div className="icon-div">
                <MdMoreTime className="icon" />
              </div>

              <div>
                <h4>Quick Turnaround</h4>
                <p>
                  We understand the fast-paced nature of the real estate market.
                </p>
              </div>
            </div>
            <div className="card-div">
              <div className="icon-div">
                <MdMoreTime className="icon" />
              </div>

              <div>
                <h4>Customized Packages</h4>
                <p>
                  We offer flexible packages tailored to your specific needs and
                  budget.
                </p>
              </div>
            </div>
            <div className="card-div">
              <div className="icon-div">
                <MdMoreTime className="icon" />
              </div>

              <div>
                <h4>Exceptional Customer Service</h4>
                <p>We prioritize communication and collaboration.</p>
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
              <img src="/me.jpg" alt="" />
            </div>
            <div className="ceo-text-div">
              <h4>We Serve With Joy</h4>
              <p>
                I want to express my heartfelt gratitude for your trust and
                partnership. Your support is the driving force behind our
                success, and we're committed to delivering excellence in
                everything we do. As we face new challenges and opportunities
                together, know that our dedication to providing top-notch
                products and services remains unwavering. Your satisfaction is
                our priority, and we're excited about our journey ahead. Thank
                you for choosing us. We look forward to achieving even greater
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
