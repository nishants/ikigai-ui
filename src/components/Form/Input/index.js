import React from 'react';
import './Input.scss';

const Input = props => (
    <input className='theme-input theme-form-element'
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}>{props.label}</input>
);

export default Input;
