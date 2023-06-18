import Logo from '../Logo';
import ToogleTheme from '../ToogleTheme';
import { Wrapper } from './Header.styled';

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <ToogleTheme />
    </Wrapper>
  );
};

export default Header;
