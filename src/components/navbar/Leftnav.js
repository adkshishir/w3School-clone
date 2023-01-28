import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faRoad,
//   faSortDown,
//   faSortUp,
// } from "@fortawesome/free-solid-svg-icons";

const Leftnav = ({ name, onclick, active, icons }) => {
  return (
    <div onClick={onclick} className="left-nav-item">
      {name}
      <span className={active}>
        <FontAwesomeIcon icon={icons} />
      </span>
    </div>
  );
};

export default Leftnav;
