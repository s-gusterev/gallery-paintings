import { createContext } from 'react';

const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});
export default ThemeContext;
