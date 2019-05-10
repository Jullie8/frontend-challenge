import React from 'react';

const DropDown = (props) => {
    return(
      <select 
        className={'form-control'}
        name={ props.name } 
        value={ props.value } 
        onChange={props.handleSelect}
      >
        <option value="" disabled> {props.placeholder} </option>
        { props.options.map((option)=>{
            return (
                <option 
                key={ option.id }
                value={ option.display_name }
                >
                { option.display_name }
                </option>
            );
        })} 
      </select>
    );
}

export default DropDown;
    