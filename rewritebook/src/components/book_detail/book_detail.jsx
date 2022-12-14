import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ReviewList from "../review_list/review_list";
import styles from "./book_detail.module.css";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import SmallTitle from "../small_title/small_title";

const BookDetail = ({
  HeaderCartCount,
  onAllCount,
  likeService,
  cartService,
}) => {
  const location = useLocation();
  const book = location.state; //책 정보 받아오기

  const [price, setPrice] = useState(book.price); //책의 고유 가격
  const count = useRef(1); //책 권수 선택

  const handleLike = (e) => {
    if (likeService.add(book)) alert("좋아요 목록에 성공적으로 담겼습니다!");
    else alert("이미 좋아요 목록에 존재합니다.");
  };
  const handleCart = (e) => {
    const cartBook = book;
    cartBook.count = count.current;
    const cart = cartService.add(cartBook);
    if (cart) {
      onAllCount(cart);
      alert("장바구니에 성공적으로 담겼습니다!");
    } else alert("이미 장바구니에 존재합니다.");
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
          <div className={styles.bg_gradient}></div>
          <div className={styles.padding_container}>
            <div className={styles.img_container}>
              <img
                className={styles.thumbnail}
                src={book.thumbnail}
                alt="thumbnail"
              />
            </div>
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
                <div className={styles.price_controller}>
                  <button className={styles.count_btn} onClick={handlePriceUp}>
                    <IoMdArrowDropup />
                  </button>
                  <p className={styles.count}>{count.current}</p>
                  <button
                    className={styles.count_btn}
                    onClick={handlePriceDown}
                  >
                    <IoMdArrowDropdown />
                  </button>
                </div>
                <p className={styles.price_change}>{price} 원</p>
              </div>
              <div className={styles.buttons}>
                <button className={styles.like_btn} onClick={handleLike}>
                  Like
                </button>
                <button className={styles.cart_btn} onClick={handleCart}>
                  Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <SmallTitle name="about book..." />
          <div className={styles.text}>{book.description}</div>
        </div>
      </section>
      <section className={styles.review_container}>
        <div className={styles.var}>
          <SmallTitle name="Reviews" />
          <div className={styles.star_btns}>
            <button className={styles.star_btn}>별점 높은순</button>
            <button className={styles.star_btn}>별점 낮은순</button>
          </div>
        </div>
        <ReviewList />
      </section>
    </>
  );
};

export default BookDetail;
