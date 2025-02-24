import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

function TestimonialCard(props) {
  // console.log(props.pics);
  const [alternateImagesExist, setAlternateImagesExist] = useState(false);

  useEffect(() => {
    if (props.pics) {
      setAlternateImagesExist(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="testi-card">
      <div className="pic-container">
        <img
          src={alternateImagesExist ? props.pics : props.testi.image}
          alt=""
        />
      </div>
      <h4>{props.testi.name}</h4>
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p>{props.testi.message}</p>
    </div>
  );
}

export default TestimonialCard;
