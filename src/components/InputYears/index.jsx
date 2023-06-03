import styles from './InputYears.module.css';
import { useState } from 'react';
const InputYears = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={open ? `${styles.search} ${styles.searchOpen}` : styles.search}
    >
      <div className={styles.titleContainer} onClick={() => setOpen(!open)}>
        <span className={styles.title}>Created</span>
      </div>
      <div
        className={
          open
            ? `${styles.inputsContainer} ${styles.inputsContainerOpen}`
            : styles.inputsContainer
        }
      >
        <input
          className={styles.input}
          type='number'
          name='from'
          placeholder='from'
          min='1000'
          max='2023'
          maxLength='4'
        />
        <div className={styles.line}></div>
        <input
          className={styles.input}
          type='number'
          name='before'
          placeholder='before'
          min='1000'
          max='2023'
          maxLength='4'
        />
      </div>
      <svg
        width='10'
        height='6'
        viewBox='0 0 10 6'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z'
          fill='var(--color-font-input)'
        />
      </svg>
    </div>
  );
};

export default InputYears;
