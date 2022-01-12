import React from 'react';
import styles from './index.module.scss';

interface CommentProps {
  userName: string | undefined;
  commentText: string | undefined;
  commentTime: number;
}
const Comments = (props: CommentProps) => {
  const { userName, commentText, commentTime } = props;
  console.log(Date.now());
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.names}>
          <span>{userName}</span> :{' '}
        </div>
        <div className={styles.comment}>{commentText}</div>
      </div>
      <div>
        <span className={styles.time}>{commentTime}</span>
      </div>
    </div>
  );
};

export default Comments;
