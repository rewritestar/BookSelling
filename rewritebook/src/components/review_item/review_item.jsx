import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./review_item.module.css";
const ReviewItem = ({ review }) => {
  const printStars = (num) => {
    let stars;
    switch (num) {
      case "1":
        stars = (
          <>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </>
        );
        break;
      case "2":
        stars = (
          <>
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </>
        );
        break;
      case "3":
        stars = (
          <>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </>
        );
        break;
      case "4":
        stars = (
          <>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </>
        );
        break;
      case "5":
        stars = (
          <>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </>
        );
        break;
      default:
        stars = (
          <>
            <AiFillStar />
          </>
        );
    }
    return stars;
  };
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.img_container}>
          <div className={styles.img_bg}></div>
          <img className={styles.img} src={review.img} />
        </div>
        <div className={styles.writer_star}>
          <p className={styles.writer}>{review.writer}</p>
          <p className={styles.star}>{printStars(review.stars)}</p>
        </div>
      </div>
      <p className={styles.content}>{review.content}</p>
    </div>
  );
};

export default ReviewItem;
