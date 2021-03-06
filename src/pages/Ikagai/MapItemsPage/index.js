import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import './IkagaiMapItems.scss';

import StepTransitionHelper from 'components/ikagai/StepTransitionHelper';
import LinkButton from 'components/Form/LinkButton';
import {addMapping, removeMapping, setProgress} from 'pages/Ikagai/actions';
import IkigaiType from 'components/ikagai/types';
import Mapping from 'components/ikagai/types/Mapping';

import {classIf} from 'utils';

class MapItemsPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      draggingLabel    : null,
      droppingLabel    : null,
      draggingOverLabel: null
    };
    this.props.dispatch(setProgress(props.currentStep.progress));
  }

  componentDidUpdate(prevProps){
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.dispatch(setProgress(this.props.currentStep.progress));
    }
  }

  addMapping = ({sourceLabel, targetLabel}) => {
    const
        {draggableSources, droppableTargets, mappings} = this.props,
        mappingExists = mappings.find(m => m.source.label === sourceLabel && m.target.label === targetLabel),
        mapping = mappingExists ? null :  {
          source: draggableSources.find(i => i.label === sourceLabel),
          target: droppableTargets.find(i => i.label === targetLabel)
        };
    mapping && this.props.dispatch(addMapping({type: this.props.currentStep.id, mapping}));
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
        ),
        TypeComponent = IkigaiType(this.props.currentStep.dragItem);

    return (
        <li
            className={classNames}
            key={item.label}>
          <span
              draggable
              onDragEnd={(e) => this.draggingEnded()}
              onDragStart={(e) => this.draggingSource(e, item)}>
            <TypeComponent label={item.label}/>
          </span>
        </li>
    );
  };

  getDroppableItem = item => {
    const
        isBeingDraggedOver = this.state.draggingOverLabel === item.label,
        classNames = classIf(
            {if: isBeingDraggedOver, className: 'being-dragged-over'}
        ),
        TypeComponent = IkigaiType(this.props.currentStep.dropItem);

    return (
        <li
            className={classNames}
            key={item.label}>
          <span
              onDrop={(e) => this.droppedOnTarget(e, item)}
              onDragOver={(e) => this.draggingOnTarget(e, item)}>
            <TypeComponent label={item.label}/>
          </span>
        </li>
    );
  };

  removeMapping = mapping => this.props.dispatch(removeMapping({
    type: this.props.currentStep.id,
    mapping
  }));

  getMappings = mapping => {
    return (
        <li key={`${mapping.source.label}-${mapping.target.label}`}>
          <Mapping mapping={mapping} type={this.props.currentStep} onRemove={() => this.removeMapping(mapping)}/>
        </li>
    );
  };

  render(){
    const
        {droppableTargets, draggableSources, nextRoute, mappings, dropLabel, dragLabel} = this.props,
        {getDraggableItem, getDroppableItem, getMappings} = this;

    return (
        <section id='ikagai-map-items'>
          <label className='map-items-heading'>
            Drag and drop item form left onto item on right if anything relates to other
          </label>

          <div className='drag-and-drop-to-map-container'>
            <div className='drag-to-map-container'>
              <label className='column-info-heading'>{dragLabel}</label>
              <ul>
                {draggableSources.map(getDraggableItem)}
              </ul>
            </div>

            <div className='drop-to-map-container'>
              <label className='column-info-heading'>{dropLabel}</label>
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

          {
            mappings.length > 1 && <LinkButton to={nextRoute} label='Next'/>
          }
        </section>
    );
  }
}

const mapStateToProps = ({ikagai}, props) => {
  const
      currentStep = StepTransitionHelper.getStep({id: props.match.params.id, type: 'map'}),
      draggableSources   = ikagai.addedItems[currentStep.dragItem],
      droppableTargets   = ikagai.addedItems[currentStep.dropItem],
      nextStep = StepTransitionHelper.nextStepOf(currentStep),
      nextRoute = StepTransitionHelper.routeFor(nextStep),
      mappings = ikagai.itemsMapped[currentStep.id],
      labels = {
        love  : 'Things I love',
        skills: 'Things I am good at',
        money : 'Things I can do to make money',
        cause : 'Things I can contribute to world with'
      },
      dropLabel = labels[currentStep.dropItem],
      dragLabel = labels[currentStep.dragItem];

  return {
    currentStep,
    draggableSources,
    droppableTargets,
    dragLabel,
    dropLabel,
    nextRoute,
    mappings
  };
};

export default withRouter(connect(mapStateToProps)(MapItemsPage));
