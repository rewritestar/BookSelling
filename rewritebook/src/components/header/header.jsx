import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { BsBookmarkHeart, BsCart4 } from "react-icons/bs";

const Header = ({ allCount }) => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const goToLike = (e) => {
    navigate("/like");
  };
  const goToCart = (e) => {
    navigate("/cart");
  };
  const goToHome = (e) => {
    window.location.href = "/";
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    navigate("/search", { state: inputRef.current.value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          className={styles.logo}
          src="images/logo_title.png"
          alt="logo"
          onClick={goToHome}
        />
        <form onSubmit={handleSearch}>
          <input
            ref={inputRef}
            type="text"
            className={styles.search}
            placeholder="Search"
          ></input>
        </form>
        <div className={styles.buttons}>
          <button
            className={`${styles.button} ${styles.like}`}
            onClick={goToLike}
          >
            <BsBookmarkHeart />
          </button>

          <button
            className={`${styles.button} ${styles.cart}`}
            onClick={goToCart}
          >
            <BsCart4 />
          </button>
          <span className={styles.cart_count}>{allCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
