import React from "react";
import BookItem from "../book_item/book_item";
import styles from "./search_item.module.css";
const SearchItem = ({ book, pink }) => {
  const bgColor = pink ? styles.pink : styles.blue;
  return (
    <div className={`${styles.container} ${bgColor}`}>
      <BookItem key={book.id} book={book} />
    </div>
  );
};

export default SearchItem;
