export const SET_POSTS = 'SET_POSTS ';
export const SET_LOADING = 'SET_LOADING ';

export const setPosts = (post) => (dispatch) => {
  dispatch({
    type: SET_POSTS,
    payload: post,
  });
};

export const setLoading = (load) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: loading,
  });
};
