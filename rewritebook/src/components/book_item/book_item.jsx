import React from "react";
import styles from "./book_item.module.css";
const BookItem = ({ book }) => {
  return (
    <div className={styles.container}>
      <img className={styles.thumbnail} src="images/logo.png" alt="book" />
      <p className="title">{book.volumeInfo.title}</p>
      <p className="writer">{book.volumeInfo.authors}</p>
    </div>
  );
};

export default BookItem;
