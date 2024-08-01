import React from "react";
import ReactDOM from "react-dom/client";

const name = "Arihant Jain";
const imgUrl = "https://picsum.photos/200/300";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Created by {name}
    </h1>
    <div className="container">
      <img src={imgUrl + "?grayscale"} />
      <img src={imgUrl} />
      <img src={imgUrl + "?grayscale"} />
    </div>
  </div>
);
