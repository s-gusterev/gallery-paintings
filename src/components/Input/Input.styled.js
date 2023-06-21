import { styled } from 'styled-components';

export const InputSearh = styled.input`
  width: 265px;
  height: 45px;
  background-color: var(--color-bg-input);
  border: 1px solid var(--color-secondary);
  border-radius: 8px;
  padding: 16px 15px 14px 15px;
  box-sizing: border-box;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  color: var(--color-secondary-100);

  &::placeholder {
    color: var(--color-secondary-100);
  }

  @media (max-width: 1090px) {
    width: 220px;
    flex-shrink: 0;
  }

  @media (max-width: 978px) {
    width: 190px;
  }

  @media (max-width: 885px) {
    width: 160px;
  }

  @media (max-width: 740px) {
    width: 250px;
  }

  @media (max-width: 560px) {
    width: 280px;
    font-size: 14px;
  }
`;
