import styles from './Main.module.css';
import Search from '../Search';
import Card from '../Card';
import imageCard from '../../assets/The_Persistence_of_Memory.jpg';

const Main = () => {
  const cards = [
    {
      id: '1',
      image: imageCard,
      title: 'The Persistence of Memory',
      author: 'Rembrandt',
      created: '1642',
      location: 'The Rijksmuseum',
    },
    {
      id: '2',
      image: imageCard,
      title: 'The Persistence of Memory',
      author: 'Rembrandt',
      created: '1642',
      location: 'The Rijksmuseum',
    },
    {
      id: '3',
      image: imageCard,
      title: 'The Persistence of Memory',
      author: 'Rembrandt',
      created: '1642',
      location: 'The Rijksmuseum',
    },
    {
      id: '4',
      image: imageCard,
      title: 'The Persistence of Memory',
      author: 'Rembrandt',
      created: '1642',
      location: 'The Rijksmuseum',
    },
    {
      id: '5',
      image: imageCard,
      title: 'The Persistence of Memory',
      author: 'Rembrandt',
      created: '1642',
      location: 'The Rijksmuseum',
    },
    {
      id: '6',
      image: imageCard,
      title: 'The Persistence of Memory',
      author: 'Rembrandt',
      created: '1642',
      location: 'The Rijksmuseum',
    },
    {
      id: '7',
      image: imageCard,
      title: 'The Persistence of Memory',
      author: 'Rembrandt',
      created: '1642',
      location: 'The Rijksmuseum',
    },
    {
      id: '8',
      image: imageCard,
      title: 'The Persistence of Memory',
      author: 'Rembrandt',
      created: '1642',
      location: 'The Rijksmuseum',
    },
    {
      id: '9',
      image: imageCard,
      title: 'The Persistence of Memory',
      author: 'Rembrandt',
      created: '1642',
      location: 'The Rijksmuseum',
    },
    {
      id: '10',
      image: imageCard,
      title: 'The Persistence of Memory',
      author: 'Rembrandt',
      created: '1642',
      location: 'The Rijksmuseum',
    },
    {
      id: 11,
      image: imageCard,
      title: 'The Persistence of Memory',
      author: 'Rembrandt',
      created: '1642',
      location: 'The Rijksmuseum',
    },
    {
      id: '12',
      image: imageCard,
      title: 'The Persistence of Memory',
      author: 'Rembrandt',
      created: '1642',
      location: 'The Rijksmuseum',
    },
  ];
  return (
    <main className={styles.main}>
      <Search />
      <div className={styles.grid}>
        {cards.map(({ id, image, title, location, author, created }) => (
          <Card
            key={id}
            image={image}
            title={title}
            author={author}
            location={location}
            created={created}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
