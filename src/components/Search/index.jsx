import { useContext, useState, useEffect, useCallback } from 'react';
import styles from './Search.module.css';
import Input from '../Input';
import Selected from '../Selected';
import InputYears from '../InputYears';
import CardsContext from '../../contexts/CardsContext';
import PropTypes from 'prop-types';

const Search = ({
  onFilterAuthor,
  onFilterLocation,
  onFilterName,
  onFilterYear,
}) => {
  const { locations, authors } = useContext(CardsContext);

  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [yearGte, setYearGte] = useState('0');
  const [yearLte, setYearLte] = useState('2023');
  const [name, setName] = useState('');

  const handleChangeAuthor = (selectedOption) => {
    setSelectedAuthor(selectedOption?.value);
  };

  const handleFiltereAuthor = useCallback(() => {
    let filters = { authorId: selectedAuthor };
    if (selectedAuthor === undefined) {
      filters = {};
    }
    onFilterAuthor(filters);
  }, [selectedAuthor, onFilterAuthor]);

  const handleFiltereLocation = useCallback(() => {
    let filters = { locationId: selectedLocation };
    if (selectedLocation === undefined) {
      filters = {};
    }
    onFilterLocation(filters);
  }, [selectedLocation, onFilterLocation]);

  const handleFiltereName = useCallback(() => {
    const filters = { q: name };
    onFilterName(filters);
  }, [name, onFilterName]);

  const handleFiltereYear = useCallback(() => {
    const filters = { created_gte: yearGte, created_lte: yearLte };
    onFilterYear(filters);
  }, [onFilterYear, yearGte, yearLte]);

  useEffect(() => {
    handleFiltereAuthor();
  }, [handleFiltereAuthor]);

  useEffect(() => {
    handleFiltereLocation();
  }, [handleFiltereLocation]);

  useEffect(() => {
    handleFiltereName();
  }, [handleFiltereName]);

  useEffect(() => {
    handleFiltereYear();
  }, [handleFiltereYear]);

  const handleChangeLocation = (selectedOption) => {
    setSelectedLocation(selectedOption?.value);
  };

  const handleChangeInputGte = (event) => {
    setYearGte(event.target.value);
  };

  const handleChangeInputLte = (event) => {
    setYearLte(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={styles.search}>
      <Input
        type='text'
        placeholder='Name'
        onChange={(e) => handleChangeName(e)}
      />

      <Selected
        options={authors}
        placeholder='Author'
        onChange={(e) => handleChangeAuthor(e)}
        defaultValue={''}
      />
      <Selected
        options={locations}
        placeholder='Location'
        onChange={(e) => handleChangeLocation(e)}
        defaultValue={''}
      />
      <InputYears
        defaultValueGte={yearGte}
        defaultValueLte={yearLte}
        onChangeGte={(e) => handleChangeInputGte(e)}
        onChangeLte={(e) => handleChangeInputLte(e)}
      />
    </div>
  );
};

Search.propTypes = {
  onFilterAuthor: PropTypes.func.isRequired,
  onFilterLocation: PropTypes.func.isRequired,
  onFilterName: PropTypes.func.isRequired,
  onFilterYear: PropTypes.func.isRequired,
};

export default Search;
