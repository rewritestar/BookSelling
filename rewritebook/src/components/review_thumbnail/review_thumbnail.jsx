import React from "react";
import SmallTitle from "../small_title/small_title";
import Title from "../title/title";
import styles from "./review_thumbnail.module.css";
const ReviewThumbnail = ({ reviews }) => {
  const MakeReview = (review) => {
    return <div className={styles.review}>{review.content}</div>;
  };
  return (
    <div className={styles.container}>
      <Title name="Reviews" />
      <div className={styles.smalltitle}>
        <SmallTitle name="real reader said to you!" />
      </div>
      <section className={styles.reviews}>
        {reviews.map((review) => MakeReview(review))}
      </section>
    </div>
  );
};

export default ReviewThumbnail;
