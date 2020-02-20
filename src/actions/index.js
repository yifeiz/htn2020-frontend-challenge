import user from "../apis/users";

export const fetchUsers = () => async dispatch => {
  const response = await user.get("?id=291012924");
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};
