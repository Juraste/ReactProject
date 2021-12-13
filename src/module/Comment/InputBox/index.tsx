import React, { FC, useRef } from "react";
import { Dispatch } from "../../../store";
import { useDispatch } from "react-redux";
import styles from "./index.module.scss";

const InputBox = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const { updateState } = useDispatch<Dispatch>().comment;

  const submit = () => {
    updateState({
      userName: userRef.current?.value,
      commentText: commentRef.current?.value
    })
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles["input-box"]}>
        <div className={styles.names}>用户名： </div>
        <input ref={userRef} type="text"></input>
      </div>
      <div className={styles["input-box"]}>
        <div className={styles.names}>评论内容： </div>
        <textarea ref={commentRef}></textarea>
      </div>
      <button type="button" onClick={submit}>
        发布
      </button>
    </section>
  );
};

export default InputBox;
