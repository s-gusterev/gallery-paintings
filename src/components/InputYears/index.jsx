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
      <div className={styles.inputsContainer}>
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
    </div>
  );
};

export default InputYears;
