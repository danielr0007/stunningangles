import React from "react";
import "../styles/styles.scss";
import { Link } from "gatsby";

function GenericBanner(props) {
  const title = props.title;
  // const breadCrumbs = props.breadCrumbs;
  return (
    <div
      className="gen-banner-container"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(26, 47, 71, 1) 10%, rgba(0, 0, 0, .7) 59%, rgba(0, 0, 0, .7) 100%),
        url("/services-background.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>{title}</h1>

      <div>
        <p>
          <Link to="/">Home</Link> {">>>"}
          <span> {title}</span>
        </p>
      </div>
    </div>
  );
}

export default GenericBanner;
