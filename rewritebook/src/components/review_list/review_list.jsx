import React, { useState } from "react";
import ReviewItem from "../review_item/review_item";

const ReviewList = ({ book }) => {
  //fetch book.revies
  const [reviews, setReviews] = useState([
    {
      id: 1,
      bookid: 1,
      img: "images/logo.png",
      writer: "작성자1",
      content: "재밌어요!",
      stars: 5,
    },
    {
      id: 2,
      bookid: 1,
      img: "images/logo.png",
      writer: "작성자2",
      content: "추천합니다!",
      stars: 4,
    },
  ]);
  return (
    <>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </>
  );
};

export default ReviewList;
