import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  const Message = () => <h1>Hello World</h1>

  return (
    <>
      <Message />
    </>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
