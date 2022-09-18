import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { BsBookmarkHeart, BsCart4 } from "react-icons/bs";

const Header = (props) => {
  const navigate = useNavigate();
  const goToLike = (e) => {
    navigate("/like");
  };
  const goToCart = (e) => {
    navigate("/cart");
  };
  const goToHome = (e) => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src="images/logo_title.png"
        alt="logo"
        onClick={goToHome}
      />
      <input type="text" className={styles.search} placeholder="Search"></input>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${styles.like}`}
          onClick={goToLike}
        >
          <BsBookmarkHeart />
        </button>
        <button className={styles.button} onClick={goToCart}>
          <BsCart4 />
        </button>
        <span className={styles.cart_count}>5</span>
      </div>
    </div>
  );
};

export default Header;
