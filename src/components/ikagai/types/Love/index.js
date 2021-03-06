import React from 'react';
import './IkigaiLove.scss';

const Love = props => (
    <div className='ikigai-type-item love'>
      <span className='ikigai-type-icon fa fa-heart'></span>
      <label>{props.label}</label>
      {
        props.remove && <span className='ikigai-type-remove-item fa fa-times' onClick={props.remove}></span>
      }
    </div>
);

export default Love;
