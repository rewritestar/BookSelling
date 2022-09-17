import React from "react";

const BookItem = ({ book }) => {
  return (
    <>
      <img src="images/logo.png" alt="book" />
      <p className="title"></p>
      <p className="writer"></p>
    </>
  );
};

export default BookItem;
