import { useState, useEffect } from "react";
import "../../styles/Dropdown.css";
import DropdownContent from "./DropdownContent";

function Dropdown() {
  // toggle visibility of options
  const [toggleOptions, setOptions] = useState(false);
  const [isClicked, setClicked] = useState(false);

  // conditional render content
  const [showContent1, setContent1] = useState(true);
  const [showContent2, setContent2] = useState(false);

  // options toggle
  const handleToggle = () => {
    setOptions(!toggleOptions);
    setClicked(!isClicked);
  };

  const handleContent = () => {
    setContent1(!showContent1);
    setContent2(!showContent2);
  };

  // options handler
  // FRONT OF HOUSE option
  const option1 = (
    <p
      className={!showContent1 ? "option1 optionsBtn btn" : "clicked"}
      onClick={() => {
        handleToggle();
        handleContent();
      }}
    >
      Front of house
    </p>
  );

  // BAKER option
  const option2 = (
    <p
      className={!showContent2 ? "option2 optionsBtn btn" : "clicked"}
      onClick={() => {
        handleToggle();
        handleContent();
      }}
    >
      Baker
    </p>
  );

  // markup of dropdown options
  const dropDownOptions = (
    <div
      className={
        !isClicked ? "dropdownOptions " : "dropdownOptions  dropdownClicked"
      }
    >
      {option1}
      {option2}
    </div>
  );

  return (
    <div className="dropdownMenu">
      <div className="btn">
        <p className="btn" onClick={handleToggle}>
          Choose an option
        </p>
        {dropDownOptions}
      </div>

      {showContent1 && (
        <DropdownContent
          image="https://via.placeholder.com/500.png"
          header="Front of house"
          para1="Our front-of-house team is the bridge to everyone who walks through our doors. Your role includes confidently interacting and engaging with our customers, as well as creating a positive and warm environment."
          para2="We value efficiency, positivity, and initiative. Previous experience in service is appreciated, but not necessary."
          para3="Full-time roles include generous perks and performance-based bonuses. Part-time roles require a minimum of 16 hours/week."
        />
      )}
      {showContent2 && (
        <DropdownContent
          image="https://via.placeholder.com/500.png"
          header="Bakers"
          para1="Your role is vital at Champion Bolo Bun, as you work alongside other bakers to produce our range of Bolo Buns in a fast-paced environment."
          para2="You should be skilled and passionate about bread making; prioritizing detail and quality. As you will be working with other bakers, communication and teamwork are important. Initiative and willingness to learn are appreciated."
          para3="Knowledge of the fundamentals of bread making is necessary, and you should have a minimum of 1-year of industry experience in bread making to be eligible for this role."
        />
      )}
    </div>
  );
}

export default Dropdown;
