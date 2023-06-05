import styles from './App.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const getPaintings = async () => {
      await axios
        .get(
          'https://test-front.framework.team/paintings?_limit=12&_page=1&authorId=1'
        )
        .then((res) => {
          // console.log(res.data);
          setCards(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getAuthors = async () => {
      const arr = [];
      await axios
        .get('https://test-front.framework.team/authors')
        .then((res) => {
          // console.log(res.data);
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
          // console.log(res.data);
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
    getPaintings();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CardsContext.Provider value={{ cards, locations, authors }}>
        <div className={styles.app} id={theme}>
          <div className={styles.container}>
            <Header />
            <Main />
            <Pagination />
          </div>
        </div>
      </CardsContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
