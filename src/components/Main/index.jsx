import styles from './Main.module.css';
import Search from '../Search';
import Card from '../Card';
import { useContext } from 'react';
import CardsContext from '../../contexts/CardsContext';

const Main = () => {
  const { cards, locations, authors } = useContext(CardsContext);

  return (
    <main className={styles.main}>
      <Search />
      <div className={styles.grid}>
        {cards.map(({ id, imageUrl, name, locationId, authorId, created }) => {
          const author = authors.find((item) => item.value === authorId);
          const location = locations.find((item) => item.value === locationId);
          return (
            <Card
              key={id}
              image={imageUrl}
              title={name}
              author={author.label}
              location={location.label}
              created={created}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Main;
