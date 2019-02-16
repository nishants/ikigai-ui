import React from 'react';
import './IkigaiMoney.scss';

const Skill = props => (
    <div className='ikigai-type-item money'>
      <span className='ikigai-type-icon fa fa-money-bill-alt'></span>
      <label>{props.label}</label>
      {
        props.remove && <span className='ikigai-type-remove-item fa fa-times' onClick={props.remove}></span>
      }
    </div>
);

export default Skill;
