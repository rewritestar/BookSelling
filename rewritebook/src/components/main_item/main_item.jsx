import React from "react";
import BookItem from "../book_item/book_item";
import styles from "./main_item.module.css";

const MainItem = ({ book }) => {
  return (
    <div className={styles.book}>
      <BookItem key={book.id} book={book} />
    </div>
  );
};

export default MainItem;
