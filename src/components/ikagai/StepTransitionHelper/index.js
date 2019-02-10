const StepTransitionHelper = {
  steps: [{
    id: 'love',
    type: 'add',
    progress: 20,
  },{
    id: 'skills',
    type: 'add',
    progress: 40,
  },{
    id: 'money',
    type: 'add',
    progress: 60,
  },{
    id: 'cause',
    type: 'add',
    progress: 70,
  },{
    id: 'love-skills',
    type: 'map',
    progress: 80,
  }],
  getStep :({id, type}) => StepTransitionHelper.steps[StepTransitionHelper.steps.findIndex(a => a.id === id && a.type === type)],
  nextStepOf: ({id, type}) => StepTransitionHelper.steps[1 + StepTransitionHelper.steps.findIndex(a => a.id === id && a.type === type)],
  routeFor: (step) => `/ikagai/${step.type}/${step.id}`
};

export default StepTransitionHelper;
