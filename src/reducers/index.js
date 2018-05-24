import { combineReducers } from 'redux';
import itemsListReducer from './items_reducer';
import currentItemReducer from './currentItem_reducer';

const rootReducer = combineReducers({
  itemsList : itemsListReducer,
  currentItem: currentItemReducer,
});

export default rootReducer;
