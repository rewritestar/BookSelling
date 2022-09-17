import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";
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
      <input type="text" className={styles.search}></input>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={goToLike}>
          like
        </button>
        <button className={styles.button} onClick={goToCart}>
          cart
        </button>
        <span className={styles.cart_count}>5</span>
      </div>
    </div>
  );
};

export default Header;
