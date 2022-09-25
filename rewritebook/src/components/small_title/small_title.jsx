import React from "react";
import styles from "./small_title.module.css";
const SmallTitle = ({ name }) => {
  return (
    <>
      <p className={styles.smalltitle}>{name}</p>
    </>
  );
};

export default SmallTitle;
