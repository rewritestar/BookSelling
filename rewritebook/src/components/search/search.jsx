import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookItem from "../book_item/book_item";
import Footer from "../footer/footer";
import SearchItem from "../search_item/search_item";
import Title from "../title/title";
import styles from "./search.module.css";

const Search = ({ bookApi, HeaderCartCount }) => {
  const location = useLocation();
  const [books, setBooks] = useState([]);
  const keyword = location.state;
  useEffect(() => {
    bookApi
      .search(keyword) //
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
