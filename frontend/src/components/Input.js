/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  required, type, name, value, placeholder, handleInputChange,
}) => (<input id="input" className="form-control " required={required} type={type} name={name} value={value} placeholder={placeholder} onChange={handleInputChange} />);

Input.defaultProps = {
  type: '',
  required: false,
  name: '',
  value: '',
  placeholder: '',
  handleInputChange: () => { },
};

Input.propTypes = {
  type: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleInputChange: PropTypes.func,
};

export default Input;
