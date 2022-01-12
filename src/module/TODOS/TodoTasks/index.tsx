import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import styles from './index.module.scss';

const TodoTasks = () => {
  const tasks = useSelector(
    (selector: RootState) => selector.todo.tasks,
    shallowEqual
  );
  console.log(tasks);
  return (
    <ul className={styles['todo-list']}>
      {tasks.map((item, index) => {
        console.log(item);
        return (
          <li key={index} className={styles['task-view']}>
            <div>
              <input className={styles.check} type="checkbox" />
              <span>{item.content}</span>
              <button className={styles.destory}>X</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoTasks;
