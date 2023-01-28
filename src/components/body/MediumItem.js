import React from "react";
import Button from "./Button";

const MediumItem = ({ head, discription, boxClass }) => {
  return (
    <div className={`medium-item ${boxClass}`}>
      <h1>{head}</h1>
      <h3>{discription}</h3>
      <Button name={`Learn ${head}`} btnClass="btn-black" />
    </div>
  );
};

export default MediumItem;
