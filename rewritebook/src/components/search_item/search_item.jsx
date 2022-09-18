import React from "react";
import BookItem from "../book_item/book_item";

const SearchItem = ({ book }) => {
  return (
    <>
      <BookItem book={book} />
    </>
  );
};

export default SearchItem;
