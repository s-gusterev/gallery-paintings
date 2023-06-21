import { styled } from 'styled-components';

export const Search = styled.div`
  width: 265px;
  height: 45px;
  background-color: var(--color-bg-input);
  border: 1px solid var(--color-secondary);
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
  transition: height 300ms ease-in-out;
  flex-shrink: 0;

  border-bottom-left-radius: ${({ open }) => (open ? `0` : `8px`)};
  border-bottom-right-radius: ${({ open }) => (open ? `0` : `8px`)};
  border-bottom: ${({ open }) =>
    open ? `0` : `1px solid var(--color-secondary)`};

  svg {
    position: absolute;
    right: 15px;
    top: 19px;
  }

  @media (max-width: 1090px) {
    width: 220px;
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
  }
`;

export const TitleContainer = styled.div`
  cursor: pointer;
  padding: 13px 15px 15px 15px;
`;

export const Title = styled.span`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: var(--color-secondary);

  @media screen and (max-width: 560px) {
    font-size: 14px;
  }
`;

export const InputsContainer = styled.div`
  padding: 20px 21.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: -1px;
  top: 44px;
  background-color: var(--color-bg-input);
  width: 265px;
  box-sizing: border-box;
  border: 1px solid var(--color-secondary);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top: 0;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  ~ svg {
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'none')};
  }

  @media (max-width: 1090px) {
    width: 220px;
  }

  @media (max-width: 978px) {
    width: 190px;
  }

  @media (max-width: 885px) {
    width: 160px;
    flex-wrap: wrap;
  }

  @media (max-width: 740px) {
    width: 250px;
  }

  @media (max-width: 560px) {
    width: 280px;
  }
`;

export const InputCustom = styled.input`
  width: 95px;
  height: 45px;
  padding: 15px;
  background-color: var(--color-bg-input-year);
  border-radius: 8px;
  box-sizing: border-box;
  border: 0;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.3);

  @media (max-width: 560px) {
    font-size: 14px;
  }
`;

export const Line = styled.div`
  width: 12px;
  height: 1px;
  background-color: var(--color-secondary);
`;
