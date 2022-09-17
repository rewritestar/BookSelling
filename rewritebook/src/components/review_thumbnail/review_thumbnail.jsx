import React from "react";
import SmallTitle from "../small_title/small_title";
import Title from "../title/title";
const ReviewThumbnail = ({ review }) => {
  return (
    <>
      <Title name="Reviews" />
      <SmallTitle name="real reader said to you!" />
      <section className="reviews">
        <p className="review"></p>
      </section>
    </>
  );
};

export default ReviewThumbnail;
