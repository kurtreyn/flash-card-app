export const SET_GROUPS = 'SET_GROUPS ';
export const SET_LOADING = 'SET_LOADING ';

export const setGroups = (group) => (dispatch) => {
  dispatch({
    type: SET_GROUPS,
    payload: group,
  });
};

export const setLoading = (load) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: loading,
  });
};
