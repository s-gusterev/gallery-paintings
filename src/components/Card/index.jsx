import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  ImageContainer,
  Image,
  Content,
  Title,
  SubTitle,
  Span,
} from './Card.styled';

const MotionCardWrapper = motion(CardWrapper);
const Card = ({ image, title, created, location, author }) => {
  return (
    <MotionCardWrapper
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ImageContainer>
        <Image src={`https://test-front.framework.team${image}`} alt={title} />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <SubTitle>
          Author: <Span>{author}</Span>
        </SubTitle>
        <SubTitle>
          Created: <Span>{created}</Span>
        </SubTitle>
        <SubTitle>
          Location: <Span>{location}</Span>
        </SubTitle>
      </Content>
    </MotionCardWrapper>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Card;
