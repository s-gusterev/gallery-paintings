import styles from './Selected.module.css';
import PropTypes from 'prop-types';
import Select from 'react-select';

const Selected = () => {
  const options = [
    { value: 'blues', label: 'Salvador dali' },
    { value: 'rock', label: 'Vincent van gogh' },
    { value: 'jazz', label: 'Claude monet' },
    { value: 'orchestra', label: 'Victor vasnetsov' },
    { value: 'blues', label: 'Salvador dali' },
    { value: 'rock', label: 'Vincent van gogh' },
    { value: 'jazz', label: 'Claude monet' },
    { value: 'orchestra', label: 'Victor vasnetsov' },
  ];

  const customStyles = {
    option: (defaultStyles) => ({
      ...defaultStyles,
      color: '#fff',
      backgroundColor: '#0C0C0C',
      width: '265px',
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      color: '#fff',
      backgroundColor: '#0C0C0C',
      padding: '15px',
      border: '2px solid red',
      boxShadow: 'none',
      width: '265px',
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#fff' }),
  };
  return (
    <div className={styles.select}>
      <Select options={options} styles={customStyles} placeholder='Author' />
    </div>
  );
};

export default Selected;
