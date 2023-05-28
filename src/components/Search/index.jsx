import styles from './Search.module.css';
import Input from '../Input';
import Selected from '../Selected';

const Search = () => {
  return (
    <div className={styles.search}>
      <Input type='text' placeholder='Name' />
      <Selected name='author' id='author-selected' />
    </div>
  );
};

export default Search;
