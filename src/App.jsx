import styles from './App.module.css';
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import ThemeContext from './contexts/ThemeContext';
import CardsContext from './contexts/CardsContext';
import Header from './components/Header';
import Main from './components/Main';
import Pagination from './components/Pagination';
function App() {
  const [theme, setTheme] = useState('dark');

  const [cards, setCards] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filterParams, setFilterParams] = useState({});

  const fetchData = useCallback(
    async (page, filters) => {
      let url = `https://test-front.framework.team/paintings?_limit=12&_page=${page}`;
      if (Object.keys(filterParams).length !== 0) {
        const params = new URLSearchParams(filters);
        url += `&${params}`;
      }
      await axios
        .get(url)
        .then((res) => {
          setCards(res.data);
          const totalCountHeader = res.headers['x-total-count'];
          const total = Math.ceil(totalCountHeader / 12);
          setTotalPages(total);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [filterParams]
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilter = useCallback(
    (filters) => {
      setFilterParams(filters);
      setCurrentPage(1);
    },
    [setFilterParams]
  );

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
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getLocation = async () => {
      const arr = [];
      await axios
        .get('https://test-front.framework.team/locations')
        .then((res) => {
          let result = res.data;
          result.map((location) => {
            return arr.push({ value: location.id, label: location.location });
          });
          setLocations(arr);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAuthors();
    getLocation();
    setFilterParams({});
  }, []);

  useEffect(() => {
    fetchData(currentPage, filterParams);
  }, [currentPage, filterParams, fetchData]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CardsContext.Provider
        value={{
          cards,
          setCards,
          locations,
          authors,
        }}
      >
        <div className={styles.app} id={theme}>
          <div className={styles.container}>
            <Header />
            <Main
              onFilterAuthor={handleFilter}
              onFilterLocation={handleFilter}
              onFilterName={handleFilter}
              onFilterYear={handleFilter}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </CardsContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
