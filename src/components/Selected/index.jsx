import styles from './Selected.module.css';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';

const Selected = ({ options, placeholder }) => {
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z'
            fill='var(--color-font-input)'
          />
        </svg>
      </components.DropdownIndicator>
    );
  };

  const customStyles = {
    option: (defaultStyles) => ({
      ...defaultStyles,
      color: 'var(--color-secondary)',
      backgroundColor: 'var(--color-bg-input)',
      fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
      fontWeight: '500',
      fontSize: '16px',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingLeft: '30px',
      cursor: 'pointer',
      '&:last-child': {
        marginBottom: '20px',
      },
      '&:first-of-type': {
        marginTop: '20px',
      },

      '&:hover': {
        backgroundColor: 'var(--color-secondary)',
        color: 'var(--color-primary)',
      },
    }),

    control: (defaultStyles, { menuIsOpen }) => ({
      ...defaultStyles,
      color: 'var(--color-secondary)',
      backgroundColor: 'var(--color-bg-input)',
      boxShadow: 'none',
      width: '265px',
      borderColor: 'var(--color-secondary)',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      borderBottomLeftRadius: menuIsOpen ? 0 : '8px',
      borderBottomRightRadius: menuIsOpen ? 0 : '8px',
      borderBottomColor: menuIsOpen
        ? 'rgba(255, 255, 255, 0.3)'
        : 'var(--color-light)',
      position: 'relative',
      height: '45px',
      cursor: 'pointer',
      '&:hover': {
        borderColor: 'none',
      },
      '&::before': {
        content: '""',
        width: '1px',
        height: '3px',
        backgroundColor: 'var(--color-secondary)',
        position: 'absolute',
        left: '-1px',
        top: '43px',
        zIndex: 9999,
        display: menuIsOpen ? 'block' : 'none',
      },
      '&::after': {
        content: '""',
        width: '1px',
        height: '3px',
        backgroundColor: 'var(--color-secondary)',
        position: 'absolute',
        right: '-1px',
        top: '43px',
        zIndex: 9999,
        display: menuIsOpen ? 'block' : 'none',
      },
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: 'var(--color-secondary)',
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: 'var(--color-light)',
      fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
      marginLeft: 0,
      marginRight: 0,
      fontSize: '13px',
      fontWeight: '400',
      lineHeight: '15px',
    }),
    valueContainer: (defaultStyles) => ({
      ...defaultStyles,
      padding: '15px',
      paddingTop: '13px',
      paddingBottom: '12px',
      fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
      fontSize: '13px',
      fontWeight: '400',
      lineHeight: '15px',
    }),
    input: (defaultStyles) => ({
      ...defaultStyles,
      padding: '0',
      margin: '0',
      color: 'var(--color-secondary)',
      fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
      fontSize: '13px',
      fontWeight: '400',
      lineHeight: '15px',
    }),
    indicatorSeparator: (defaultStyles) => ({
      ...defaultStyles,
      display: 'none',
    }),
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      padding: 0,
      marginRight: '18px',
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,
      marginTop: 0,
      border: 0,
      borderRadius: '8px',
      background: 'var(--color-bg-input)',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px',
      borderBottomColor: 'var(--color-secondary)',
      borderLeftColor: 'var(--color-secondary)',
      borderRightColor: 'var(--color-secondary)',
      borderWidth: '1px',
      borderStyle: 'solid',
      overflow: 'hidden',
      paddingRight: '1px',
    }),
    menuList: (defaultStyles) => ({
      ...defaultStyles,
      padding: 0,
      '::-webkit-scrollbar': {
        width: '9px',
      },
      '::-webkit-scrollbar-track': {},
      '::-webkit-scrollbar-thumb': {
        background: '#7b7b7b',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.12)',
        borderRadius: '10px',
      },
    }),
    menuPortal: (defaultStyles) => ({
      ...defaultStyles,
    }),
  };
  return (
    <div className={styles.select}>
      <Select
        maxMenuHeight={300}
        options={options}
        styles={customStyles}
        components={{ DropdownIndicator }}
        isSearchable={false}
        placeholder={placeholder}
      />
    </div>
  );
};

Selected.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Selected;
