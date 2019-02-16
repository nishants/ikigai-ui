import {IKAGAI_ACTIONS} from './actions';

const hacks = {
  love  : [{label: 'teaching'}, {label: 'creating'}],
  skills: [{label: 'explaining complex ideas'}, {label: 'designing'}],
  money : [{label: 'Coach'}, {label: 'Product Designer'}],
  cause : [{label: 'education'}, {label: 'simpler world'}],
};

const INITIAL_STATE = {
  addedItems: {
    love  : hacks.love,
    skills: hacks.skills,
    money : hacks.money,
    cause : hacks.cause,
  },
  itemsMapped: {
    love_skills : [{source: hacks.love[0]  , target: hacks.skills[0]}, {source: hacks.love[1]  ,target: hacks.skills[1]}],
    money_cause : [{source: hacks.money[0] , target: hacks.cause[0] }, {source: hacks.money[1] ,target: hacks.cause[1]}],
    skills_money: [{source: hacks.skills[0], target: hacks.money[0] }, {source: hacks.skills[1],target: hacks.money[1]}],
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

    case IKAGAI_ACTIONS.ADD_MAPPING:
      const newMappingList = state.itemsMapped[action.payload.type].concat(action.payload.mapping);

      return {
        ...state,
        itemsMapped: {
            ...state.itemsMapped,
            [action.payload.type]: newMappingList
        }
      };

    case IKAGAI_ACTIONS.REMOVE_ITEM:
      const filteredList = state.addedItems[action.payload.type].filter(item => action.payload.item.label !== item.label);
      return {
        ...state,
        addedItems: {
            ...state.addedItems,
            [action.payload.type]: filteredList
        }
      };

    case IKAGAI_ACTIONS.REMOVE_MAPPING:

      const
          mappingToRemove = action.payload.mapping,
          isSameMapping = mapping => mapping.source.label !== mappingToRemove.source.label || mapping.target.label !== mappingToRemove.target.label,
          filteredMappingList = state.itemsMapped[action.payload.type].filter(isSameMapping);
      return {
        ...state,
        itemsMapped: {
            ...state.itemsMapped,
            [action.payload.type]: filteredMappingList
        }
      };

    default:
      return state;
  }
};

export default reducer;
