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
        <p className="overheading capitalize">
          Committed to professionalism & excellence
        </p>
        <h3>Real Estate Photographers In Orlando, FL That You Can Depend On</h3>
        <p>
          You’ve got a lot on your plate, from juggling multiple roles to
          handling unexpected challenges and demanding clients. We understand.
          That’s why our mission is to provide you with stunning real estate
          photos quickly, consistently, and professionally. Count on us to be
          the reliable real estate photographer you can trust for all your media
          needs.
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
