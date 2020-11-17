import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <>
      <h1>Hello React</h1>
    </>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
