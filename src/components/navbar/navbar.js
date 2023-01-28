import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";
import {
  faSortDown,
  faSortUp,
  faMagnifyingGlass,
  faCircleHalfStroke,
  faEarthAsia,
} from "@fortawesome/free-solid-svg-icons";

import Leftnav from "./Leftnav";
import MiddleNav from "./MiddleNav";
import NavLogin from "./NavLogin";
const Navbar = () => {
  const [active, setActive] = useState(0);
  const OnClick = (value) => {
    active ? setActive(0) : setActive(value);
  };
  return (
    <nav className="nav main-nav">
      <nav className="left-nav nav">
        <a
          href="https://www.w3schools.com "
          className="w3-bar-item w3-button w3-hover-none w3-left w3-padding-16"
          title="Home"
          style={{ width: "77px" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/64px-W3Schools_logo.svg.png"
            alt="logo"
            style={{
              width: "50px",
            }}
          />
        </a>
        <Leftnav
          active={active === 1 ? "active" : null}
          onclick={() => OnClick(1)}
          name={"Tutorials "}
          icons={active === 1 ? faSortUp : faSortDown}
        />
        <Leftnav
          active={active === 2 ? "active" : null}
          onclick={() => OnClick(2)}
          name={"References"}
          icons={active === 2 ? faSortUp : faSortDown}
        />
        <Leftnav
          active={active === 3 ? "active" : null}
          onclick={() => OnClick(3)}
          name={"Exercies"}
          icons={active === 3 ? faSortUp : faSortDown}
        />
        <div className="left-nav-item">Vedios</div>
      </nav>
      <nav className="nav-menu">
        <div>
          menu
          <FontAwesomeIcon icon={faSortDown} />
        </div>
      </nav>
      <nav className="middle-nav nav">
        <MiddleNav content={<FontAwesomeIcon icon={faCircleHalfStroke} />} />
        <MiddleNav content={<FontAwesomeIcon icon={faEarthAsia} />} />
        <MiddleNav content={<FontAwesomeIcon icon={faMagnifyingGlass} />} />

        <NavLogin
          value="Sign Up"
          btnClass={"btn-pink"}
          theirName={"btn-signUp"}
        />
        <NavLogin
          value="Upgrade"
          btnClass={"btn-black"}
          theirName={"btn-upgrade"}
        />
        <NavLogin
          value="Get Certified"
          btnClass={"btn-green"}
          theirName={"btn-certification"}
        />
        <NavLogin
          value="Create Website"
          btnClass={"btn-yellow"}
          theirName={"btn-createweb"}
        />
        <NavLogin value="log in" btnClass={"btn-green"} />
      </nav>
    </nav>
  );
};

export default Navbar;
