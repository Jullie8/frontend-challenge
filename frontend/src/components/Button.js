/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({
  id, styles, disabled, value,
}) => (
  <button id={id} className={styles} type="submit" disabled={disabled}>
    {value}
  </button>
);

export default Button;
