import React from "react";
import { FaStar } from "react-icons/fa";

function TestimonialCard() {
  return (
    <div className="testi-card">
      <img src="/realtor-1.webp" alt="" />
      <h4>Daniel Rasch</h4>
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
        maiores vero asperiores iusto incidunt! Inventore neque vero quas
        repellat suscipit consequatur, amet optio, accusamus corrupti sit nulla
        in veniam laudantium!
      </p>
    </div>
  );
}

export default TestimonialCard;
