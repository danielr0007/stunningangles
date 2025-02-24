import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMobileMenu } from "../utils/mobileMenuVisibleSlice";
import { Link } from "gatsby";

function Header() {
  const dispatch = useDispatch();

  return (
    <header className="hover:bg-white absolute top-0 right-0 left-0 z-10 duration-100 ease-in transition-all">
      <nav className="flex justify-between items-center lg:w-[80%] md:w-[90%] w-full md:m-auto">
        <Link to="/">
          <img
            className="lg:w-[180px] w-[155px]"
            src="/logo.png"
            alt="stunning angles logo"
          />
        </Link>

        <ul className="lg:flex gap-x-16 hidden">
          <li>
            <Link className="informal-font text-sky-600" to="/about">
              About
            </Link>
          </li>
          {/* <li>
            <Link className="informal-font text-sky-600" to="/services">
              Services
            </Link>
          </li> */}
          <li>
            <Link className="informal-font text-sky-600" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="informal-font text-sky-600" to="/pricing">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="informal-font text-sky-600" to="/rewards">
              Rewards
            </Link>
          </li>
          <li>
            <Link className="informal-font text-sky-600" to="/#contact">
              Contact
            </Link>
          </li>
        </ul>
        <GiHamburgerMenu
          onClick={() => dispatch(toggleMobileMenu())}
          className="mr-4 text-white text-3xl cursor-pointer lg:hidden"
        />
      </nav>
    </header>
  );
}

export default Header;
