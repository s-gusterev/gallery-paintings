import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import {
  Search,
  TitleContainer,
  Title,
  InputsContainer,
  InputCustom,
  Line,
} from './InputYears.styled';
const InputYears = ({ onChangeGte, onChangeLte }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [open]);

  return (
    <Search open={open} ref={ref}>
      <TitleContainer onClick={() => setOpen(!open)}>
        <Title>Created</Title>
      </TitleContainer>
      <InputsContainer open={open}>
        <InputCustom
          type='number'
          name='from'
          placeholder='from'
          min='1000'
          max='2023'
          maxLength='4'
          onChange={onChangeGte}
        />
        <Line></Line>
        <InputCustom
          type='number'
          name='before'
          placeholder='before'
          min='1000'
          max='2023'
          maxLength='4'
          onChange={onChangeLte}
        />
      </InputsContainer>
      <svg
        width='10'
        height='6'
        viewBox='0 0 10 6'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z'
          fill='var(--color-secondary-100)'
        />
      </svg>
    </Search>
  );
};

InputYears.propTypes = {
  onChangeGte: PropTypes.func.isRequired,
  onChangeLte: PropTypes.func.isRequired,
};

export default InputYears;
