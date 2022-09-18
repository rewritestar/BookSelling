import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookItem from "../book_item/book_item";
import Footer from "../footer/footer";
import Header from "../header/header";
import Title from "../title/title";

const Search = (props) => {
  const location = useLocation();
  const [books, setBooks] = useState([]);
  const keyword = location.state;
  console.log(keyword);
  useEffect(() => {
    fetch(
      `https://books.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=10&key=AIzaSyA3KVPJTMb5PDt8RDEMSVoAxrZLWWhn55w`
    )
      .then((res) => res.json())
      .then((json) => setBooks(json.items));
  }, [keyword]);
  return (
    <>
      <Header />
      <Title name="search" />
      <section className="like_container">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Search;
