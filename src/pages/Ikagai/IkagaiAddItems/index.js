import React from 'react';
import './IkagaiAddItems.scss';
import LinkButton from 'components/Form/LinkButton';
import {withRouter} from 'react-router';

const ikagaiHelper = {
  steps: [{
    id: 'love',
    type: 'add',
  },{
    id: 'skills',
    type: 'add'
  },{
    id: 'money',
    type: 'add'
  },{
    id: 'cause',
    type: 'add'
  },{
    id: 'love-skills',
    type: 'map'
  }],
  nextStepOf: ({id, type}) => ikagaiHelper.steps[1 + ikagaiHelper.steps.findIndex(a => a.id === id && a.type === type)],
  routeFor: (step) => `/ikagai/${step.type}/${step.id}`
};
class IkagaiIntro extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nextStepType: ''
    }
  }
  render(){
    const
        nextStep = ikagaiHelper.nextStepOf({id: this.props.match.params.id, type: 'add'}),
        nextRoute = ikagaiHelper.routeFor(nextStep);
    return (
        <section id='ikagai-add-items'>
          <h1>
            <span className='headline'>Ikagai</span>
          </h1>
          <LinkButton to={nextRoute} label='Next'/>
        </section>
    );
  }
}

export default withRouter(IkagaiIntro);
