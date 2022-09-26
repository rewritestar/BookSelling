import React from "react";
import DynamicStar from "../dynamic_star/dynamic_star";
import SmallTitle from "../small_title/small_title";
import Title from "../title/title";
import styles from "./feedback.module.css";
const Feedback = (props) => {
  return (
    <div className={styles.container}>
      <Title name="Feedback" />
      <div className={styles.smalltitle}>
        <SmallTitle name="what do you think of our web" />
      </div>
      <section className={styles.survey}>
        <div className={styles.star_container}>
          <p className={styles.script}>해당 쇼핑몰을 이용해보니 어떠셨나요?</p>
          <div className={styles.stars}>
            <DynamicStar />
          </div>
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
