import React from 'react';
import './IkigaiCause.scss';

const Cause = props => (
    <div className='ikigai-type-item cause'>
      <span className='ikigai-type-icon fa fa-globe-asia'></span>
      <label>{props.label}</label>
      {
        props.remove && <span className='ikigai-type-remove-item fa fa-times' onClick={props.remove}></span>
      }
    </div>
);

export default Cause;
