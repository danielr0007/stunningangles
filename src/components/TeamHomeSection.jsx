import React from "react";
import TeamAccordion from "../components/TeamAccordion";
import useFadeInOnScrollHook from "../utils/useFadeInOnScrollHook";
import { Link } from "gatsby";

function TeamHomeSection() {
  const { ref, isVisible } = useFadeInOnScrollHook();
  return (
    <div ref={ref} className={` ${isVisible ? "fade-in" : "opaque"}`}>
      {/* Left side */}
      <div className="left-images-container">
        <div className="image-1">
          <img src="/me.webp" alt="stunning angles team member" />
        </div>
        <div className="image-2">
          <img
            src="/handshake2-team.webp"
            alt="real estate photography client with team member"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="right-text-container">
        <p className="overheading">
          In the world of real estate, reputation is KING.
        </p>
        <h3>Elevating Your Brand Through Professionalism & Genuine Care</h3>
        <p>
          Cool fact... Reputable brands invest massive effort in selecting
          partners that enhance or, at the very least, do not harm their brand
          image. These major players recognize the difficulty of building a
          positive reputation and the ease with which it can be tarnished. As a
          brand yourself, why do any different? At Stunning Angles we take
          measures to not only protect your reputation, but to make it referral
          worthy. Every home we shoot and every homeowner we engage with
          receives exceptional professionalism and care. The same superb
          customer care you will experience on a consitent basis.
        </p>
        <TeamAccordion />

        <Link className="learn-more-button" to="/about">
          More About
        </Link>
      </div>
    </div>
  );
}

export default TeamHomeSection;
