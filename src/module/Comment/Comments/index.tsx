import React from "react";
import styles from "./index.module.scss";

interface CommentProps {
  userName: string;
  commentText: string;
}

const Comments = (props: CommentProps) => {
  const { userName, commentText } = props;
  return (
    <div>
      <div>{userName}</div>
      <div>`: ${commentText}`</div>
    </div>
  );
};

export default Comments;
