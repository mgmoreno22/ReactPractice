import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//setup vars
const firstBook = {
  imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg",
  altTxt: "Becoming Book Cover",
  title: "Becoming",
  author: "Michelle Obama"
}

function BookList() {
  const Book = (props) => {
    return (
      <article className="book">
        <img src={props.imgSrc} alt={props.altTxt}></img>
        <h1>{props.title}</h1>
        <h2 style={{ fontSize: "16px", marginTop: "0.25rem" }}>
          {props.author.toUpperCase()}
        </h2>
      </article>
    );
  };

  return (
    <section className="booklist">
      <Book firstBook />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
