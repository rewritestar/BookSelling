import React from "react";

const ReviewItem = ({ review }) => {
  return (
    <>
      <img src={review.img} />
      <p>{review.writer}</p>
      <p>{review.stars}</p>
      <p>{review.content}</p>
    </>
  );
};

export default ReviewItem;
