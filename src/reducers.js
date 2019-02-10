import {combineReducers}  from 'redux';

import scatter from './auth/scatter_reducer';
import ikagai from 'pages/Ikagai/reducer';

export default combineReducers({
  scatter,
  ikagai
});
