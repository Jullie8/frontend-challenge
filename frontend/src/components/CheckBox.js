import React from 'react';

const CheckBox = (props) => {
  return(
    <div className="assistant-req-checkbox">
        <input
            name={props.name}
            type={props.type}
            checked={props.checked}
            onChange={props.handleCheckBoxChange} 
        />
       {props.children}
    </div>
  );
}

export default CheckBox;