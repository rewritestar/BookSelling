import React from "react";
import styles from "./dynamic_star.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const DynamicStar = (props) => {
  return (
    <form
      className={styles.drawStarsForm}
      id="starForm"
      method="post"
      action="./save"
    >
      <fieldset>
        <input type="radio" id="rate1" value="5" name="rating" />
        <label htmlFor="rate1">
          <AiFillStar className={styles.fill} />
          <AiOutlineStar className={styles.line} />
        </label>
        <input type="radio" id="rate2" value="4" name="rating" />
        <label htmlFor="rate2">
          <AiFillStar className={styles.fill} />
          <AiOutlineStar className={styles.line} />
        </label>
        <input type="radio" id="rate3" value="3" name="rating" />
        <label htmlFor="rate3">
          <AiFillStar className={styles.fill} />
          <AiOutlineStar className={styles.line} />
        </label>
        <input type="radio" id="rate4" value="2" name="rating" />
        <label htmlFor="rate4">
          <AiFillStar className={styles.fill} />
          <AiOutlineStar className={styles.line} />
        </label>
        <input type="radio" id="rate5" value="1" name="rating" />
        <label htmlFor="rate5">
          <AiFillStar className={styles.fill} />
          <AiOutlineStar className={styles.line} />
        </label>
      </fieldset>
    </form>
  );
};

export default DynamicStar;
