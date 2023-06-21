import { styled } from 'styled-components';

export const Wrapper = styled.main`
  margin-bottom: 40px;
`;

export const Grid = styled.div`
  margin-top: 45px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 20px;

  @media (max-width: 1176px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  }

  @media (max-width: 387px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;
