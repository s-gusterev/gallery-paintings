import { AnimatePresence } from 'framer-motion';
import Search from '../Search';
import Card from '../Card';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import CardsContext from '../../contexts/CardsContext';
import { Wrapper, Grid } from './Main.styled';

const Main = ({
  onFilterAuthor,
  onFilterLocation,
  onFilterName,
  onFilterYear,
}) => {
  const { cards, locations, authors } = useContext(CardsContext);

  return (
    <Wrapper>
      <Search
        onFilterAuthor={onFilterAuthor}
        onFilterLocation={onFilterLocation}
        onFilterName={onFilterName}
        onFilterYear={onFilterYear}
      />
      <Grid>
        {cards && (
          <AnimatePresence initial={false}>
            {cards?.map(
              ({ id, imageUrl, name, locationId, authorId, created }) => {
                const author = authors.find((item) => item.value === authorId);
                const location = locations.find(
                  (item) => item.value === locationId
                );
                return (
                  <Card
                    key={id}
                    image={imageUrl}
                    title={name}
                    author={author.label}
                    location={location.label}
                    created={created}
                  />
                );
              }
            )}
          </AnimatePresence>
        )}
      </Grid>
    </Wrapper>
  );
};

Main.propTypes = {
  onFilterAuthor: PropTypes.func.isRequired,
  onFilterLocation: PropTypes.func.isRequired,
  onFilterName: PropTypes.func.isRequired,
  onFilterYear: PropTypes.func.isRequired,
};

export default Main;
