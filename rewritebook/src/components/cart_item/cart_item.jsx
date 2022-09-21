import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      <div className={styles.clickScope} onClick={goToDetail}>
        <img src={book.thumbnail} />
        <div className={styles.info}>
          <p>{book.title}</p>
          <p>{book.writer}</p>
          <p>{book.publishedDate}</p>
        </div>
      </div>
      <div className={styles.controller}>
        <div className={styles.price}>
          <p>{book.price}</p>
          <button className={styles.count_up} onClick={handlePriceUp}>
            ^
          </button>
          <p>{count}</p>
          <button className={styles.count_up} onClick={handlePriceDown}>
            v
          </button>
        </div>
        <button onClick={onClick}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
