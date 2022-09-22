import React, { useEffect, useState } from "react";
import ReviewItem from "../review_item/review_item";
import reviewjson from "../../data/review.json";
const ReviewList = ({ book }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const reviewArr = reviewjson.items;
    setReviews(reviewArr);
  }, []);
  return (
    <>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </>
  );
};

export default ReviewList;
