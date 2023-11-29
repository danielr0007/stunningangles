import React from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="section-spacing">
      <div className="socials-div">
        <FaInstagram className="icons" />
        <FaTiktok className="icons" />
        <FaYoutube className="icons" />
      </div>

      <div className="content-div">
        <div>
          <p className="label">Phone</p>
          <p className="info" id="number">
            954-415-8906
          </p>
          <p className="label">Email</p>
          <p className="info">Danielr00077@yahoo.com</p>
        </div>
        <div>
          <p>Interested In Our Services?</p>
          <button>Contact Us</button>
        </div>
        <div>
          <img src="/logo.png" alt="" />
          <p>
            An architecture and real estate visuals company based out of
            Orlando, FL
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
