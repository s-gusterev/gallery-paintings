import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ type, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} className={styles.input} />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
