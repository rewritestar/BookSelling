import React from "react";
import SmallTitle from "../small_title/small_title";
import Title from "../title/title";
const ReviewThumbnail = ({ reviews }) => {
  const MakeReview = (review) => {
    return (
      <div>
        <p>{review.content}</p>
      </div>
    );
  };
  return (
    <>
      <Title name="Reviews" />
      <SmallTitle name="real reader said to you!" />
      <section className="reviews">
        {reviews.map((review) => MakeReview(review))}
      </section>
    </>
  );
};

export default ReviewThumbnail;
