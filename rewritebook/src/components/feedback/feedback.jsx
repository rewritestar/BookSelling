import React from "react";
import SmallTitle from "../small_title/small_title";
import Title from "../title/title";
import styles from "./feedback.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Feedback = (props) => {
  const drawStars = (e) => {
    return (
      <div className={styles.drawStars}>
        <AiOutlineStar className={`${styles.star1}`} />
        <AiOutlineStar className={`${styles.star2}`} />
        <AiOutlineStar className={`${styles.star3}`} />
        <AiOutlineStar className={`${styles.star4}`} />
        <AiOutlineStar className={styles.star5} />
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <Title name="Feedback" />
      <div className={styles.smalltitle}>
        <SmallTitle name="what do you think of our web" />
      </div>
      <section className={styles.survey}>
        <div className={styles.star_container}>
          <p className={styles.script}>해당 쇼핑몰을 이용해보니 어떠셨나요?</p>
          <p className={styles.stars}>{drawStars()}</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.script}>
            하고 싶은 말을 적어주세요! 불편한 점이 있었나요?
          </p>
          <textarea
            className={styles.textarea}
            name="textarea"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button className={styles.button}>Submit</button>
      </section>
    </div>
  );
};

export default Feedback;
