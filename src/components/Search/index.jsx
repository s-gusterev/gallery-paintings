import styles from './Search.module.css';
import Input from '../Input';
import Selected from '../Selected';
import InputYears from '../InputYears';

const Search = () => {
  const author = [
    { value: 'blues1', label: 'All' },
    { value: 'blues', label: 'Salvador dali' },
    { value: 'rock', label: 'Vincent van gogh' },
    { value: 'jazz', label: 'Claude monet' },
    { value: 'orchestra', label: 'Victor vasnetsov' },
    { value: 'blues', label: 'Salvador dali' },
    { value: 'rock', label: 'Vincent van gogh' },
    { value: 'jazz', label: 'Claude monet' },
    { value: 'orchestra', label: 'Victor vasnetsov' },
  ];

  const location = [
    { value: 'blues1', label: 'All' },
    { value: 'blues', label: 'Salvador dali' },
    { value: 'rock', label: 'Vincent van gogh' },
    { value: 'jazz', label: 'Claude monet' },
    { value: 'orchestra', label: 'Victor vasnetsov' },
    { value: 'blues', label: 'Salvador dali' },
    { value: 'rock', label: 'Vincent van gogh' },
    { value: 'jazz', label: 'Claude monet' },
    { value: 'orchestra', label: 'Victor vasnetsov' },
  ];

  return (
    <div className={styles.search}>
      <Input type='text' placeholder='Name' />
      <Selected options={author} placeholder='Author' />
      <Selected options={location} placeholder='Location' />
      <InputYears />
    </div>
  );
};

export default Search;
