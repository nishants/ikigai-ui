import React from 'react';
import {connect} from 'react-redux';

import './IkagaiAddItems.scss';
import LinkButton from 'components/Form/LinkButton';
import {withRouter} from 'react-router';
import AddItems from 'components/ikagai/AddItems';
import Heading from 'components/ikagai/Heading';
import Progress from 'components/ikagai/Progress';
import StepTransitionHelper from 'components/ikagai/StepTransitionHelper';

import {addItem, removeItem} from 'pages/Ikagai/actions';

class AddItemsPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemsAdded: []
    }
  }

  addItem = label => {
    this.props.dispatch(addItem({
      type: this.props.currentStep.id,
      item: {label}
    }));
  };

  removeItem = item => {
    this.props.dispatch(removeItem({
      type: this.props.currentStep.id,
      item
    }));
  };

  render(){
    const
        {currentStep, itemsAdded} = this.props,
        nextStep = StepTransitionHelper.nextStepOf(currentStep),
        nextRoute = StepTransitionHelper.routeFor(nextStep);

    return (
        <section id='ikagai-add-items'>
          <h1>
            <Heading/>
          </h1>
          <Progress progress={currentStep.progress}/>
          <AddItems items={itemsAdded} addItem={this.addItem} removeItem={this.removeItem}/>
          <LinkButton to={nextRoute} label='Next'/>
        </section>
    );
  }
}

const mapStateToProps = ({ikagai}, props) => {
  const
      currentStep = StepTransitionHelper.getStep({id: props.match.params.id, type: 'add'}),
      itemsAdded = ikagai.addedItems[currentStep.id];

  return {
    currentStep,
    itemsAdded
  };
};

export default withRouter(connect(mapStateToProps)(AddItemsPage));
