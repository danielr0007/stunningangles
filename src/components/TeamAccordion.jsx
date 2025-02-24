import React, { useState } from "react";
import TabArrow from "./TabArrow";

const TeamAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion-container">
      {/* Accordion 1......................... */}
      <div className="indi-accordion">
        <button
          className={`acc-1 ${expandedIndex === 0 ? "active" : ""}`}
          onClick={() => handleAccordionClick(0)}
        >
          Punctuality & Consistency Define Our Service{" "}
          <span>
            <TabArrow selected={expandedIndex === 0} />
          </span>
        </button>
        <div
          style={{
            maxHeight: expandedIndex === 0 ? "200px" : "0",
            overflow: "hidden",
            transition: "max-height 0.6s ease-in-out",
          }}
        >
          {expandedIndex === 0 && (
            <p>
              Sellers want their homes sold quickly, which is why we’ve
              optimized our workflow to consistently meet deadlines. From
              punctual photo sessions to delivering final media on time, our
              streamlined process is built to match the fast pace of real
              estate.
            </p>
          )}
        </div>
      </div>
      {/* Accordion 2......................... */}
      <div className="indi-accordion">
        <button
          className={`acc-2 ${expandedIndex === 1 ? "active" : ""}`}
          onClick={() => handleAccordionClick(1)}
        >
          Flexible & Accommodating{" "}
          <span>
            <TabArrow selected={expandedIndex === 1} />
          </span>
        </button>
        <div
          style={{
            maxHeight: expandedIndex === 1 ? "250px" : "0",
            overflow: "hidden",
            transition: "max-height 0.6s ease-in-out",
          }}
        >
          {expandedIndex === 1 && (
            <p>
              Life can be chaotic, especially in real estate. That’s why we
              offer flexible scheduling. Need a photo session ASAP? We’ve got
              you covered. Need to reschedule? No problem! Just let us know your
              needs, and we’ll find a way to help
            </p>
          )}
        </div>
      </div>
      {/* Accordion 3......................... */}
      <div className="indi-accordion">
        <button
          className={`acc-3 ${expandedIndex === 2 ? "active" : ""}`}
          onClick={() => handleAccordionClick(2)}
        >
          Communication is The Heartbeat of Our Partnership.
          <span>
            <TabArrow selected={expandedIndex === 2} />
          </span>
        </button>
        <div
          style={{
            maxHeight: expandedIndex === 2 ? "200px" : "0",
            overflow: "hidden",
            transition: "max-height 0.6s ease-in-out",
          }}
        >
          {expandedIndex === 2 && (
            <p>
              We take pride in prompt responses, active listening, and a deep
              commitment to understanding your needs. Your feedback is
              invaluable at every stage, helping us ensure our work aligns
              perfectly with your vision. Reach out to us through your preferred
              communication method—we’re always listening.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamAccordion;
