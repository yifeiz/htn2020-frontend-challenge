import user from "../apis/users";

export const fetchUsers = id => async dispatch => {
  const response = await user.get(`?id=${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};

export const UserLogin = () => async dispatch => {
  console.log("Logging ing");
  dispatch({
    type: "USER_LOGIN",
    payload: true
  });
};

export const UserLogout = () => async dispatch => {
  dispatch({
    type: "USER_LOGOUT",
    payload: false
  });
};
