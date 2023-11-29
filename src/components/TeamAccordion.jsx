import React, { useState } from "react";

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
          Punctuality and reliability define our service
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
              We recognize how crucial timing is in real estate transactions.
              That's why we've optimized our workflow to meet deadlines
              consistently. From being punctual for every photoshoot appointment
              to delivering the final photos (they are beautiful btw) at the
              promised time, we've refined our process to not just meet but
              exceed your expectations.
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
          Our DNA: Positive attitude and collaboration
        </button>
        <div
          style={{
            maxHeight: expandedIndex === 1 ? "200px" : "0",
            overflow: "hidden",
            transition: "max-height 0.6s ease-in-out",
          }}
        >
          {expandedIndex === 1 && (
            <p>
              Embracing a positive attitude is a non-negotiable when it comes to
              rocking the Stunning Angles uniform. The truth is that we love
              what we do. Many of us began with a camera as a mere hobby, which
              has now blossomed into our fervent profession. Each photographer
              within our team is carefully selected for their distinct talent
              and innate ability to serve with attentiveness and boundless joy.
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
          Communication is the heartbeat of our partnership.
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
              We take pride in our team's prompt responses, active listening,
              and dedication to comprehending your requirements. Your feedback
              is invaluable to us at every stage, ensuring our work seamlessly
              aligns with your vision. Choose your preferred communication
              method; we're ready to address your every need.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamAccordion;
