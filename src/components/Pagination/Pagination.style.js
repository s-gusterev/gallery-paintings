import { styled } from 'styled-components';

export const WrapperPagination = styled.div`
  padding-bottom: 97px;
  display: flex;

  @media (max-width: 387px) {
    width: 280px;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  width: 41px;
  height: 41px;
  background-color: transparent;
  border: 1px solid var(--color-secondary);
  display: grid;
  place-items: center;
  cursor: pointer;
  padding: 0;
`;

export const ButtonStart = styled(Button)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  &:disabled {
    cursor: default;
    border-color: var(--color-secondary-100);
    border-width: 2px;

    svg path {
      fill: var(--color-secondary);
      fill-opacity: 0.3;
    }
  }

  &:hover:not(${Button}:disabled) {
    background-color: #464646;
    color: var(--color-secondary);
  }

  svg path {
    fill: var(--color-secondary);
  }
`;

export const ButtonEnd = styled(Button)`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left: 0;

  &:disabled {
    cursor: default;
    border-color: var(--color-secondary-100);
    border-width: 2px;

    svg path {
      fill: var(--color-secondary);
      fill-opacity: 0.3;
    }
  }

  &:hover:not(${Button}:disabled) {
    background-color: #464646;
    color: var(--color-secondary);
  }

  svg path {
    fill: var(--color-secondary);
  }
`;

export const ButtonNumber = styled(Button)`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  text-transform: uppercase;
  color: var(--color-secondary);
  border-left: 0;

  &:hover:not(${Button}:disabled) {
    background-color: #464646;
    color: var(--color-secondary);
  }
  &:disabled {
    color: var(--color-primary);
    background-color: var(--color-secondary);
  }
`;

export const ButtonLeft = styled(Button)`
  border-right: 1px solid var(--color-secondary);
  border-left: 0;

  &:disabled {
    cursor: default;
    border-color: var(--color-secondary-100);
    border-width: 2px;
    border-right: 1px solid var(--color-secondary);
    border-left: 0;

    svg path {
      fill: var(--color-secondary);
      fill-opacity: 0.3;
    }
  }

  &:hover:not(${Button}:disabled) {
    background-color: #464646;
    color: var(--color-secondary);
  }

  svg path {
    fill: var(--color-secondary);
  }
`;

export const ButtonRight = styled(Button)`
  border-left: 0;

  &:disabled {
    cursor: default;
    border-color: var(--color-secondary-100);
    border-width: 2px;

    svg path {
      fill: var(--color-secondary);
      fill-opacity: 0.3;
    }
  }

  &:hover:not(${Button}:disabled) {
    background-color: #464646;
    color: var(--color-secondary);
  }

  svg path {
    fill: var(--color-secondary);
  }
`;
