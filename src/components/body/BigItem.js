import React from "react";
import Button from "./Button";
import Media from "react-media";

const BigItem = ({ head, discription, content }) => {
  // const [dis, setDis] = useState(window.innerWidth);
  // const [color, setColor] = useState("");
  // window.onresize = function () {
  //   if (dis > 500) {
  //     setColor("red");
  //     setDis(window.innerWidth);
  //   } else {
  //     setColor("blue");
  //     setDis(window.innerWidth);
  //   }
  // };

  return (
    <div className=" item big-item ">
      <div className="big-item-child big-item-child1">
        <h1>{head}</h1>
        <h3>{discription}</h3>
        <Button name={`Learn ${head}`} btnClass="btn-green" />
        {head === "HTML" ? (
          <Button name={"Vedio Tutorial"} btnClass="btn-yellow" />
        ) : null}
        <Button name={`${head} Reference`} btnClass="btn-black" />
        <Button name={"GetCertified"} btnClass="btn-pink" />
      </div>
      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? (
            <div></div>
          ) : (
            <div
              style={{
                backgroundColor: "#e7e9eb",
                padding: "16px",
                textAlign: "left",
                margin: "1rem",
              }}
              className="big-item-child big-item-child2"
            >
              <h2
                style={{ fontSize: "24px", padding: "10px 0px" }}
              >{`${head} Example`}</h2>
              <div
                style={{
                  borderLeft: "0.4rem #04aa6d solid",
                  padding: "8px 12px",
                  backgroundColor: "white",
                  margin: "2rem 0px",
                  minHeight: "250px",
                }}
              >
                {content}
              </div>
              <Button name={"Try it Yourself"} btnClass="btn-green" />
            </div>
          )
        }
      </Media>
    </div>
  );
};

export default BigItem;
