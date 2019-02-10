import React from 'react';
import './IkigaiProgress.scss';

const Progress = props => (
    <div className='ikigai-progress'>
      <div style={{transform: `translateX(${props.progress}%)`}}></div>
    </div>
);

export default Progress;
