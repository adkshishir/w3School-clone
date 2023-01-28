import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import BigItem from "./BigItem";
import MediumItem from "./MediumItem";
import SmallItem from "./SmallItem";
import Button from "./Button";
import DownItem from "./DownItem";
import "./body.css";

const Body = () => {
  return (
    <section className="container">
      <div className="item first-item ">
        <h1>Learn to Code</h1>
        <h2 style={{ color: "#ffc0c7" }}>
          With the world's largest web developer site.
        </h2>
        <input ntype="text" placeholder="Search our tutorials,e.g.HTML" />
        <span className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <div style={{ textDecoration: "underline" }}>
          Not sure Where To Begin?
        </div>
      </div>
      <svg
        style={{ backgroundColor: "#D9EEE1" }}
        width="100%"
        height="70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          id="wavepath"
          d="M0,0  L110,0C35,150 35,0 0,100z"
          fill="#282A35"
        ></path>
      </svg>
      <BigItem
        head={"HTML"}
        discription={"The Language for building web pages"}
        content={
          <pre>{`<!DOCTYPE html> 
<html>
<title>HTML Tutorial</title>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}</pre>
        }
      />
      <BigItem
        head={"CSS"}
        discription={"The Language for styling web pages"}
        content={
          <pre>{`body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
}`}</pre>
        }
      />
      <BigItem
        head={"JavaScript"}
        discription={"The Language for programming web pages"}
        content={
          <pre>{`<button onclick="myFunction()">Click Me!</button>

<script>
function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
</script>`}</pre>
        }
      />
      <BigItem
        head={"python"}
        discription={"A popular programming language"}
        content={
          <pre>{`if 5 > 2:
  print("Five is greater than two!")`}</pre>
        }
      />
      <BigItem
        head={"SQL"}
        discription={"The Language for accessing databases"}
        content={
          <pre>{`SELECT * FROM Customers
WHERE Country='Mexico';`}</pre>
        }
      />
      <div className="medium-item-container">
        <MediumItem
          head="PHP"
          discription="A web server programming language"
          boxClass={"box-pink"}
        />
        <MediumItem
          head="jQuery"
          discription="A js library for developing web pages"
          boxClass={"btn-yellow"}
        />
        <MediumItem
          head="java"
          discription="A programming language"
          boxClass={"box-light-pink"}
        />
        <MediumItem
          head="C++"
          discription="A programming language"
          boxClass={"box-light-blue"}
        />
        <MediumItem
          head="W3.CSS"
          discription="A CSS framework for faster and better responsive web pages"
          boxClass={"box-blue"}
        />
        <MediumItem
          head="Bootstrap"
          discription="A CSS framework for designing better web pages"
          boxClass={"box-light-pink"}
        />
      </div>
      <div className="small-item-container">
        <SmallItem name="C" boxClass={"box-pink"} />
        <SmallItem name="C#" boxClass={"btn-yellow"} />
        <SmallItem name="R" boxClass={"box-light-pink"} />
        <SmallItem name="Kotlin" boxClass={"box-light-blue"} />
        <SmallItem name="Node.js" boxClass={"box-blue"} />
        <SmallItem name="React" boxClass={"box-pink"} />
        <SmallItem name="JSON" boxClass={"btn-yellow"} />
        <SmallItem name="AngularJS" boxClass={"box-light-pink"} />
        <SmallItem name="MySQL" boxClass={"box-light-blue"} />
        <SmallItem name="XML" boxClass={"box-blue"} />
        <SmallItem name="Sass" boxClass={"box-pink"} />
        <SmallItem name="Icons" boxClass={"btn-yellow"} />
        <SmallItem name="RWD" boxClass={"box-light-pink"} />
        <SmallItem name="Graphics" boxClass={"box-light-blue"} />
        <SmallItem name="SVG" boxClass={"box-blue"} />
        <SmallItem name="Canvas" boxClass={"box-pink"} />
        <SmallItem name="Raspberry Pi" boxClass={"btn-yellow"} />
        <SmallItem name="Cyber Security" boxClass={"box-light-pink"} />
        <SmallItem name="Colors" boxClass={"box-light-blue"} />
        <SmallItem name="Git" boxClass={"box-blue"} />
        <SmallItem name="Matplotlib" boxClass={"box-pink"} />
        <SmallItem name="NumPy" boxClass={"btn-yellow"} />
        <SmallItem name="Pandas" boxClass={"box-light-pink"} />
        <SmallItem name="SciPy" boxClass={"box-light-blue"} />
        <SmallItem name="ASP" boxClass={"box-blue"} />
        <SmallItem name="Accessibility" boxClass={"box-pink"} />
        <SmallItem name="AppML" boxClass={"btn-yellow"} />
        <SmallItem name="Go" boxClass={"box-light-pink"} />
        <SmallItem name="TypeScript" boxClass={"box-light-blue"} />
        <SmallItem name="Django" boxClass={"box-blue"} />
        <SmallItem name="MangoDB" boxClass={"box-pink"} />
        <SmallItem name="Statistics" boxClass={"btn-yellow"} />
        <SmallItem name="DataScience" boxClass={"box-light-pink"} />
        <SmallItem name="Typing Speed" boxClass={"box-light-blue"} />
        <SmallItem name="Excel" boxClass={"box-blue"} />
        <SmallItem name="Google Sheets" boxClass={"btn-yellow"} />
        <SmallItem name="Machine Learning" boxClass={"box-pink"} />
        <SmallItem name="Artificial Intelligence" boxClass={"box-light-pink"} />
      </div>
      <div className="item btn-black down-first-item down-item">
        <h1>Code Editor</h1>
        <h3>
          With our online code editor, you can edit code and view the result in
          your browser
        </h3>
        <img
          src="https://www.w3schools.com/codeeditor.gif"
          title="Spaces"
          loading="lazy"
          alt="none"
        ></img>
        <Button
          name={"Try Frontend Editor (HTML/CSS/JS)"}
          btnClass={"btn-green"}
        />
        <Button
          name={"Try Backend Editor (Python/PHP/Java/c..)"}
          btnClass={"btn-yellow"}
        />
      </div>
      <DownItem
        head={"W3Schools Spaces"}
        content={
          <img
            src="https://www.w3schools.com/pro/pic_spaces_ide.png"
            alt="pic"
            title="Spaces"
            loading="lazy"
          ></img>
        }
        discription={`Build your own website with W3Schools Spaces`}
        name={"Get Started Now"}
        btnClass={"btn-green"}
        boxClass={"btn-black"}
      />
      <DownItem
        head={"My Learning"}
        discription={`          Track your process with free "My Learning" program
          here at W3Schools.Log in to your account,and start earning points!`}
        content={
          <img
            src="https://www.w3schools.com/myl-green-off.png"
            alt="pic"
            title="Spaces"
            loading="lazy"
          />
        }
        name={"Sign Up for Free"}
        boxClass={"box-light-blue"}
        btnClass={"btn-green"}
      />
      <DownItem
        head={"Become a PRO User"}
        discription={"And unlock powerful features:"}
        content={
          <ul>
            <li>
              Browser W3Schools <strong>without ads</strong>
            </li>
            <li>Website hosting (include Spaces PRO)</li>
            <li> Access to our HTML Video Tutorial</li>
          </ul>
        }
        boxClass={"btn-black"}
        name={"Learn More"}
        btnClass={"btn-green"}
      />

      <div className="down-item item" style={{ backgroundColor: "#F3ecea" }}>
        <h1>Color Picker</h1>
        <h3> W3Schools'famous color picker:</h3>
        <div style={{ width: "fit-content", transform: "translateX(35vw)" }}>
          <img
            className="cp-img"
            src="https://www.w3schools.com/images/colorpicker.png"
            alt="color-picker"
          />
        </div>
      </div>
      <DownItem
        head={"Code Game"}
        discription={"Help the lynx collect pine cones!"}
        content={
          <div style={{ width: "fit-content", transform: "translateX(35vw)" }}>
            <img
              className="cg-img"
              src="	https://www.w3schools.com/images/w3lynx_200.png"
              alt="code-game"
            />
          </div>
        }
        name="Play Game"
        btnClass={"btn-black"}
        boxClass={"box-blue"}
      />

      <div>
        <h1>Exercise and Quizzes</h1>
        <h3>Test your skills!</h3>
        <div>
          <Button name={"Exercise"} btnClass={"btn-green"} />
          <Button name="Quizzes" btnClass={"btn-yellow"} />
        </div>
      </div>
      <DownItem
        head="Web Templates"
        discription="Browser our selection of free responsive HTML Templates"
        name="Browser Templates"
        content={
          <img
            src="https://www.w3schools.com/w3css_templates.jpg"
            loading="lazy"
            alt="W3.CSS Templates"
          />
        }
        btnClass={"btn-black"}
      />
      <div>
        <h1>Kickstart your career</h1>
        <h2>Get certified bt completing course</h2>
        <Button name={"Get started"} btnClass={"btn-green"} />
      </div>
    </section>
  );
};

export default Body;
