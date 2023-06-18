import { styled } from 'styled-components';

export const AppContainer = styled.div`
  background-color: var(--color-primary);
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-inline: 20px;
  @media (max-width: 387px) {
    padding-inline: 10px;
  }
`;
