import React from 'react';
import TodoInput from './TodoInput';
import TodoTasks from './TodoTasks';
import styles from './index.module.scss';

const Todos = () => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.title}>todos</header>
      <div className={styles.main}>
        <TodoInput />
        <TodoTasks />
      </div>
    </section>
  );
};

export default Todos;

// class Todos extends React.Component<ITodosProps, ITodosState> {
//   public state: ITodosState;

//   constructor(props: ITodosProps) {
//     super(props);
//     this.state = {
//       now_showing: ALL_TODOS
//     };
//   }

//   public render() {
//     return (
//       <section>
//         <header></header>
//       </section>
//     );
//   }
// }

// export { Todos };
