import {IKAGAI_ACTIONS} from './actions';

const hacks = {
  love: [{label: 'teaching'}, {label: 'creating'}],
  skills: [{label: 'explaining complex ideas'}, {label: 'designing'}]
};

const INITIAL_STATE = {
  addedItems: {
    love  : hacks.love,
    skills: hacks.skills,
    money : [],
    cause : [],
  },
  itemsMapped: {
    love_skills: [],
    money_cause: [],
    skills_money: [],
  }
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case IKAGAI_ACTIONS.ADD_ITEM:
      const newList = state.addedItems[action.payload.type].concat(action.payload.item);

      return {
        ...state,
        addedItems: {
            ...state.addedItems,
            [action.payload.type]: newList
        }
      };
    case IKAGAI_ACTIONS.REMOVE_ITEM:
      const filteredList = state.addedItems[action.payload.type].filter(item => action.payload.item.label !== item.label);
      window.state = state;
      window.action = action;
      return {
        ...state,
        addedItems: {
            ...state.addedItems,
            [action.payload.type]: filteredList
        }
      };

    default:
      return state;
  }
};

export default reducer;
