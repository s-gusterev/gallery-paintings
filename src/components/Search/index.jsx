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
  const [yearGte, setYearGte] = useState('0');
  const [yearLte, setYearLte] = useState('2023');

  const handleChangeAuthor = (selectedOption) => {
    setSelectedAuthor(selectedOption.value);
  };

  const handleChangeLocation = (selectedOption) => {
    setSelectedLocation(selectedOption.value);
  };

  useEffect(() => {
    const getPaintingsAuthor = async () => {
      await axios
        .get(
          `https://test-front.framework.team/paintings?_limit=12&_page=1&authorId=${selectedAuthor}`
        )
        .then((res) => {
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
          setCards(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getPaintingsLocation();
  }, [selectedLocation, setCards]);

  const handleChangeInputGte = async (event) => {
    setYearGte(event.target.value);
    await axios
      .get(
        `https://test-front.framework.team/paintings?_limit=12&_page=1&created_gte=${yearGte}&created_lte=${yearLte}`
      )
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeInputLte = async (event) => {
    setYearLte(event.target.value);
    await axios
      .get(
        `https://test-front.framework.team/paintings?_limit=12&_page=1&created_gte=${yearGte}&created_lte=${yearLte}`
      )
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <InputYears
        defaultValueGte={yearGte}
        defaultValueLte={yearLte}
        onChangeGte={handleChangeInputGte}
        onChangeLte={handleChangeInputLte}
      />
    </div>
  );
};

export default Search;
