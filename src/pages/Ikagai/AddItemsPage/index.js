import React from 'react';
import './IkagaiAddItems.scss';
import LinkButton from 'components/Form/LinkButton';
import {withRouter} from 'react-router';
import AddItems from 'components/ikagai/AddItems';
import Heading from 'components/ikagai/Heading';
import Progress from 'components/ikagai/Progress';
import StepTransitionHelper from 'components/ikagai/StepTransitionHelper';

class AddItemsPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nextStepType: ''
    }
  }
  render(){
    const
        currentStep = StepTransitionHelper.getStep({id: this.props.match.params.id, type: 'add'}),
        nextStep = StepTransitionHelper.nextStepOf(currentStep),
        nextRoute = StepTransitionHelper.routeFor(nextStep);

    return (
        <section id='ikagai-add-items'>
          <h1>
            <Heading/>
          </h1>
          <Progress progress={currentStep.progress}/>
          <AddItems/>
          <LinkButton to={nextRoute} label='Next'/>
        </section>
    );
  }
}

export default withRouter(AddItemsPage);
