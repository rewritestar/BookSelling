import React from "react";
import BookItem from "../book_item/book_item";

const LikeItem = ({ book, key, handleDelete }) => {
  const onClick = (e) => {
    handleDelete(book);
  };
  return (
    <>
      <BookItem key={key} book={book} />
      <button className="Delete" onClick={onClick}>
        Delete
      </button>
    </>
  );
};

export default LikeItem;
