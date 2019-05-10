import React from 'react';

const Button = (props) => {
  return(
<button 
    id={props.id}
    className={props.styles}
    type={props.type} 
    >
    {props.value}
    </button>
  );
}

export default Button;
