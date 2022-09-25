import React from "react";
import styles from "./footer.module.css";
import { AiFillGithub } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
const Footer = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className="developer_info">개발자: 조인미</span>
        <div className={styles.developer_link}>
          <button
            className={styles.button}
            onClick={() =>
              window.open("https://github.com/rewritestar", "_blank")
            }
          >
            <AiFillGithub />
          </button>
          <button
            className={styles.button}
            onClick={() =>
              window.open("mailto:rewritestar@naver.com", "_blank")
            }
          >
            <MdAlternateEmail />
          </button>
        </div>
        <p className="rewrite Book">rewrite Book</p>
      </div>
    </div>
  );
};

export default Footer;
