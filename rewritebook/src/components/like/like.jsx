import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import LikeItem from "../like_item/like_item";
import Title from "../title/title";

const Like = (props) => {
  return (
    <>
      <Header />
      <Title name="Like" />
      <section className="like_container">
        <LikeItem />
      </section>
      <Footer />
    </>
  );
};

export default Like;
