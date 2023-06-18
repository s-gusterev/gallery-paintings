import { styled } from 'styled-components';

export const ImageContainer = styled.div`
  height: 275px;
  grid-row: 1/3;
  grid-column: 1/1;

  @media (max-width: 1176px) {
    height: 230px;
  }

  @media (max-width: 768px) {
    height: 249px;
  }

  @media (max-width: 387px) {
    height: 205px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
`;

export const Content = styled.div`
  grid-row: 2/3;
  grid-column: 1/1;
  height: 28px;
  align-self: end;
  background-color: rgba(255, 255, 255, 0.75);
  padding: 5px 15px;
  box-sizing: border-box;
  transition: height 300ms ease-in-out;
  overflow: hidden;
`;

export const Title = styled.h2`
  margin: 0;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-transform: capitalize;
  color: #000;
`;

export const SubTitle = styled.p`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #000;
  margin-top: 1px;
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardWrapper = styled.article`
  border-radius: 20px;
  overflow: hidden;
  height: 275px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr;

  &:hover ${Content} {
    height: 145px;
  }

  &:hover ${Content} ${Title} {
    margin-bottom: 6px;
  }

  @media (max-width: 1176px) {
    height: 230px;
  }

  @media (max-width: 768px) {
    height: 249px;
  }

  @media (max-width: 387px) {
    height: 205px;
  }
`;

export const Span = styled.span`
  font-weight: 300;
`;
