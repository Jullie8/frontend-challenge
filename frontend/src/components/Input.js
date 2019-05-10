import React from 'react';

const Input = (props) => {
  return (
    <input
        id={"input"}
        className="form-control "
        required={props.required}
        type={ props.type }
        name={ props.name }
        value={ props.value }
        placeholder={ props.placeholder }
        onChange={props.handleInputChange }
    />
    );
}

export default Input;