/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({
  rows, name, value, handleTextBoxChange,
}) => (<textarea id="textbox" className="form-control" rows={rows} name={name} value={value} onChange={handleTextBoxChange} />);

TextBox.defaultProps = {
  rows: 3,
  name: '',
  value: '',
  handleTextBoxChange: () => { }, // empty fun that returns undefined,
};

TextBox.propTypes = {
  rows: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.string,
  handleTextBoxChange: PropTypes.func,
};

export default TextBox;
