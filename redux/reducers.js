import { combineReducers } from 'redux';
import {
  SET_PLACEMENTS,
  SET_IMPRESSIONS,
  SET_LOADING,
  SET_COST_PER_MILE,
  SET_SUM_IMPRESSIONS,
  SET_TOTAL_COST,
  SET_IMPRESSION_COST,
  SET_START_DATE,
  SET_END_DATE,
  SET_TOTAL_START_DATES,
  SET_TOTAL_END_DATES,
  SET_TOTAL_IMPRESSIONS,
  SET_TOTAL_COST_PER_MILE,
  SET_TOTAL_ALL_COST,
} from './actions';

const initialState = {
  placements: [],
  impression: [],
  sumImpressions: [],
  impressionCost: [],
  costPerMile: [],
  totalCost: [],
  startDates: [],
  endDates: [],
  totalStartDates: [],
  totalEndDates: [],
  totalImpressions: [],
  totalCostPerMile: [],
  totalAllCost: [],
  loading: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACEMENTS:
      return { ...state, placements: action.payload };
    case SET_IMPRESSIONS:
      return { ...state, impressions: action.payload };
    case SET_COST_PER_MILE:
      return { ...state, costPerMile: action.payload };
    case SET_SUM_IMPRESSIONS:
      return { ...state, sumImpressions: action.payload };
    case SET_TOTAL_COST:
      return { ...state, totalCost: action.payload };
    case SET_IMPRESSION_COST:
      return { ...state, impressionCost: action.payload };
    case SET_START_DATE:
      return { ...state, startDates: action.payload };
    case SET_END_DATE:
      return { ...state, endDates: action.payload };
    case SET_TOTAL_START_DATES:
      return { ...state, totalStartDates: action.payload };
    case SET_TOTAL_END_DATES:
      return { ...state, totalEndDates: action.payload };
    case SET_TOTAL_IMPRESSIONS:
      return { ...state, totalImpressions: action.payload };
    case SET_TOTAL_COST_PER_MILE:
      return { ...state, totalCostPerMile: action.payload };
    case SET_TOTAL_ALL_COST:
      return { ...state, totalAllCost: action.payload };
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
