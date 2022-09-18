import React, { useEffect, useState } from "react";
import CartItem from "../cart_item/cart_item";
import Footer from "../footer/footer";
import Header from "../header/header";

const Cart = (props) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const newBooks = JSON.parse(localStorage.getItem("cart"));
    setBooks(newBooks);
  }, [localStorage.getItem("like")]);
  console.log(books);
  return (
    <>
      <Header />
      <p className="cart_title"></p>
      <section className="cart_container">
        <div className="carts">
          {books.map((book) => (
            <CartItem key={book.id} book={book} />
          ))}
          <p className="order_counts"></p>
          <p className="order_prices"></p>
          <button className="order"></button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
