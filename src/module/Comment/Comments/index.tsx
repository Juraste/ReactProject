import React from "react";
import styles from "./index.module.scss";

interface CommentProps {
  userName: string | undefined;
  commentText: string | undefined;
}
const Comments = (props: CommentProps) => {
  const { userName, commentText } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.names}>
        <span>{userName}</span> : </div>
      <div className={styles.comment}>{commentText}</div>
    </div>
  );
};

export default Comments;
