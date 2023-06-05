import { useContext, useState, useEffect } from 'react';
import styles from './Search.module.css';
import Input from '../Input';
import Selected from '../Selected';
import InputYears from '../InputYears';
import CardsContext from '../../contexts/CardsContext';
import axios from 'axios';

const Search = () => {
  const { locations, authors, setCards } = useContext(CardsContext);

  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleChangeAuthor = (selectedOption) => {
    setSelectedAuthor(selectedOption.value);
    console.log(`Option selected:`, selectedOption);
  };

  const handleChangeLocation = (selectedOption) => {
    setSelectedLocation(selectedOption.value);
    console.log(`Option selected:`, selectedOption);
  };

  useEffect(() => {
    const getPaintingsAuthor = async () => {
      await axios
        .get(
          `https://test-front.framework.team/paintings?_limit=12&_page=1&authorId=${selectedAuthor}`
        )
        .then((res) => {
          // console.log(res.data);
          setCards(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getPaintingsAuthor();
  }, [selectedAuthor, setCards]);

  useEffect(() => {
    const getPaintingsLocation = async () => {
      await axios
        .get(
          `https://test-front.framework.team/paintings?_limit=12&_page=1&locationId=${selectedLocation}`
        )
        .then((res) => {
          // console.log(res.data);
          setCards(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getPaintingsLocation();
  }, [selectedLocation, setCards]);

  return (
    <div className={styles.search}>
      <Input type='text' placeholder='Name' />
      <Selected
        options={authors}
        placeholder='Author'
        onChange={handleChangeAuthor}
      />
      <Selected
        options={locations}
        placeholder='Location'
        onChange={handleChangeLocation}
      />
      <InputYears />
    </div>
  );
};

export default Search;
