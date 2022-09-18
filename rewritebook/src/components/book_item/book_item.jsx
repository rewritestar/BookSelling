import { logDOM } from "@testing-library/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./book_item.module.css";
const BookItem = ({ book }) => {
  const navigate = useNavigate();
  const isImage = book.volumeInfo.readingModes.image;
  const thumbnail = isImage
    ? book.volumeInfo.imageLinks.smallThumbnail
    : "images/logo.png";
  const goToDetail = (e) => {
    navigate("/bookdetail", { state: book });
  };
  return (
    <div className={styles.container} onClick={goToDetail}>
      <img className={styles.thumbnail} src={thumbnail} alt="book" />
      <p className={styles.title}>{book.volumeInfo.title}</p>
      <p className={styles.writer}>{book.volumeInfo.authors}</p>
    </div>
  );
};

export default BookItem;
