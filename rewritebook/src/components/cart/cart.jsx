import React, { useEffect, useState } from "react";
import CartItem from "../cart_item/cart_item";
import Footer from "../footer/footer";
import Header from "../header/header";

const Cart = ({ HeaderCartCount, onAllCount, allCount }) => {
  const [books, setBooks] = useState([]);
  const [allPrice, setAllPrice] = useState();

  const handleAllCount = (newBooks) => {
    onAllCount(newBooks);
  };
  const handleAllPrice = (newBooks) => {
    let prices = 0;
    newBooks.forEach((item) => (prices += item.count * item.price));
    setAllPrice(prices);
  };
  const handleDelete = (book) => {
    const newBooks = books.filter((item) => item.id !== book.id);
    localStorage.setItem("cart", JSON.stringify(newBooks));
    setBooks(newBooks);
  };
  useEffect(() => {
    const newBooks = JSON.parse(localStorage.getItem("cart"));
    setBooks(newBooks);
    handleAllCount(newBooks);
    handleAllPrice(newBooks);
  }, [localStorage.getItem("cart")]);
  return (
    <>
      <HeaderCartCount />
      <p className="cart_title"></p>
      <section className="cart_container">
        <div className="carts">
          {books.map((book) => (
            <CartItem
              key={book.id}
              book={book}
              handleAllCount={handleAllCount}
              handleDelete={handleDelete}
            />
          ))}
          <p className="order_counts">총 {allCount} 개</p>
          <p className="order_prices">총 {allPrice} 원</p>
          <button className="order"></button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
