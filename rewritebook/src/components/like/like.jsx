import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import LikeItem from "../like_item/like_item";
import Title from "../title/title";
import styles from "./like.module.css";
const Like = ({ HeaderCartCount }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const newBooks = JSON.parse(localStorage.getItem("like"));
    setBooks(newBooks);
  }, [localStorage.getItem("like")]);

  const handleDelete = (book) => {
    const origin = JSON.parse(localStorage.getItem("like"));
    const newBooks = origin.filter((item) => item.id !== book.id);
    setBooks(newBooks);
    localStorage.setItem("like", JSON.stringify(newBooks));
  };
  return (
    <>
      <HeaderCartCount />
      <div className={styles.title}>
        <Title name="Like" />
      </div>
      <section className={styles.like_container}>
        {books.map((book, i) => {
          let pink = 0;
          if (i % 2) pink = 1;
          return (
            <LikeItem
              key={book.id}
              book={book}
              handleDelete={handleDelete}
              pink={pink}
            />
          );
        })}
      </section>
      <Footer />
    </>
  );
};

export default Like;
