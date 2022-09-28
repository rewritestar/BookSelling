import React from "react";
import BookItem from "../book_item/book_item";
import styles from "./like_item.module.css";
const LikeItem = ({ book, key, handleDelete, pink }) => {
  const bgColor = pink ? styles.pink : styles.blue;
  const onClick = (e) => {
    handleDelete(book);
  };
  return (
    <div className={`${styles.container} ${bgColor}`}>
      <BookItem key={key} book={book} />
      <button className={styles.delete_btn} onClick={onClick}>
        Delete
      </button>
    </div>
  );
};

export default LikeItem;
