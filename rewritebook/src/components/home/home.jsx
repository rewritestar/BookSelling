import React from "react";
import BookItem from "../book_item/book_item";
import Feedback from "../feedback/feedback";
import Footer from "../footer/footer";
import Header from "../header/header";
import ReviewThumbnail from "../review_thumbnail/review_thumbnail";
import SmallTitle from "../small_title/small_title";
import Title from "../title/title";

const Home = (props) => {
  return (
    <>
      <Header />
      <section className="books">
        <SmallTitle name="new!" />
        <Title name="Books" />
        <BookItem />
      </section>
      <section className="reviewAndFeedback">
        <div className="reviews">
          <ReviewThumbnail />
        </div>
        <div className="feedback">
          <Feedback />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
