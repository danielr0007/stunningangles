import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMobileMenu } from "../utils/mobileMenuVisibleSlice";
import { Link } from "gatsby";

function Header() {
  const dispatch = useDispatch();

  return (
    <header>
      <nav>
        <Link to="/">
          <img className="logo" src="/logo.png" alt="stunning angles logo" />
        </Link>

        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
        <GiHamburgerMenu
          onClick={() => dispatch(toggleMobileMenu())}
          className="menu-icon"
        />
      </nav>
    </header>
  );
}

export default Header;
