import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileMenu } from "../utils/mobileMenuVisibleSlice";
import { Link } from "gatsby";

const MobileMenu = () => {
  const mobileMenuToggle = useSelector(
    (state) => state.mobileMenuVisible.value
  );
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <div className={`mobile-menu ${mobileMenuToggle ? "open" : ""}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        <MdClose className="icon" />
      </button>
      <div className="logo-container">
        <Link to="/" onClick={toggleMenu}>
          <img src="/logo.png" alt="stunning angles logo" />
        </Link>
      </div>
      <button className="phone-container">
        <FaPhone className="icon" />
        ‪(407) 815-4882‬
      </button>
      <nav className="menu-items">
        <ul>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          {/* <li>
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
          </li> */}
          <li>
            <Link to="/portfolio" onClick={toggleMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="https://portal.spiro.media/order/stunning/stunning-angles-order"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/rewards" onClick={toggleMenu}>
              Rewards
            </Link>
          </li>
          <li>
            <Link to="/#contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
