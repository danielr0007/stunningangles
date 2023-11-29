import React, { useState } from "react";

function TabsComponent() {
  const [showSection, setShowSection] = useState({
    drone: true,
    reels: false,
    twilight: false,
    staging: false,
  });

  function setDroneSect() {
    setShowSection({
      drone: true,
      reels: false,
      twilight: false,
      staging: false,
    });
  }
  function setReelsSect() {
    setShowSection({
      drone: false,
      reels: true,
      twilight: false,
      staging: false,
    });
  }
  function setTwilightSect() {
    setShowSection({
      drone: false,
      reels: false,
      twilight: true,
      staging: false,
    });
  }
  function setStagingSect() {
    setShowSection({
      drone: false,
      reels: false,
      twilight: false,
      staging: true,
    });
  }
  return (
    <div className="tab-component-div">
      <div className="tabs-div">
        <div
          className={`tab ${showSection.drone && "active-tab"}`}
          onClick={() => setDroneSect()}
        >
          Drone Shots
        </div>
        <div
          className={`tab ${showSection.reels && "active-tab"}`}
          onClick={() => setReelsSect()}
        >
          Reels Video
        </div>
        <div
          className={`tab ${showSection.twilight && "active-tab"}`}
          onClick={() => setTwilightSect()}
        >
          Twilight Photos
        </div>
        <div
          className={`tab ${showSection.staging && "active-tab"}`}
          onClick={() => setStagingSect()}
        >
          Virtual Staging
        </div>
      </div>

      {showSection.drone && (
        <div className="sect">
          <img src="/mhdrone-2.jpg" alt="" />
          <h4>Drone/Aerial Shots</h4>
          <p>
            Allow potential buyers to experience the listing from a whole new
            angle with our aerial photography. Our high-altitude images offer a
            sweeping panorama that showcases your home's architectural beauty,
            picturesque landscapes, and unique neighborhood entertainment and
            features. These bird's-eye views provide a captivating spectacle,
            allowing potential buyers to admire the sprawling landscapes,
            architectural details, and neighborhood charm in exquisite detail.
          </p>
        </div>
      )}
      {showSection.reels && (
        <div className="sect">
          <video src="/iphone-video.mp4"></video>
          <h4>Instagram & Tiktok Reels</h4>
          <p>
            Our 30-45 second vertical videos for property listings combine the
            appeal of TikTok and Instagram Reels. These captivating videos
            showcase your property's best features with music, grabbing
            attention and keeping viewers engaged. They're designed to stand out
            in a crowded market, attracting serious buyers and selling your
            property at top value. Plus, their small file size makes them easy
            to share across messaging platforms, ensuring swift exposure to a
            wide audience.
          </p>
        </div>
      )}
      {showSection.twilight && (
        <div className="sect">
          <img src="/twilight.jpeg" alt="" />
          <h4>Twilight Photos</h4>
          <p>
            By capturing homes in the soft, ambient light of twilight, this
            technique infuses warmth, charm, and sophistication, presenting
            property features in a captivating manner. Through digital editing,
            daytime photos are enhanced to emulate the magical twilight
            ambiance, highlighting the property's exterior and landscape with
            rich colors, vibrant skies, and subtle lighting adjustments. This
            transformation not only accentuates the property's beauty but also
            sparks an emotional connection, inviting potential buyers to
            envision a cozy, inviting lifestyle within the home.
          </p>
        </div>
      )}
      {showSection.staging && (
        <div className="sect">
          <img src="/virtual-staging.jpeg" alt="" />
          <h4>Virtual Staging</h4>
          <p>
            Virtual staging digitally enhances empty or minimally furnished
            properties by inserting virtual furniture and decor using
            computer-generated imagery (CGI). This technique helps buyers or
            renters envision the space's potential, making it easier for them to
            imagine living there. By showcasing a fully furnished look, virtual
            staging significantly enhances property listings, attracting more
            interest and expediting sales or rentals in a competitive real
            estate market.
          </p>
        </div>
      )}
    </div>
  );
}

export default TabsComponent;
