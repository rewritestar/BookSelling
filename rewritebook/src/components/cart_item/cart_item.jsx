import React from "react";

const CartItem = ({ book }) => {
  return (
    <>
      <img src={book.thumbnail} />
      <p>{book.title}</p>
    </>
  );
};

export default CartItem;
