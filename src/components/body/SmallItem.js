import React from "react";

const SmallItem = ({ name, boxClass }) => {
  return (
    <div className={`small-item ${boxClass}`}>
      <h3>{name}</h3>
    </div>
  );
};

export default SmallItem;
