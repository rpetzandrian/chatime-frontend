import axios from "axios";
import Swal from "sweetalert2";
import { api } from "../../config/api";

const getContactRequest = () => {
  return {
    type: "CONTACT_REQUEST",
  };
};

const getContactSuccess = (data) => {
  return {
    type: "CONTACT_SUCCESS",
    payload: data,
  };
};

const getContactError = (err) => {
  return {
    type: "CONTACT_ERROR",
    payload: err,
  };
};

const addContactRequest = () => {
  return {
    type: "ADD_CONTACT_REQUEST",
  };
};
const addContactSuccess = () => {
  return {
    type: "ADD_CONTACT_SUCCESS",
  };
};
const addContactError = () => {
  return {
    type: "ADD_CONTACT_ERROR",
  };
};

const editContactRequest = () => {
  return {
    type: "EDIT_CONTACT_REQUEST",
  };
};

const deleteContactRequest = () => {
  return {
    type: "DELETE_CONTACT_REQUEST",
  };
};

const getContact = (userId, userToken) => {
  return (dispatch) => {
    dispatch(getContactRequest());
    return axios
      .get(`${api.baseUrl}/contacts/${userId}`, {
        headers: {
          "user-token": `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(getContactSuccess(res.data.data.friend_list));
        }
      })
      .catch((err) => {
        dispatch(getContactError(err.response));
      });
  };
};

const addContact = (user, token, form) => {
  return (dispatch) => {
    dispatch(addContactRequest());
    return axios
      .post(
        `${api.baseUrl}/contacts/${user}`,
        { ...form },
        {
          headers: {
            "user-token": `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        dispatch(addContactSuccess());
      })
      .catch((err) => {
        dispatch(addContactError());
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

const editContact = (user, token, friend, name) => {
  return (dispatch) => {
    dispatch(editContactRequest());
    return axios
      .patch(
        `${api.baseUrl}/contacts/${user}/${friend}`,
        {
          ...name,
        },
        {
          headers: {
            "user-token": `Bearer ${token}`,
          },
        }
      )
      .then((res) => {})
      .catch((err) => {});
  };
};

const deleteContact = (user, token, friend) => {
  return (dispatch) => {
    dispatch(deleteContactRequest());
    return axios
      .delete(`${api.baseUrl}/contacts/${user}/${friend}`, {
        headers: {
          "user-token": `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export { getContact, addContact, deleteContact, editContact };
