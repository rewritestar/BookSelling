import React from "react";
import styles from "./footer.module.css";
const Footer = (props) => {
  return (
    <div className={styles.container}>
      <span className="developer_info">개발자: 조인미</span>
      <div className={styles.developer_link}>
        <p className="git">깃 아이콘</p>
        <p className="email">이메일 링크</p>
      </div>
      <p className="rewrite Book">rewrite Book</p>
    </div>
  );
};

export default Footer;
