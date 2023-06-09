import { createContext } from 'react';

const CardsContext = createContext({
  cards: [],
  setCards: () => {},
  locations: [],
  authors: [],
});
export default CardsContext;
