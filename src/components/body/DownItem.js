import React from "react";
import Button from "./Button";

const DownItem = ({ head, discription, content, name, btnClass, boxClass }) => {
  return (
    <div className={`item down-item ${boxClass} down-btn-manager`}>
      <h1>{head}</h1>
      <h3>{discription}</h3>
      <div>{content}</div>
      {head === "W3Schools Spaces" ? (
        <img src="https://www.w3schools.com/how-spaces-works3.png" alt="work" />
      ) : (
        ""
      )}
      <Button name={name} btnClass={btnClass} />
    </div>
  );
};

export default DownItem;
