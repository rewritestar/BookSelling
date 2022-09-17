import React from "react";
import CartItem from "../cart_item/cart_item";
import Footer from "../footer/footer";
import Header from "../header/header";

const Cart = (props) => {
  return (
    <>
      <Header />
      <p className="cart_title"></p>
      <section className="cart_container">
        <div className="carts">
          <CartItem />
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
