import { combineReducers } from 'redux';
import {
  SET_CURRENT_USER,
  SET_TOKEN,
  SET_GROUPS,
  SET_LOADING,
} from './actions';

const initialState = {
  groups: [],
  current_user: '',
  token: '',
  loading: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GROUPS:
      return { ...state, posts: action.payload };
    case SET_CURRENT_USER:
      return { ...state, posts: action.payload };
    case SET_TOKEN:
      return { ...state, posts: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  Reducer,
});

export default rootReducer;
