import React from "react";
import SmallTitle from "../small_title/small_title";
import Title from "../title/title";
const Feedback = (props) => {
  return (
    <>
      <Title name="Feedback" />
      <SmallTitle name="what do you think of our web" />
      <section className="survey">
        <div className="star_container">
          <p className="script"></p>
          <p className="stars"></p>
        </div>
        <div className="input_container">
          <p className="script"></p>
          <textarea name="textarea" id="" cols="30" rows="10"></textarea>
        </div>
        <button className="submit"></button>
      </section>
    </>
  );
};

export default Feedback;
