import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookItem from "../book_item/book_item";
import Footer from "../footer/footer";
import SearchItem from "../search_item/search_item";
import Title from "../title/title";
import styles from "./search.module.css";

const Search = ({ HeaderCartCount }) => {
  const location = useLocation();
  const [books, setBooks] = useState([]);
  const keyword = location.state;
  useEffect(() => {
    fetch(
      `https://books.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=16&key=AIzaSyA3KVPJTMb5PDt8RDEMSVoAxrZLWWhn55w`
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
      .then((books) => setBooks(books))
      .catch((e) => {
        alert("해당 데이터가 없습니다.");
        window.location.href = "/";
      });
  }, [keyword]);
  return (
    <div className={styles.container}>
      <HeaderCartCount />
      <div className={styles.title}>
        <Title name="search" />
      </div>
      <section className={styles.search_container}>
        {books.map((book, i) => {
          let pink = 0;
          if (i % 2) pink = 1;
          return <SearchItem key={book.id} book={book} pink={pink} />;
        })}
      </section>
      <Footer />
    </div>
  );
};

export default Search;
