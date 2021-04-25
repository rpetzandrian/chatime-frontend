import axios from "axios";
import Swal from "sweetalert2";
import { api } from "../../config/api";

const getChatlistRequest = () => {
  return {
    type: "CHATLIST_REQUEST",
  };
};

const getChatlistSuccess = (data) => {
  return {
    type: "CHATLIST_SUCCESS",
    payload: data,
  };
};

const getChatlistError = (err) => {
  return {
    type: "CHATLIST_ERROR",
    payload: err,
  };
};

const addChatlistRequest = () => {
  return {
    type: "ADD_CHATLIST_REQUEST",
  };
};

const addChatlistSuccess = () => {
  return {
    type: "ADD_CHATLIST_SUCCESS",
  };
};

const addChatlistError = () => {
  return {
    type: "ADD_CHATLIST_ERROR",
  };
};

const editChatlistRequest = () => {
  return {
    type: "EDIT_CHATLIST_REQUEST",
  };
};

const saveChatlistRequest = () => {
  return {
    type: "SAVE_CHATLIST_REQUEST",
  };
};

const deleteChatlistRequest = () => {
  return {
    type: "DELETE_CHATLIST_REQUEST",
  };
};

const getChatlist = (userId, sortChatlist, userToken, keyword = "") => {
  return (dispatch) => {
    dispatch(getChatlistRequest());
    return axios
      .get(
        `${api.baseUrl}/chatrooms/${userId}/${
          sortChatlist || ""
        }?keyword=${keyword}`,
        {
          headers: {
            "user-token": `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(getChatlistSuccess(res.data.data));
        }
      })
      .catch((err) => {
        dispatch(getChatlistError(err.response.data.message));
      });
  };
};

const addChatlist = (user, token, friend, friend_name, cb) => {
  return (dispatch) => {
    dispatch(addChatlistRequest());
    return axios
      .post(
        `${api.baseUrl}/chatrooms/${user}`,
        { user2: friend },
        {
          headers: {
            "user-token": `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          dispatch(addChatlistSuccess());
          cb.push(
            "/chat/" +
              friend_name.toLowerCase().split(" ").join("-") +
              "-" +
              res.data.data.id
          );
        }
      })
      .catch((err) => {
        dispatch(addChatlistError());
        Swal.fire({
          position: "top-start",
          icon: "error",
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          toast: true,
          timer: 1500,
        });
      });
  };
};

const editChatlist = (user, chatroom, userToken) => {
  return (dispatch) => {
    dispatch(editChatlistRequest());
    return axios.patch(
      `${api.baseUrl}/messages/${user}/${chatroom}`,
      {},
      {
        headers: {
          "user-token": `Bearer ${userToken}`,
        },
      }
    );
  };
};

const saveChatlist = (user, chatroom, userToken) => {
  return (dispatch) => {
    dispatch(saveChatlistRequest());
    return axios.patch(
      `${api.baseUrl}/chatrooms/${user}/${chatroom}`,
      { is_saved: true },
      {
        headers: {
          "user-token": `Bearer ${userToken}`,
        },
      }
    );
  };
};

const deleteChatlist = (user, chatroom, userToken) => {
  return (dispatch) => {
    dispatch(deleteChatlistRequest());
    return axios
      .delete(`${api.baseUrl}/chatrooms/${user}/${chatroom}`, {
        headers: {
          "user-token": `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
  };
};

export { getChatlist, addChatlist, editChatlist, deleteChatlist, saveChatlist };
