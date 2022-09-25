import React from "react";
import styles from "./title.module.css";
const Title = ({ name }) => {
  return (
    <>
      <p className={styles.title}>{name}</p>
    </>
  );
};

export default Title;
