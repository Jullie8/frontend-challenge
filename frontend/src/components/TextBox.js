import React from 'react';

const TextBox = (props) => {
  return(
    <textarea
        id={"textbox"}
        className={'form-control'}
        rows={props.rows}
        name={props.name}
        value={props.value}
        onChange={props.handleTextBoxChange}
    />
  );
}

export default TextBox;