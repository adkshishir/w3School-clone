import React from "react";

const NavLogin = ({ value, btnClass, theirName }) => {
  return <div className={`nav-logins ${btnClass} ${theirName}`}>{value}</div>;
};

export default NavLogin;
