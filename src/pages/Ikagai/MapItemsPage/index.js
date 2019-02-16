import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import './IkagaiMapItems.scss';

import Heading from 'components/ikagai/Heading';
import Progress from 'components/ikagai/Progress';
import StepTransitionHelper from 'components/ikagai/StepTransitionHelper';
import Love from 'components/ikagai/types/Love';

class MapItemsPage extends React.Component{
  constructor(props){
    super(props);
  }

  getDroppableItem = item => (<li key={item.label}>
    <Love label={item.label}/>
  </li>);


  getDraggableItem = item => (<li key={item.label}>
    <Love label={item.label}/>
  </li>);


  render(){
    const
        {currentStep, dropItems, dragItems} = this.props,
        {getDraggableItem, getDroppableItem} = this;

    return (
        <section id='ikagai-map-items'>
          <h1>
            <Heading/>
          </h1>
          <Progress progress={currentStep.progress}/>
          <label className='map-items-heading'>
            Drag and drop item form left on item on right if anything relates to other
          </label>

          <div className='drag-and-drop-to-map-container'>
            <div className='drag-to-map-container'>
              <ul>
                {dragItems.map(getDraggableItem)}
              </ul>
            </div>

            <div className='drop-to-map-container'>
              <ul>
                {dropItems.map(getDroppableItem)}
              </ul>
            </div>
          </div>

        </section>
    );
  }
}

const mapStateToProps = ({ikagai}, props) => {
  const
      currentStep = StepTransitionHelper.getStep({id: props.match.params.id, type: 'map'}),
      dragItems   = ikagai.addedItems[currentStep.dragItem],
      dropItems   = ikagai.addedItems[currentStep.dropItem],
      dragLabel   = StepTransitionHelper.itemLabels[currentStep.dragItem],
      dropLabel   = StepTransitionHelper.itemLabels[currentStep.dropItem];

  return {
    currentStep,
    dragItems,
    dropItems,
    dragLabel,
    dropLabel
  };
};

export default withRouter(connect(mapStateToProps)(MapItemsPage));
