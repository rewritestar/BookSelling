import React, { useState } from "react";
import ReviewItem from "../review_item/review_item";

const ReviewList = ({ book }) => {
  //fetch book.revies
  const [reviews, setReviews] = useState([
    {
      id: 1,
      bookid: 1,
      img: "./images/logo.png",
      writer: "작성자1",
      content: "내용1",
      starts: 5,
    },
    ,
    {
      id: 2,
      bookid: 1,
      img: "./images/logo.png",
      writer: "작성자2",
      content: "내용2",
      starts: 3,
    },
    {
      id: 3,
      bookid: 1,
      img: "./images/logo.png",
      writer: "작성자3",
      content: "내용3",
      starts: 3,
    },
    {
      id: 4,
      bookid: 1,
      img: "./images/logo.png",
      writer: "작성자4",
      content: "내용4",
      starts: 4,
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
