const initialState = {
  data: [],
};

const exp = (state = initialState, action = {}) => {
  switch (action.type) {
    case "ADD_FORM_REQUEST":
      return {
        ...state,
        data: action.payload,
      };
    case "DELETE_FORM_REQUEST":
      return {
        ...state,
        data: [],
      };

    default:
      return state;
  }
};

export { exp };
