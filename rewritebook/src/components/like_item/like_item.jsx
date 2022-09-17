import React from "react";
import BookItem from "../book_item/book_item";

const LikeItem = ({ like }) => {
  return (
    <>
      <BookItem />
      <button className="delete"></button>
    </>
  );
};

export default LikeItem;
