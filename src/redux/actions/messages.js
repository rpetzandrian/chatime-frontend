import axios from "axios";
import { api } from "../../config/api";

const getMessagesRequest = () => {
  return {
    type: "MESSAGE_REQUEST",
  };
};

const getMessagesSuccess = (data) => {
  return {
    type: "MESSAGE_SUCCESS",
    payload: data,
  };
};

const getMessagesError = (err) => {
  return {
    type: "MESSAGE_ERROR",
    payload: err,
  };
};

const getMessages = (user, token, chatroom_id) => {
  return (dispatch) => {
    dispatch(getMessagesRequest());
    return axios
      .get(`${api.baseUrl}/messages/${user}/${chatroom_id}`, {
        headers: {
          "user-token": `${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(getMessagesSuccess(res.data.data));
        }
      })
      .catch((err) => {
        dispatch(getMessagesError(err.response));
      });
  };
};

export { getMessages };
