import {IKAGAI_ACTIONS} from './actions';

const INITIAL_STATE = {
  addedItems: {
    love: [],
    skills: [],
    money: [],
    cause: [],
  }
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case IKAGAI_ACTIONS.ADD_ITEM:
      console.log(action)
      console.log(state.addedItems)
      console.log(state.addedItems[action.payload.type])
      const newList = state.addedItems[action.payload.type].concat(action.payload.item);

      return {
        ...state,
        addedItems: {
            ...state.addedItems,
            [action.payload.type]: newList
        }
      };

    default:
      return state;
  }
};

export default reducer;
