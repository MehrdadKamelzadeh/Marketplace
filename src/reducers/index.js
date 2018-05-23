import { combineReducers } from 'redux';
import itemsListReducer from './items_reducer';

const rootReducer = combineReducers({
  itemsList : itemsListReducer,
});

export default rootReducer;
