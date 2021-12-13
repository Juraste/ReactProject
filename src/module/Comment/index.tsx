import React from "react";
import InputBox from "./InputBox/index";
import styles from "./index.module.scss";

const CommentApp = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles["contain-box"]}>
        <InputBox />
        {/* <Comments /> */}
      </div>
    </section>
  );
};

export default CommentApp;
