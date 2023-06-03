import { useContext } from 'react';
import styles from './Search.module.css';
import Input from '../Input';
import Selected from '../Selected';
import InputYears from '../InputYears';
import CardsContext from '../../contexts/CardsContext';

const Search = () => {
  const { locations, authors } = useContext(CardsContext);

  return (
    <div className={styles.search}>
      <Input type='text' placeholder='Name' />
      <Selected options={authors} placeholder='Author' />
      <Selected options={locations} placeholder='Location' />
      <InputYears />
    </div>
  );
};

export default Search;
