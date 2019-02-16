import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import './IkagaiMapItems.scss';

import Heading from 'components/ikagai/Heading';
import Progress from 'components/ikagai/Progress';
import StepTransitionHelper from 'components/ikagai/StepTransitionHelper';
import Love from 'components/ikagai/types/Love';

import {classIf} from 'utils';

class MapItemsPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      draggingLabel    : null,
      droppingLabel    : null,
      draggingOverLabel: null,
      mappings         : []
    };
  }

  addMapping = ({sourceLabel, targetLabel}) => {
    this.setState((state, props) => {
      const
          mappingExists = state.mappings.find(m => m.source.label === sourceLabel && m.target.label === targetLabel),
          mapping = mappingExists ? null :  {
            source: props.draggableSources.find(i => i.label === sourceLabel),
            target: props.droppableTargets.find(i => i.label === targetLabel)
          };
      return mapping ? {mappings : state.mappings.concat(mapping)} : null;
    })
  };

  draggingSource = (event, item) => {
    event.dataTransfer.setData("label", item.label);
    this.setState({draggingLabel: item.label});
  };

  draggingEnded = () => {
    this.setState({
          draggingLabel: null,
          draggingOverLabel: null
        }
    );
  };

  draggingOnTarget = (event, item) => {
    this.setState({draggingOverLabel: item.label});
    event.preventDefault();
  };

  droppedOnTarget = (event, item) => {
    this.addMapping({
      sourceLabel : event.dataTransfer.getData("label"),
      targetLabel : item.label
    });

    this.setState({
      draggingLabel: null,
      draggingOverLabel: null
    });
  };

  getDraggableItem = item => {
    const
        isBeingDragged = this.state.draggingLabel === item.label,
        isBeingDropped = this.state.droppingLabel === item.label,
        classNames = classIf(
            {if: isBeingDragged, className: 'dragging-item'},
            {if: isBeingDropped, className: 'dropping-item dropping-item'}
        );

    return (
        <li
            className={classNames}
            key={item.label}>
          <span
              draggable
              onDragEnd={(e) => this.draggingEnded()}
              onDragStart={(e) => this.draggingSource(e, item)}>
            <Love label={item.label}/>
          </span>
        </li>
    );
  };

  getDroppableItem = item => {
    const
        isBeingDraggedOver = this.state.draggingOverLabel === item.label,
        classNames = classIf(
            {if: isBeingDraggedOver, className: 'being-dragged-over'}
        );

    return (
        <li
            className={classNames}
            key={item.label}>
          <span
              onDrop={(e) => this.droppedOnTarget(e, item)}
              onDragOver={(e) => this.draggingOnTarget(e, item)}>
            <Love label={item.label}/>
          </span>
        </li>
    );
  };

  getMappings = mapping => {
    return (
        <li key={`${mapping.source.label}-${mapping.target.label}`}>
          {`${mapping.source.label}-${mapping.target.label}`}
        </li>
    );
  };

  render(){
    const
        {currentStep, droppableTargets, draggableSources} = this.props,
        {mappings} = this.state,
        {getDraggableItem, getDroppableItem, getMappings} = this;

    return (
        <section id='ikagai-map-items'>
          <h1>
            <Heading/>
          </h1>
          <Progress progress={currentStep.progress}/>
          <label className='map-items-heading'>
            Drag and drop item form left onto item on right if anything relates to other
          </label>

          <div className='drag-and-drop-to-map-container'>
            <div className='drag-to-map-container'>
              <ul>
                {draggableSources.map(getDraggableItem)}
              </ul>
            </div>

            <div className='drop-to-map-container'>
              <ul>
                {droppableTargets.map(getDroppableItem)}
              </ul>
            </div>
          </div>

          <div className='drag-and-drop-mappings'>
            <ul>
              {mappings.map(getMappings)}
            </ul>
          </div>

        </section>
    );
  }
}

const mapStateToProps = ({ikagai}, props) => {
  const
      currentStep = StepTransitionHelper.getStep({id: props.match.params.id, type: 'map'}),
      draggableSources   = ikagai.addedItems[currentStep.dragItem],
      droppableTargets   = ikagai.addedItems[currentStep.dropItem],
      dragLabel   = StepTransitionHelper.itemLabels[currentStep.dragItem],
      dropLabel   = StepTransitionHelper.itemLabels[currentStep.dropItem];

  return {
    currentStep,
    draggableSources,
    droppableTargets,
    dragLabel,
    dropLabel
  };
};

export default withRouter(connect(mapStateToProps)(MapItemsPage));