import React from "react";
import SmallTitle from "../small_title/small_title";
import Title from "../title/title";
import styles from "./feedback.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Feedback = (props) => {
  const drawStars = (e) => {
    return (
      <div className={styles.drawStars}>
        {/* <AiFillStar /> */}
        <AiOutlineStar className={`${styles.star1}`} />
        <AiOutlineStar className={`${styles.star2}`} />
        <AiOutlineStar className={`${styles.star3}`} />
        <AiOutlineStar className={`${styles.star4}`} />
        <AiOutlineStar className={styles.star5} />
      </div>
    );
  };
  return (
    <>
      <Title name="Feedback" />
      <SmallTitle name="what do you think of our web" />
      <section className="survey">
        <div className="star_container">
          <p className="script">해당 쇼핑몰을 이용해보니 어떠셨나요?</p>
          <p className="stars">{drawStars()}</p>
        </div>
        <div className="input_container">
          <p className="script">
            하고 싶은 말을 적어주세요! 불편한 점이 있었나요?
          </p>
          <textarea name="textarea" id="" cols="30" rows="10"></textarea>
        </div>
        <button className="submit">제출하기</button>
      </section>
    </>
  );
};

export default Feedback;
