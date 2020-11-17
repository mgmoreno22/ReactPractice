import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function Greeting() {
  const Book = () => {
    return (
      <article className="book">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg"></img>
        <h1>Becoming</h1>
        <h2 style={{ fontSize: "18px", marginTop: "0.25rem" }}>
          Michelle Obama
        </h2>
      </article>
    );
  };

  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
