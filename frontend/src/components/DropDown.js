/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

const DropDown = ({
  name, options, value, placeholder, handleSelect,
}) => (
  <select
    className="form-control"
    name={name}
    value={value}
    onChange={handleSelect}
  >
    <option value="" disabled>
      {' '}
      {placeholder}
      {' '}
    </option>
    { options.map(option => (
      <option
        key={option.id}
        value={option.display_name}
      >
        { option.display_name }
      </option>
    ))}
  </select>
);

DropDown.defaultProps = {
  name: '',
  options: [],
  value: '',
  placeholder: '',
  handleSelect: () => { },
};

DropDown.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    display_name: PropTypes.string,
    id: PropTypes.string,
  })),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleSelect: PropTypes.func,
};
export default DropDown;
