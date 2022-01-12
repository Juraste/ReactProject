import React from 'react';
import styles from './index.module.scss';

const Test = () => {
  return (
    <>
      <div className={styles.class1} onClick={() => console.log('最外层的')}>
        <div
          className={styles.class2}
          onClick={e => {
            e.stopPropagation();
            console.log('中间');
          }}
        >
          <div
            className={styles.class3}
            onClick={() => {
              // e.stopPropagation();
              console.log('最里层');
            }}
          >
            div1
          </div>
        </div>
      </div>
      <div className={styles.class4}>div2</div>
      <div className={styles.class5}>div3</div>
    </>
  );
};

export default Test;
