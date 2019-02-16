import React from 'react';
import './IkigaiSkill.scss';

const Skill = props => (
    <div className='ikigai-type-item skill'>
      <span className='ikigai-type-icon fa fa-star'></span>
      <label>{props.label}</label>
      {
        props.remove && <span className='ikigai-type-remove-item fa fa-times' onClick={props.remove}></span>
      }
    </div>
);

export default Skill;
