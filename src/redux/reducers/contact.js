const initialState = {
  data: [],
  error: null,
  loading: false,
};

const Contact = (state = initialState, action = {}) => {
  switch (action.type) {
    case "CONTACT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "CONTACT_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case "CONTACT_ERROR":
      return {
        ...state,
        data: [],
        error: action.payload,
        loading: false,
      };
    case "ADD_CONTACT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_CONTACT_SUCCESS":
      return {
        ...state,
        error: null,
        loading: false,
      };
    case "ADD_CONTACT_ERROR":
      return {
        ...state,
        error: "Error occur",
        loading: false,
      };
    case "EDIT_CONTACT_REQUEST":
      return {
        ...state,
      };
    case "DELETE_CONTACT_REQUEST":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export { Contact };
