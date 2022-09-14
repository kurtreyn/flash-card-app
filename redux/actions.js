export const SET_PLACEMENTS = 'SET_PLACEMENTS ';
export const SET_IMPRESSIONS = 'SET_IMPRESSIONS ';
export const SET_COST_PER_MILE = ' SET_COST_PER_MILE ';
export const SET_SUM_IMPRESSIONS = 'SET_SUM_IMPRESSIONS ';
export const SET_TOTAL_COST = 'SET_TOTAL_COST ';
export const SET_IMPRESSION_COST = 'SET_IMPRESSION_COST ';
export const SET_START_DATE = 'SET_START_DATE ';
export const SET_END_DATE = 'SET_END_DATE ';
export const SET_LOADING = 'SET_LOADING';
export const SET_TOTAL_START_DATES = 'SET_TOTAL_START_DATES';
export const SET_TOTAL_END_DATES = 'SET_TOTAL_END_DATES';
export const SET_TOTAL_IMPRESSIONS = 'SET_TOTAL_IMPRESSIONS';
export const SET_TOTAL_COST_PER_MILE = 'SET_TOTAL_COST_PER_MILE';
export const SET_TOTAL_ALL_COST = 'SET_TOTAL_ALL_COST';

export const setPlacements = (placement) => (dispatch) => {
  dispatch({
    type: SET_PLACEMENTS,
    payload: placement,
  });
};

export const setImpressions = (impression) => (dispatch) => {
  dispatch({
    type: SET_IMPRESSIONS,
    payload: impression,
  });
};

export const setCostPerMile = (costPerMile) => (dispatch) => {
  dispatch({
    type: SET_COST_PER_MILE,
    payload: costPerMile,
  });
};

export const setSumImpressions = (sumImpression) => (dispatch) => {
  dispatch({
    type: SET_SUM_IMPRESSIONS,
    payload: sumImpression,
  });
};

export const setImpressionCost = (impressionCost) => (dispatch) => {
  dispatch({
    type: SET_IMPRESSION_COST,
    payload: impressionCost,
  });
};

export const setTotalCost = (totalCost) => (dispatch) => {
  dispatch({
    type: SET_TOTAL_COST,
    payload: totalCost,
  });
};

export const setStartDates = (startDate) => (dispatch) => {
  dispatch({
    type: SET_START_DATE,
    payload: startDate,
  });
};

export const setEndDates = (endDate) => (dispatch) => {
  dispatch({
    type: SET_END_DATE,
    payload: endDate,
  });
};

export const setTotalStartDates = (startDate) => (dispatch) => {
  dispatch({
    type: SET_TOTAL_START_DATES,
    payload: startDate,
  });
};

export const setTotalEndDates = (endDate) => (dispatch) => {
  dispatch({
    type: SET_TOTAL_END_DATES,
    payload: endDate,
  });
};

export const setTotalImpressions = (impression) => (dispatch) => {
  dispatch({
    type: SET_TOTAL_IMPRESSIONS,
    payload: impression,
  });
};

export const setTotalCostPerMile = (tcpm) => (dispatch) => {
  dispatch({
    type: SET_TOTAL_COST_PER_MILE,
    payload: tcpm,
  });
};

export const setTotalAllCost = (allCost) => (dispatch) => {
  dispatch({
    type: SET_TOTAL_ALL_COST,
    payload: allCost,
  });
};

export const setLoading = (loading) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: loading,
  });
};
