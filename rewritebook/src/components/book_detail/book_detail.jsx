import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import ReviewItem from "../review_item/review_item";
import styles from "./book_detail.module.css";
const BookDetail = (props) => {
  const location = useLocation();
  const propsBook = location.state;
  const [book, setBook] = useState({
    thumbnail: propsBook.volumeInfo.readingModes.image
      ? propsBook.volumeInfo.imageLinks.thumbnail
      : "images/logo.png",
    title: propsBook.volumeInfo.title,
    writer: propsBook.volumeInfo.authors[0],
    publishedDate: propsBook.volumeInfo.publishedDate,
    price:
      propsBook.saleInfo.saleability === "NOT_FOR_SALE"
        ? "20000"
        : propsBook.saleInfo.listPrice.amount,
    description: propsBook.volumeInfo.description
      ? propsBook.volumeInfo.description
      : "no description",
  });
  const [price, setPrice] = useState(book.price);
  console.log(book);
  return (
    <>
      <Header />
      <section className={styles.book_container}>
        <div className={styles.about_book}>
          <div className={styles.padding_container}>
            <img
              className={styles.thumbnail}
              src={book.thumbnail}
              alt="image"
            />
            <div className={styles.controller}>
              <div className={styles.info_major}>
                <p className={styles.title}>{book.title}</p>
                <p className={styles.writer}>저자: {book.writer}</p>
                <p className={styles.published_date}>
                  발행일: {book.publishedDate}
                </p>
                <p className={styles.price}>{book.price} 원</p>
              </div>
              <div className={styles.price_selection}>
                <button className={styles.count_up}>^</button>
                <button className={styles.count_up}>v</button>
                <p className={styles.price_change}>{price} 원</p>
              </div>
              <div className={styles.buttons}>
                <button className={styles.like}>Like</button>
                <button className={styles.cart}>Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.description}>{book.description}</div>
      </section>
      <section className={styles.review_container}>
        <div className={styles.var}>
          <p className={styles.review_title}></p>
          <button className={styles.star_high}></button>
          <button className={styles.star_low}></button>
        </div>
        <div className={styles.reviews}>
          <ReviewItem />
        </div>
      </section>
    </>
  );
};

export default BookDetail;
