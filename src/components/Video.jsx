import React from "react";
import LazyLoad from "react-lazy-load";

const Video = () => {
  return (
    <div className="vid">
      <LazyLoad offset={100} once>
        <video
          // controls
          autoPlay
          playsInline
          muted
          loop
          style={{ width: "100%", height: "100%" }}
          src="/customer-service.mp4"
        ></video>
      </LazyLoad>
    </div>
  );
};

export default Video;
