import styles from './App.module.css';
import { useState } from 'react';
import ThemeContext from './contexts/ThemeContext';
import Header from './components/Header';
import Main from './components/Main';
import Pagination from './components/Pagination';
function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={styles.app} id={theme}>
        <div className={styles.container}>
          <Header />
          <Main />
          <Pagination />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
