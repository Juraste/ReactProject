import React, { useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Task } from '../../../model/todo';
import { Dispatch, RootState } from '../../../store';
import styles from './index.module.scss';

const TodoInput = () => {
  const tasks = useSelector(
    (selector: RootState) => selector.todo.tasks,
    shallowEqual
  );
  const { updateState } = useDispatch<Dispatch>().todo;
  const inputRef = useRef<HTMLInputElement>(null);
  const createTodoTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode == 13) {
      if (inputRef.current) {
        const temp: Task = {
          content: inputRef.current.value,
          complete: false
        };
        let copy = Object.assign([], tasks);
        copy.push(temp);
        updateState({ tasks: copy });
      } else {
        alert('请输入内容！');
      }
    }
  };
  return (
    <section>
      <input
        ref={inputRef}
        className={styles['input-box']}
        placeholder="What needs to be done?"
        onKeyDown={e => createTodoTask(e)}
      ></input>
    </section>
  );
};

export default TodoInput;
