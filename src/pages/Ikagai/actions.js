export const IKAGAI_ACTIONS = {
  ADD_ITEM: 'IKGAI/ADD_ITEM',
  REMOVE_ITEM: 'IKGAI/REMOVE_ITEM',

  ADD_MAPPING: 'IKGAI/ADD_MAPPING',
  REMOVE_MAPPING: 'IKGAI/REMOVE_MAPPING',

  SET_PROGRESS: 'IKGAI/SET_PROGRESS',
};

export const addItem    = ({type, item}) => ({type: IKAGAI_ACTIONS.ADD_ITEM, payload: {type, item}});
export const removeItem = ({type, item}) => ({type: IKAGAI_ACTIONS.REMOVE_ITEM, payload: {type, item}});

export const addMapping    = ({type, mapping}) => ({type: IKAGAI_ACTIONS.ADD_MAPPING, payload: {type, mapping}});
export const removeMapping = ({type, mapping}) => ({type: IKAGAI_ACTIONS.REMOVE_MAPPING, payload: {type, mapping}});

export const setProgress = progress => ({type: IKAGAI_ACTIONS.SET_PROGRESS, payload: {progress}});
