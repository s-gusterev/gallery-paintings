import { useEffect, useState } from 'react';
import styles from './Search.module.css';
import Input from '../Input';
import Selected from '../Selected';
import InputYears from '../InputYears';
import axios from 'axios';

const Search = () => {
  const [authors, setAuthors] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getAuthors = async () => {
      const arr = [];
      await axios
        .get('https://test-front.framework.team/authors')
        .then((res) => {
          let result = res.data;
          result.map((author) => {
            return arr.push({ value: author.id, label: author.name });
          });
          setAuthors(arr);
        });
    };

    const getLocation = async () => {
      const arr = [];
      await axios
        .get('https://test-front.framework.team/locations')
        .then((res) => {
          console.log(res.data);
          let result = res.data;
          result.map((location) => {
            return arr.push({ value: location.id, label: location.location });
          });
          setLocations(arr);
        });
    };
    getAuthors();
    getLocation();
  }, []);

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
