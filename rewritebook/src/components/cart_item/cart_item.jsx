import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

import styles from "./cart_item.module.css";
const CartItem = ({ book, handleAllCount, handleDelete }) => {
  const [count, setCount] = useState(book.count);
  const navigate = useNavigate();
  const goToDetail = (e) => {
    navigate("/bookdetail", { state: book });
  };
  const handlePriceUp = (e) => {
    const newCount = count + 1;
    setCount(newCount);
    const origin = JSON.parse(localStorage.getItem("cart"));
    origin.forEach((item) => {
      if (item.id == book.id) item.count = newCount;
    });
    console.log(origin);
    localStorage.setItem("cart", JSON.stringify(origin));
    handleAllCount(origin);
  };
  const handlePriceDown = (e) => {
    if (count <= 1) return;
    const newCount = count - 1;
    setCount(newCount);
    const origin = JSON.parse(localStorage.getItem("cart"));
    origin.forEach((item) => {
      if (item.id == book.id) item.count = newCount;
    });
    localStorage.setItem("cart", JSON.stringify(origin));
    handleAllCount(origin);
  };
  const onClick = (e) => {
    handleDelete(book);
  };
  return (
    <div className={styles.container}>
      <div className={styles.click_scope} onClick={goToDetail}>
        <img className={styles.img} src={book.thumbnail} />
        <div className={styles.info}>
          <p className={styles.title}>{book.title}</p>
          <p className={styles.writer}>{book.writer}</p>
          <p className={styles.publishedDate}>{book.publishedDate}</p>
        </div>
      </div>
      <div className={styles.controller}>
        <div className={styles.priceAndButton}>
          <div className={styles.count_buttons}>
            <button className={styles.button} onClick={handlePriceUp}>
              <IoMdArrowDropup />
            </button>
            <p className={styles.count}>{count}</p>
            <button className={styles.button} onClick={handlePriceDown}>
              <IoMdArrowDropdown />
            </button>
          </div>
          <p className={styles.price}>{book.price}</p>
        </div>
        <button className={styles.delete_btn} onClick={onClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
