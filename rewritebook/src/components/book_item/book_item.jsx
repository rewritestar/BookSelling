import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./book_item.module.css";
const BookItem = ({ book }) => {
  const navigate = useNavigate();
  const thumbnail = book.isImage ? book.thumbnail : "images/logo.png";
  const goToDetail = (e) => {
    navigate("/bookdetail", { state: book });
  };
  return (
    <div className={styles.container} onClick={goToDetail}>
      <img className={styles.thumbnail} src={thumbnail} alt="book" />
      <p className={styles.title}>{book.title}</p>
      <p className={styles.writer}>{book.writer}</p>
    </div>
  );
};

export default BookItem;
