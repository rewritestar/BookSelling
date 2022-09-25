import React, { useEffect, useState } from "react";
import Feedback from "../feedback/feedback";
import Footer from "../footer/footer";
import ReviewThumbnail from "../review_thumbnail/review_thumbnail";
import SmallTitle from "../small_title/small_title";
import Title from "../title/title";
import styles from "./home.module.css";
import reviewjson from "../../data/review.json";
import MainItem from "../main_item/main_item";
const Home = ({ bookApi, HeaderCartCount }) => {
  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const reviewArr = reviewjson.items;
    setReviews(reviewArr);
    const RANDOMQUERY = [
      "python",
      "영어",
      "우주",
      "대학",
      "맛집",
      "여행",
      "컴퓨터",
      "음악",
      "역사",
    ];
    let IDX = Math.floor(Math.random() * RANDOMQUERY.length);

    bookApi
      .random(RANDOMQUERY, IDX) //
      .then((books) => setBooks(books));
  }, []);
  return (
    <div className={styles.containter}>
      <HeaderCartCount />
      <section className={styles.main}>
        <div className={styles.titles}>
          <SmallTitle name="new!" />
          <Title name="Books" />
        </div>
        <div className={styles.book_list}>
          {books.map((book) => (
            <MainItem key={book.id} book={book} />
          ))}
        </div>
      </section>
      <section className={styles.reviewAndFeedback}>
        <div className="reviews">
          <ReviewThumbnail reviews={reviews} />
        </div>
        <div className="feedback">
          <Feedback />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
