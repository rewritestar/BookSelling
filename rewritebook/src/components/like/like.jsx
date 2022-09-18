import React, { useEffect, useState } from "react";
import BookItem from "../book_item/book_item";
import Footer from "../footer/footer";
import Header from "../header/header";
import Title from "../title/title";

const Like = (props) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const newBooks = JSON.parse(localStorage.getItem("like"));
    setBooks(newBooks);
  }, [localStorage.getItem("like")]);
  return (
    <>
      <Header />
      <Title name="Like" />
      <section className="like_container">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
        <button className="delete"></button>
      </section>
      <Footer />
    </>
  );
};

export default Like;
