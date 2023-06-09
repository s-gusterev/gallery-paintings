import styles from './Header.module.css';
import Logo from '../Logo';
import ToogleTheme from '../ToogleTheme';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ToogleTheme />
    </header>
  );
};

export default Header;
