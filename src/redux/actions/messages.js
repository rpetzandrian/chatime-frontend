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

const addMessagesRequest = () => {
  return {
    type: "ADD_MESSAGE_REQUEST",
  };
};

const addMessagesSuccess = () => {
  return {
    type: "ADD_MESSAGE_SUCCESS",
  };
};

const addMessagesError = (err) => {
  return {
    type: "ADD_MESSAGE_ERROR",
    payload: err,
  };
};

const deleteMessageRequest = () => {
  return {
    type: "DELETE_MESSAGE_REQUEST",
  };
};

const getMessages = (user, token, chatroom_id) => {
  return (dispatch) => {
    dispatch(getMessagesRequest());
    return axios
      .get(`${api.baseUrl}/messages/${user}/${chatroom_id}`, {
        headers: {
          "user-token": `Bearer ${token}`,
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

const addMessages = (user, token, message, withdata, cb) => {
  return (dispatch) => {
    dispatch(addMessagesRequest());
    return axios
      .post(`${api.baseUrl}/messages/${user}/${withdata || ""}`, message, {
        headers: {
          "user-token": `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(addMessagesSuccess());
        cb({ ...message, text: "" });
      })
      .catch((err) => {
        dispatch(addMessagesError(err.response));
      });
  };
};

const deleteMessages = (user, token, message, chatroom) => {
  return (dispatch) => {
    dispatch(deleteMessageRequest());
    axios.delete(
      `${api.baseUrl}/messages/${user}/${message}?chatroom=${chatroom}`,
      {
        headers: {
          "user-token": `Bearer ${token}`,
        },
      }
    );
  };
};

export { getMessages, addMessages, deleteMessages };
