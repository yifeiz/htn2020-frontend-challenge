import user from "../apis/users";

export const fetchUsers = id => async dispatch => {
  const response = await user.get(`?id=${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};
