import React from "react";
import SearchItem from "../search_item/search_item";
import Title from "../title/title";

const Search = (props) => {
  return (
    <>
      <Header />
      <Title name="search" />
      <section className="like_container">
        <SearchItem />
      </section>
      <Footer />
    </>
  );
};

export default Search;
