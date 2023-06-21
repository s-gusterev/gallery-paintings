import { styled } from 'styled-components';

export const WrapperSearch = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 740px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
