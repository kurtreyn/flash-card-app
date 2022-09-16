export const SET_GROUPS = 'SET_GROUPS ';
export const SET_LOADING = 'SET_LOADING ';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_TOKEN = 'SET_TOKEN';

export const setCurrentUser = (user) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: user,
  });
};

export const setToken = (token) => (dispatch) => {
  dispatch({
    type: SET_TOKEN,
    payload: token,
  });
};

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
