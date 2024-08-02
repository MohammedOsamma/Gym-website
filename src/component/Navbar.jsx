import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { links } from "./../data";
import { FaBars } from "react-icons/fa6";
import "./navbar.css";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container ">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>

        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active-nav " : " ")}
                onClick={() => setIsNavShowing((prev) => !prev)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsNavShowing((prev) => !prev)}
          className="nav__toggle-btn"
        >
          {isNavShowing ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
