import React from 'react';
import './IkagaiMapping.scss';

const typeIcons = {
  love  : 'fa-heart',
  skills: 'fa-star',
  money : 'fa-money-bill-alt',
  cause : 'fa-globe-asia',
};

const Mapping = ({mapping: {source, target}, type, onRemove}) => {
  return (
      <div className='ikagai-mapping-container'>
        <div className='ikagai-mapping-items'>
          <div className={`ikagai-mapping-item ${type.dragItem}`}><i
              className={`fa ${typeIcons[type.dragItem]}`}/>
            <label>{source.label}</label>
          </div>
          <div className={`ikagai-mapping-item ${type.dropItem}`}><i
              className={`fa ${typeIcons[type.dropItem]}`}/>
            <label>{target.label}</label>
          </div>
        </div>
        <span className='ikigai-type-remove-item fa fa-times' onClick={onRemove}></span>
      </div>
  );
};

export default Mapping;
