import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ReviewList from "../review_list/review_list";
import styles from "./book_detail.module.css";
const BookDetail = ({ HeaderCartCount, onAllCount }) => {
  const location = useLocation();
  const book = location.state;
  const [price, setPrice] = useState(book.price);
  const count = useRef(1);
  const handleLike = (e) => {
    if (!localStorage.getItem("like")) {
      const likeArr = [book];
      localStorage.setItem("like", JSON.stringify(likeArr));
    } else {
      const like = JSON.parse(localStorage.getItem("like"));
      const found = like.find((item) => item.id === book.id);
      if (found) {
        alert("이미 좋아요 목록에 존재합니다.");
        return;
      }
      like.push(book);
      localStorage.setItem("like", JSON.stringify(like));
      alert("좋아요 목록에 성공적으로 담겼습니다!");
    }
  };
  const handleCart = (e) => {
    const cartBook = book;
    cartBook.count = count.current;
    let cart;
    if (!localStorage.getItem("cart")) {
      cart = [cartBook];
    } else {
      cart = JSON.parse(localStorage.getItem("cart"));
      const found = cart.find((item) => item.id === cartBook.id);
      if (found) {
        alert("이미 장바구니에 존재합니다.");
        return;
      }
      cart.push(cartBook);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    onAllCount(cart);
    alert("장바구니에 성공적으로 담겼습니다!");
  };

  const handlePriceUp = (e) => {
    count.current++;
    const newPrice = book.price * count.current;
    setPrice(newPrice);
  };
  const handlePriceDown = (e) => {
    if (count.current <= 1) return;
    count.current--;
    const newPrice = book.price * count.current;
    setPrice(newPrice);
  };
  return (
    <>
      <HeaderCartCount />
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
                <button className={styles.count_up} onClick={handlePriceUp}>
                  ^
                </button>
                <p>{count.current}</p>
                <button className={styles.count_up} onClick={handlePriceDown}>
                  v
                </button>
                <p className={styles.price_change}>{price} 원</p>
              </div>
              <div className={styles.buttons}>
                <button className={styles.like} onClick={handleLike}>
                  Like
                </button>
                <button className={styles.cart} onClick={handleCart}>
                  Cart
                </button>
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
        <ReviewList />
      </section>
    </>
  );
};

export default BookDetail;
