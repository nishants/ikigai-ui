const StepTransitionHelper = {
  steps: [{
    id: 'love',
    type: 'add',
    progress: 20,
  },{
    id: 'skills',
    type: 'add',
    progress: 30,
  },{
    id: 'money',
    type: 'add',
    progress: 40,
  },{
    id: 'cause',
    type: 'add',
    progress: 50,
  },{
    id: 'love-skills',
    type: 'map',
    dragItem: 'love',
    dropItem: 'skills',
    progress: 60,
  },{
    id: 'money-cause',
    type: 'map',
    dragItem: 'money',
    dropItem: 'cause',
    progress: 70,
  },{
    id: 'skills-money',
    type: 'map',
    dragItem: 'skills',
    dropItem: 'money',
    progress: 80,
  }
  ],

  getStep :({id, type}) => StepTransitionHelper.steps[StepTransitionHelper.steps.findIndex(a => a.id === id && a.type === type)],
  nextStepOf: ({id, type}) => StepTransitionHelper.steps[1 + StepTransitionHelper.steps.findIndex(a => a.id === id && a.type === type)],
  routeFor: step => step ? `/ikagai/${step.type}/${step.id}` : '/show-results',
  itemLabels : {
    love: 'Things I love',
    skills: 'Things I am good at',
    money: 'Things I can do to make money',
    cause: 'Things I can contribute to world with'
  }
};

export default StepTransitionHelper;
