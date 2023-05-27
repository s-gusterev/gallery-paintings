import styles from './Search.module.css';
import Input from '../Input';

const Search = () => {
  return (
    <div className={styles.search}>
      <Input type='text' placeholder='Name' />
    </div>
  );
};

export default Search;
