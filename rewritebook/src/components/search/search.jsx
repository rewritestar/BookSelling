import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookItem from "../book_item/book_item";
import Footer from "../footer/footer";
import Header from "../header/header";
import Title from "../title/title";

const Search = ({ HeaderCartCount }) => {
  const location = useLocation();
  const [books, setBooks] = useState([]);
  const keyword = location.state;
  console.log(keyword);
  useEffect(() => {
    fetch(
      `https://books.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=10&key=AIzaSyA3KVPJTMb5PDt8RDEMSVoAxrZLWWhn55w`
    )
      .then((res) => res.json())
      .then((json) => json.items)
      .then((booksAPI) =>
        booksAPI.map((item) => {
          const book = {
            id: item.id,
            thumbnail: item.volumeInfo.readingModes.image
              ? item.volumeInfo.imageLinks.thumbnail
              : "images/logo.png",
            title: item.volumeInfo.title,
            writer: item.volumeInfo.authors
              ? item.volumeInfo.authors[0]
              : "anomynous",
            publishedDate: item.volumeInfo.publishedDate,
            price:
              item.saleInfo.saleability === "NOT_FOR_SALE"
                ? "20000"
                : item.saleInfo.listPrice.amount,
            description: item.volumeInfo.description
              ? item.volumeInfo.description
              : "no description",
            isImage: item.volumeInfo.readingModes.image ? true : false,
          };
          return book;
        })
      )
      .then((books) => setBooks(books));
  }, [keyword]);
  return (
    <>
      <HeaderCartCount />
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
