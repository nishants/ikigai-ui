import React from 'react';
import './LinkButton.scss';
import {Link} from 'react-router-dom';

const LinkButton = props => (
    <Link className='link-button' to={props.to}>{props.label}</Link>
);

export default LinkButton;
