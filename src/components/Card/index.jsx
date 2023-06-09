import styles from './Card.module.css';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Card = ({ image, title, created, location, author }) => {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={`https://test-front.framework.team${image}`}
          alt={title}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>
          Author: <span className={styles.span}>{author}</span>
        </p>
        <p className={styles.subtitle}>
          Created: <span className={styles.span}>{created}</span>
        </p>
        <p className={styles.subtitle}>
          Location: <span className={styles.span}>{location}</span>
        </p>
      </div>
    </motion.article>
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
