import {ADD_TODO} from '../actions/action.js';
import {combineReducers} from 'redux';

function todos(state=[], action) {
  switch(action.type) {
    case ADD_TODO:
      return[
        ...state,
        action.text
      ];
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos
});

export default todoApp;