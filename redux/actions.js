export const SET_GROUPS = 'SET_GROUPS ';
export const SET_LOADING = 'SET_LOADING ';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_GROUP_NAME = 'SET_GROUP_NAME';
export const SET_HAS_GROUP_NAME = 'SET_HAS_GROUP_NAME';

export const setCurrentUserDispatch = (user) => (dispatch) => {
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

export const setHasGroupName = (name) => (dispatch) => {
  dispatch({
    type: SET_HAS_GROUP_NAME,
    payload: name,
  });
};

export const setGroupName = (name) => (dispatch) => {
  dispatch({
    type: SET_GROUP_NAME,
    payload: name,
  });
};

export const setLoading = (load) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: loading,
  });
};
