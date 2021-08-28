import axios from "axios";
import { api } from "../../config/api";

const getProfileRequest = () => {
  return {
    type: "PROFILE_REQUEST",
  };
};

const getProfileSuccess = (data) => {
  return {
    type: "PROFILE_SUCCESS",
    payload: data,
  };
};

const getProfileError = (err) => {
  return {
    type: "PROFILE_ERROR",
    payload: err,
  };
};

const getProfile = (id, token) => {
  return (dispatch) => {
    dispatch(getProfileRequest());
    return axios
      .get(`${api.baseUrl}/users/${id}`, {
        headers: {
          "user-token": `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(getProfileSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getProfileRequest(err.response));
      });
  };
};

export { getProfile };
