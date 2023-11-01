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
          15 minutes early is our standard
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
              At our company, we uphold professionalism and reliability as core
              values. We prioritize punctuality, effective communication, and
              respectful conduct. You can trust us to deliver our services with
              utmost professionalism, ensuring a smooth and dependable
              experience from start to finish.
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
          Positive attitude and collaboration
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
              Like a Chick-fil-A drive-through employee, we are eager to help,
              and do so with a big smile. At our company, we foster a positive
              and collaborative atmosphere. We value your ideas and actively
              work together to achieve your vision. We ensure a rewarding and
              enjoyable experience throughout the process.
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
          We practice clear and timely communication
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
              At our company, we prioritize strong communication. We listen to
              your needs, provide updates, and ensure your satisfaction every
              step of the way. Your project is important to us, and we value
              clear and timely communication to exceed your expectations.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamAccordion;
