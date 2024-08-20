import React from "react";

let text = "morning";
const date = new Date();
const hour = date.getHours();
const customHeadingStyle = {
  color: "red",
};
if (hour > 12 && hour < 18) {
  text = "afternoon";
  customHeadingStyle.color = "green";
} else {
  text = "evening";
  customHeadingStyle.color = "blue";
}

function Header() {
  return (
    <h1
      className="heading"
      style={customHeadingStyle}
      contentEditable="true"
      spellCheck="false"
    >
      Good {text} !
    </h1>
  );
}

export default Header;
