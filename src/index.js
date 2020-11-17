import React from "react";
import ReactDom from "react-dom";
import './index.css';

function Greeting() {
  const Image = () => {
    return (
      <img src="https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg"></img>
    );
  };

  const Title = () => {
    return <h1>Becoming</h1>;
  };

  const Author = () => {
    return <h2 style={{fontSize: "18px", marginTop: '0.25rem'}}>Michelle Obama</h2>
  }
  
  const Book = () => {
    return (
      <article className="book">
        <Image />
        <Title />
        <Author />
      </article>
    );
  };

  return (
    <section className='booklist'>
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
