import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
function BookingForm() {
  const packageChosen = useSelector(
    (state) => state.packageOptions.selectedOption
  );
  console.log(packageChosen);

  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedUrgency, setSelectedUrgency] = useState("");
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

  useEffect(() => {
    if (packageChosen !== null) {
      setSelectedPackage(packageChosen);
    }
  }, [packageChosen]);

  const handlePackageChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  const handleUrgencyChange = (event) => {
    setSelectedUrgency(event.target.value);
  };

  function handleSubmit() {
    // e.preventDefault();

    const clientInfo = {
      ...prospectInfo,
      package: selectedPackage,
      urgency: selectedUrgency,
    };

    fetch("http://localhost:3000/v1/new-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clientInfo),
    })
      .then((res) => {
        if (res.status === 201) {
          console.log("Submission successful");

          // Clear input fields.............
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
        } else {
          // Handle other response statuses as errors
          console.log("Submission failed with status: " + res.status);

          // ?Checks what error status was returned
          switch (res.status) {
            case 409:
              return res.json().then((data) => {
                console.log("Response Data:", data);
              });
              break;
            case 400:
              return res.json().then((data) => {
                console.log("Response Data:", data.errors[0].msg);
              });
              break;
            case 500:
              console.log("database issue");
              return res.json().then((data) => {
                console.log("Response Data:", data.status);
              });
              break;
            default:
              console.log("some error");
          }
        }
      })
      .catch((error) => {
        console.error("Failed to connect to the server:", error);
      });
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
            value="Get It Sold Package"
            checked={selectedPackage === "Get It Sold Package"}
            onChange={handlePackageChange}
          />
          <label htmlFor="package1">Get It Sold Package</label>
        </div>

        <div>
          <input
            type="radio"
            id="package2"
            name="packages"
            value="Blow Them Away Package"
            checked={selectedPackage === "Blow Them Away Package"}
            onChange={handlePackageChange}
          />
          <label htmlFor="package2">
            Blow Them Away Package *most popular*
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="package3"
            name="packages"
            value="Become Unforgettable Package"
            checked={selectedPackage === "Become Unforgettable Package"}
            onChange={handlePackageChange}
          />
          <label htmlFor="package3">Become Unforgettable Package</label>
        </div>

        {/* <p>Selected Package: {selectedPackage}</p> */}
      </div>

      {/* USER INFO SECT..................................................... */}
      <div className="prospect-info-form-sect">
        <div className="title">Client Info & Property Details</div>
        <div className="user-info-container">
          <div className="name-and-num">
            <div className="name-field">
              <p>Client Name</p>
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
