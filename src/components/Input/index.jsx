import PropTypes from 'prop-types';
import { InputSearh } from './Input.styled';

const Input = ({ type, placeholder, onChange }) => {
  return (
    <InputSearh type={type} placeholder={placeholder} onChange={onChange} />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
