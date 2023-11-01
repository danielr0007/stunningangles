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
          <img src="/team-1.jpg" alt="" />
        </div>
        <div className="image-2">
          <img src="/team-2.jpg" alt="" />
        </div>
      </div>

      {/* Right side */}
      <div className="right-text-container">
        <p className="overheading">In Real Estate Reputation is Everything</p>
        <h3>Our Company Mission is to Show The Upmost Professionalism</h3>
        <p>
          We understand that we are a direct reflection of you, and we don't
          take that responsibility lightly. All of our photographers are picked
          with professionalism in mind, and then trained to provide exceptional
          customer service.
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
