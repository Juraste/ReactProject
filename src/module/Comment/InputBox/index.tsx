import React, { useRef } from 'react';
import { Dispatch, RootState } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
import { comment } from '../../../model/comment';

const InputBox = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const { comments, commentId } = useSelector(
    (selector: RootState) => selector.comment
  );
  const { updateState } = useDispatch<Dispatch>().comment;

  const submit = () => {
    const temp: comment = {
      userName: userRef.current?.value,
      commentText: commentRef.current?.value,
      createdTime: Date.now(),
      durationTime: 0
    };
    comments.push(temp);
    updateState({
      comments: comments,
      commentId: commentId + 1
    });
    if (userRef.current && commentRef.current) {
      userRef.current.value = '';
      commentRef.current.value = '';
    }
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles['input-box']}>
        <div className={styles.names}>用户名： </div>
        <input ref={userRef} type="text"></input>
      </div>
      <div className={styles['input-box']}>
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
