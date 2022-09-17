import React from "react";
import Header from "../header/header";
import LikeItem from "../like_item/like_item";

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
