import React from "react";
import Header from "../header/header";
import ReviewItem from "../review_item/review_item";

const BookDetail = (props) => {
  return (
    <>
      <Header />
      <section className="book_container">
        <div className="about_book">
          <img />
          <div className="info_major">
            <p className="title"></p>
            <p className="writer"></p>
            <p className="published_date"></p>
            <p className="price"></p>
          </div>
          <div className="price_selection">
            <button className="book_count"></button>
            <p className="price_change"></p>
          </div>
          <div className="buttons">
            <button className="like"></button>
            <button className="cart"></button>
          </div>
        </div>
        <div className="book_description"></div>
      </section>
      <section className="review_container">
        <div className="var">
          <p className="review_title"></p>
          <button className="star_high"></button>
          <button className="star_low"></button>
        </div>
        <div className="reviews">
          <ReviewItem />
        </div>
      </section>
    </>
  );
};

export default BookDetail;
