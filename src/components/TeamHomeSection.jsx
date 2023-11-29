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
        <h3>
          Our mission? Serving and representing you in the best possible light.
        </h3>
        <p>
          As real estate photographers, we are a reflection of the agents that
          we shoot for, and here at Stunning Angles, we don't take that
          responsibility lightly. For that reason, if we photograph an occupied
          home, you better believe that we make it our top priority that your
          seller feels completely comfortable; served with the utmost
          professionalism and care. Our aim is to make you look like the top
          professional that you are while providing you with unrivaled customer
          service CONSISTENTLY.
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
