import React, { useEffect, useState } from "react";
import CartItem from "../cart_item/cart_item";
import Footer from "../footer/footer";
import Title from "../title/title";
import styles from "./cart.module.css";

const Cart = ({ HeaderCartCount, cartService, onAllCount, allCount }) => {
  const [books, setBooks] = useState([]);
  const [allPrice, setAllPrice] = useState();
  const newBooks = cartService.getBooks();

  const handleAllPrice = (newBooks) => {
    let prices = 0;
    newBooks.forEach((item) => (prices += item.count * item.price));
    setAllPrice(prices);
  };
  const handleDelete = (book) => {
    const newBooks = books.filter((item) => item.id !== book.id);
    cartService.setBooks(newBooks);
    setBooks(newBooks);
  };
  const handleOrder = (e) => {
    const newBooks = [];
    cartService.setBooks(newBooks);
    cartService.setCartCount(0);
    alert("주문이 성공적으로 완료되었습니다!");
    window.location.href = "/cart";
  };
  useEffect(() => {
    setBooks(newBooks);
  }, []);
  useEffect(() => {
    handleAllPrice(newBooks);
    onAllCount(newBooks);
  }, [newBooks]);
  return (
    <div className={styles.container}>
      <HeaderCartCount />
      <div className={styles.title}>
        <Title name="Cart" />
      </div>
      <section className={styles.cart_container}>
        <div className={styles.carts}>
          {books.map((book) => (
            <CartItem
              key={book.id}
              book={book}
              cartService={cartService}
              onAllCount={onAllCount}
              handleDelete={handleDelete}
            />
          ))}
          <div className={styles.orderAndInfo}>
            <div className={styles.order_info}>
              <p className={styles.order_counts}>
                전체 주문 수량: {allCount} 개
              </p>
              <p className={styles.order_prices}>
                최종 결제 금액: {allPrice} 원
              </p>
            </div>
            <button className={styles.order_btn} onClick={handleOrder}>
              Order
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
