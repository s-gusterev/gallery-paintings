import styles from './Main.module.css';
import Search from '../Search';

const Main = () => {
  return (
    <main className={styles.main}>
      <Search />
    </main>
  );
};

export default Main;
