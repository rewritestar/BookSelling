import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
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
    <>
      <img src={review.img} />
      <p>{review.writer}</p>
      <p>{printStars(review.stars)}</p>
      <p>{review.content}</p>
    </>
  );
};

export default ReviewItem;
