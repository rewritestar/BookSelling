import React, { useEffect, useState } from "react";
import ReviewItem from "../review_item/review_item";
import reviewjson from "../../data/review.json";
import styles from "./review_list.module.css";
const ReviewList = ({ book }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const reviewArr = reviewjson.items;
    setReviews(reviewArr);
  }, []);
  return (
    <div className={styles.container}>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
