import { styled } from 'styled-components';

import logo from '../../assets/logo.svg';

export const Link = styled.a.attrs({ href: '/gallery-paintings/' })`
  width: 64px;
  height: 64px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  transition: opacity 300ms ease;
  &:hover {
    opacity: 0.8;
  }
`;
