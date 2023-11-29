import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function BookingForm() {
  const packageChosen = useSelector(
    (state) => state.packageOptions.selectedOption
  );

  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedUrgency, setSelectedUrgency] = useState("");
  const [selectedTwilightPhotos, setSelectedTwilightPhotos] = useState(false);
  const [selectedFloorplan, setSelectedFloorplan] = useState(false);
  const [selectedStaging, setSelectedStaging] = useState("none");
  const [selectedVirtualTour, setSelectedVirtualTour] = useState("none");

  const [prospectInfo, setProspectInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    propertySize: "",
    details: "",
    package: "",
    urgency: "",
  });

  // handles logic to match clicked UI package to radio option available...........................
  useEffect(() => {
    if (packageChosen !== null) {
      setSelectedPackage(packageChosen);
    }
  }, [packageChosen]);

  // handles the photography package that the user selected.......................................
  const handlePackageChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  // handles the urgency  that the user selected...................................................
  const handleUrgencyChange = (event) => {
    setSelectedUrgency(event.target.value);
  };

  // handles option for twilight photo addon.........................................................
  const handleTwilightPhoto = () => {
    if (!selectedTwilightPhotos) {
      setSelectedTwilightPhotos(true);
    } else {
      setSelectedTwilightPhotos(false);
    }
  };

  // handles option for twilight photo addon........................................................
  const handleFloorplan = () => {
    if (!selectedFloorplan) {
      setSelectedFloorplan(true);
    } else {
      setSelectedFloorplan(false);
    }
  };

  // handles option for twilight photo addon.........................................................
  const handleStaging = (e) => {
    setSelectedStaging(e.target.value);
  };

  // handles option for twilight photo addon.........................................................
  const handleVirtualTour = (e) => {
    setSelectedVirtualTour(e.target.value);
  };

  // handles the fetch in order to send the user form to the database................................
  function handleSubmit() {
    // e.preventDefault();

    // Data being sent to DB
    const clientInfo = {
      ...prospectInfo,
      package: selectedPackage,
      twilight: selectedTwilightPhotos,
      floorplan: selectedFloorplan,
      staging: selectedStaging,
      urgency: selectedUrgency,
      virtualTour: selectedVirtualTour,
    };
    console.log(clientInfo);

    // Fetch request
    // fetch("http://localhost:3000/v1/new-user", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(clientInfo),
    // })
    //   .then((res) => {
    //     if (res.status === 201) {
    //       console.log("Submission successful");

    //       // Clear input fields.............
    setProspectInfo({
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      zip: "",
      propertySize: "",
      details: "",
      package: "",
      urgency: "",
    });
    setSelectedPackage("");
    setSelectedUrgency("");
    setSelectedTwilightPhotos(false);
    setSelectedFloorplan(false);
    setSelectedStaging("none");
    setSelectedVirtualTour("none");
    //       // setSelectedStaging("none");
    //     } else {
    //       // Handle other response statuses as errors
    //       console.log("Submission failed with status: " + res.status);

    //       // ?Checks what error status was returned
    //       switch (res.status) {
    //         case 409:
    //           return res.json().then((data) => {
    //             console.log("Response Data:", data);
    //           });
    //           break;
    //         case 400:
    //           return res.json().then((data) => {
    //             console.log("Response Data:", data.errors[0].msg);
    //           });
    //           break;
    //         case 500:
    //           console.log("database issue");
    //           return res.json().then((data) => {
    //             console.log("Response Data:", data.status);
    //           });
    //           break;
    //         default:
    //           console.log("some error");
    //       }
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Failed to connect to the server:", error);
    //   });
  }

  return (
    <div className="booking-form-shell">
      {/* PACKAGES SECT............................................................ */}
      <div className="packages-form-sect">
        <label htmlFor="packages">Packages:</label>
        <div>
          <input
            type="radio"
            id="package1"
            name="packages"
            value="Modern Listing Photo Package"
            checked={selectedPackage === "Modern Listing Photo Package"}
            onChange={handlePackageChange}
          />
          <label htmlFor="package1">Modern Listing Photo Package</label>
        </div>

        <div>
          <input
            type="radio"
            id="package2"
            name="packages"
            value="Modern Listing Video Package"
            checked={selectedPackage === "Modern Listing Video Package"}
            onChange={handlePackageChange}
          />
          <label htmlFor="package2">Modern Listing Video Package</label>
        </div>

        <div>
          <input
            type="radio"
            id="package3"
            name="packages"
            value="Full Photo/Video Package"
            checked={selectedPackage === "Full Photo/Video Package"}
            onChange={handlePackageChange}
          />
          <label htmlFor="package3">Full Photo/Video Package</label>
        </div>

        <div>
          <input
            type="radio"
            id="package3"
            name="packages"
            value="Social Media Package"
            checked={selectedPackage === "Social Media Package"}
            onChange={handlePackageChange}
          />
          <label htmlFor="package3">Social Media Package</label>
        </div>

        {/* <p>Selected Package: {selectedPackage}</p> */}
      </div>

      {/* ADDONS SECT............................................................ */}
      <div className="addons-sect">
        <label htmlFor="addons">ADD ONS:</label>
        {/* Twilight Photos Select........................... */}
        <div>
          <input
            type="checkbox"
            id="addon1"
            name="addons"
            value="Twilight Photos"
            checked={selectedTwilightPhotos}
            onChange={handleTwilightPhoto}
          />
          <label htmlFor="addon1">
            $55 - Twilight Photos{" "}
            <span className="text-gold">
              (2 Daytime Photos converted to Twilight Photos.)
            </span>
          </label>
        </div>
        {/* 2D Floor Plan Select...................................... */}
        <div>
          <input
            type="checkbox"
            id="addon2"
            name="addons"
            value="2D floorplan"
            checked={selectedFloorplan}
            onChange={handleFloorplan}
          />
          <label htmlFor="addon2">
            $50 - 2D floorplan{" "}
            <span className="text-gold">
              (help buyers envision how they would layout their new home)
            </span>
          </label>
        </div>
        {/* Virtual Staging Select...................................... */}
        {/* Virtual Staging Select...................................... */}
        {/* Virtual Staging Select...................................... */}
        <div>
          <label id="staging-label" htmlFor="virtual-staging">
            Virtual Staging
          </label>
          <select
            className="selector"
            name="virtual-staging"
            onChange={handleStaging}
          >
            <option value="none">none</option>
            <option value="staging 1 room">$40 - 1 rooms</option>
            <option value="staging 2 room">$80 - 2 rooms</option>
            <option value="staging 3 room">$120 - 3 rooms</option>
            <option value="staging 4 room">$160 - 4 rooms</option>
            <option value="staging 5 room">$220 - 5 rooms</option>
          </select>
        </div>
        {/* Virtual Tour Select...................................... */}
        {/* Virtual Tour Select...................................... */}
        {/* Virtual Tour Select...................................... */}
        <div>
          <label id="tour-label" htmlFor="virtual-tour">
            Virtual Tour
          </label>

          <select
            className="selector"
            name="virtual-tour"
            onChange={handleVirtualTour}
          >
            <option value="none">none</option>
            <option value="less than 2500sqft">
              $195 - less than 2500sqft
            </option>
            <option value="between 2501-3500 sqft">
              $250 - between 2501-3500 sqft
            </option>
            <option value="between 3501-6000 sqft">
              $295 - between 3501-6000 sqft
            </option>
            <option value="between 6001-8000 sqft">
              $395 - between 6001-8000 sqft
            </option>
          </select>
        </div>

        {/* <p>Selected Package: {selectedPackage}</p> */}
      </div>

      {/* USER INFO SECT..................................................... */}
      {/* USER INFO SECT..................................................... */}
      {/* USER INFO SECT..................................................... */}
      {/* USER INFO SECT..................................................... */}
      <div className="prospect-info-form-sect">
        <div className="title">Client Info & Property Details</div>
        <div className="user-info-container">
          <div className="name-and-num">
            <div className="name-field">
              <p>Client Full Name</p>
              <input
                type="text"
                value={prospectInfo.name}
                onChange={(e) => {
                  setProspectInfo({
                    ...prospectInfo,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            <div className="num-field">
              <p>Phone Number</p>
              <input
                type="number"
                value={prospectInfo.phone}
                onChange={(e) => {
                  setProspectInfo({
                    ...prospectInfo,
                    phone: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className="email-and-address">
            <div className="email-field">
              <p>Email Address</p>
              <input
                type="email"
                value={prospectInfo.email}
                onChange={(e) => {
                  setProspectInfo({
                    ...prospectInfo,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className="address-field">
              <p>Property Address</p>
              <input
                type="text"
                value={prospectInfo.address}
                onChange={(e) => {
                  setProspectInfo({
                    ...prospectInfo,
                    address: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className="city-and-zip">
            <div className="city-field">
              <p>City</p>
              <input
                type="text"
                value={prospectInfo.city}
                onChange={(e) => {
                  setProspectInfo({
                    ...prospectInfo,
                    city: e.target.value,
                  });
                }}
              />
            </div>
            <div className="zip-field">
              <p>Zip</p>
              <input
                type="number"
                value={prospectInfo.zip}
                onChange={(e) => {
                  setProspectInfo({
                    ...prospectInfo,
                    zip: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className="size-field">
            <p>Property Size</p>
            <input
              type="text"
              value={prospectInfo.propertySize}
              onChange={(e) => {
                setProspectInfo({
                  ...prospectInfo,
                  propertySize: e.target.value,
                });
              }}
            />
          </div>

          <div className="details-field">
            <p>Additional Details</p>
            <textarea
              cols="30"
              rows="10"
              value={prospectInfo.details}
              onChange={(e) => {
                setProspectInfo({
                  ...prospectInfo,
                  details: e.target.value,
                });
              }}
            ></textarea>
          </div>
        </div>

        {/* URGENCY OF APPOINTMENT SECT..................................................... */}
        {/* URGENCY OF APPOINTMENT SECT..................................................... */}
        {/* URGENCY OF APPOINTMENT SECT..................................................... */}
        {/* URGENCY OF APPOINTMENT SECT..................................................... */}
        <div className="urgency-form-sect">
          <label htmlFor="urgency">
            When would you like to schedule an appointment?
          </label>
          <div>
            <input
              type="radio"
              id="asap"
              name="urgency"
              value="Immediately / ASAP"
              checked={selectedUrgency === "Immediately / ASAP"}
              onChange={handleUrgencyChange}
            />
            <label htmlFor="asap">Immediately / ASAP</label>
          </div>

          <div>
            <input
              type="radio"
              id="2-5-days"
              name="urgency"
              value="Next 2-5 Days"
              checked={selectedUrgency === "Next 2-5 Days"}
              onChange={handleUrgencyChange}
            />
            <label htmlFor="2-5-days">Next 2-5 Days</label>
          </div>

          <div>
            <input
              type="radio"
              id="week-or-more"
              name="urgency"
              value="Week or More"
              checked={selectedUrgency === "Week or More"}
              onChange={handleUrgencyChange}
            />
            <label htmlFor="week-or-more">Week or More</label>
          </div>

          {/* <p>Selected Package: {selectedUrgency}</p> */}
        </div>
      </div>
      <button onClick={handleSubmit}>Submit Request</button>
    </div>
  );
}

export default BookingForm;
