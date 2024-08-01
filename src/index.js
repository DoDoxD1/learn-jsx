import React from "react";
import ReactDOM from "react-dom/client";

const name = "Arihant Jain";
const luckNumber = Math.ceil(Math.random() * 9);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello {name}, How are you!</h1>
    <p>Your Luck Number is: {luckNumber}</p>
  </div>
);
