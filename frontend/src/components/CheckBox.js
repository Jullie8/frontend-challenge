/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({
  name, type, checked, handleCheckBoxChange, children,
}) => (
  <div className="assistant-req-checkbox">
    <input name={name} type={type} checked={checked} onChange={handleCheckBoxChange} />
    {children}
  </div>
);

CheckBox.defaultProps = {
  name: '',
  type: '',
  checked: false,
  handleCheckBoxChange: () => { }, // empty fun that returns undefined,
  children: '',
};

CheckBox.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  checked: PropTypes.bool,
  handleCheckBoxChange: PropTypes.func,
  children: PropTypes.node,
};

export default CheckBox;
