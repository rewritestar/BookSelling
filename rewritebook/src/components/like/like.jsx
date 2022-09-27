import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import LikeItem from "../like_item/like_item";
import Title from "../title/title";
import styles from "./like.module.css";
const Like = ({ HeaderCartCount, likeService }) => {
  const [books, setBooks] = useState([]);
  const newBooks = likeService.getBooks();
  useEffect(() => {
    setBooks(newBooks);
  }, [newBooks]);

  const handleDelete = (book) => {
    const newBooks = likeService.remove(book);
    setBooks(newBooks);
  };
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default Like;
