import React, { useEffect, useState } from "react";
import BookItem from "../book_item/book_item";
import Feedback from "../feedback/feedback";
import Footer from "../footer/footer";
import Header from "../header/header";
import ReviewThumbnail from "../review_thumbnail/review_thumbnail";
import SmallTitle from "../small_title/small_title";
import Title from "../title/title";
import styles from "./home.module.css";
const Home = ({ HeaderCartCount }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(
      "https://books.googleapis.com/books/v1/volumes?q=python&maxResults=10&key=AIzaSyA3KVPJTMb5PDt8RDEMSVoAxrZLWWhn55w"
    )
      .then((res) => res.json())
      .then((json) => json.items)
      .then((booksAPI) =>
        booksAPI.map((item) => {
          const book = {
            id: item.id,
            thumbnail: item.volumeInfo.readingModes.image
              ? item.volumeInfo.imageLinks.thumbnail
              : "images/logo.png",
            title: item.volumeInfo.title,
            writer: item.volumeInfo.authors[0],
            publishedDate: item.volumeInfo.publishedDate,
            price:
              item.saleInfo.saleability === "NOT_FOR_SALE"
                ? "20000"
                : item.saleInfo.listPrice.amount,
            description: item.volumeInfo.description
              ? item.volumeInfo.description
              : "no description",
            isImage: item.volumeInfo.readingModes.image ? true : false,
          };
          return book;
        })
      )
      .then((books) => setBooks(books));
  }, []);
  return (
    <div className={styles.containter}>
      <HeaderCartCount />
      <section className={styles.books}>
        <div className={styles.titles}>
          <SmallTitle name="new!" />
          <Title name="Books" />
        </div>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </section>
      <section className={styles.reviewAndFeedback}>
        <div className="reviews">
          <ReviewThumbnail />
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
