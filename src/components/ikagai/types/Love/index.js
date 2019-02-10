import React from 'react';
import './IkigaiLove.scss';

const Love = props => (
    <div className='ikigai-love'>
      <span className='ikigai-type-icon fa fa-heart'></span>
      <label>{props.label}</label>
      <span className='ikigai-type-remove-item fa fa-times' onClick={props.remove}></span>
    </div>
);

export default Love;
