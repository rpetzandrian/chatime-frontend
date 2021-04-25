const addFormRequest = (data) => {
  return {
    type: "ADD_FORM_REQUEST",
    payload: data,
  };
};

const deleteFormRequest = () => {
  return {
    type: "DELETE_FORM_REQUEST",
  };
};

const addForm = (data) => {
  return (dispatch) => {
    dispatch(addFormRequest(data));
  };
};

const deleteForm = (data) => {
  return (dispatch) => {
    dispatch(deleteFormRequest(data));
  };
};

export { addForm, deleteForm };
