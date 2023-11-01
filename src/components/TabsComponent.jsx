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
          <img src="/10.jpg" alt="" />
          <h4>Drone Shots</h4>
          <p>
            We charge just $95 for our 6 drone photo package. Our photographers
            are FAA Part 107 Certified so you can rest easily knowing you will
            not only get high quality drone photos, but also legal drone photos
          </p>
        </div>
      )}
      {showSection.reels && (
        <div className="sect">
          <img src="/11.jpg" alt="" />
          <h4>Instagram & Tiktok Video</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            laborum sint delectus deserunt molestias voluptatibus ipsam cumque
            in? Quisquam repellendus numquam dolorum a quis ipsa tempore
            possimus ratione vel impedit.
          </p>
        </div>
      )}
      {showSection.twilight && (
        <div className="sect">
          <img src="/12.jpg" alt="" />
          <h4>Twilight Photos</h4>
          <p>
            We offer both standard twilight photos (taken at dusk) and virtual
            twilight photos (daylight photos edited to resemble dusk photos).
            Our virtual twilight photo package is $95 for 4 photos, and our
            standard twilight photos are $195 for 4 photos.
          </p>
        </div>
      )}
      {showSection.staging && (
        <div className="sect">
          <img src="/13.jpg" alt="" />
          <h4>Virtual Staging</h4>
          <p>
            Virtual staging is a real estate photography service that digitally
            enhances and furnishes empty or minimally furnished properties to
            make them more appealing to potential buyers or renters. It involves
            using computer-generated imagery (CGI) to insert virtual furniture,
            decor, and other elements into photographs of vacant rooms. This
            technique helps prospective buyers visualize the full potential and
            functionality of a space, making it easier for them to imagine
            themselves living in the property. Virtual staging can significantly
            enhance property listings and attract more interest, ultimately
            leading to quicker sales or rentals in the competitive real estate
            market.
          </p>
        </div>
      )}
    </div>
  );
}

export default TabsComponent;
