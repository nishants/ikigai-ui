import React from 'react';
import './Button.scss';
import {classIf} from 'utils';

const classNames = props => `${classIf({if: props.large, className: 'theme-large-button'})}`;

const Button = props => (
    <button className={`theme-button theme-form-element ${classNames(props)}`}
            onClick={props.onClick}>{props.label}</button>
);

export default Button;
