export const IKAGAI_ACTIONS = {
  ADD_ITEM: 'IKGAI/ADD_ITEM',
  REMOVE_ITEM: 'IKGAI/REMOVE_ITEM',
  GET_PROGRESS: 'IKGAI/GET_PROGRESS'
};

export const addItem    = ({type, item}) => ({type: IKAGAI_ACTIONS.ADD_ITEM, payload: {type, item}});
export const removeItem = ({type, item}) => ({type: IKAGAI_ACTIONS.REMOVE_ITEM, payload: {type, item}});
