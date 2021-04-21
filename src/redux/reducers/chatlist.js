const initialState = {
  data: [],
  error: null,
  loading: false,
};

const Chatlist = (state = initialState, action = {}) => {
  switch (action.type) {
    case "CHATLIST_REQUEST":
      return {
        ...state,
        error: null,
        loading: true,
      };
    case "CHATLIST_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case "CHATLIST_ERROR":
      return {
        ...state,
        data: [],
        error: action.payload,
        loading: false,
      };
    case "ADD_CHATLIST_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_CHATLIST_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "ADD_CHATLIST_ERROR":
      return {
        ...state,
        error: "error occur",
        loading: false,
      };
    case "EDIT_CHATLIST_REQUEST":
      return {
        ...state,
      };
    case "SAVE_CHATLIST_REQUEST":
      return {
        ...state,
      };
    case "DELETE_CHATLIST_REQUEST":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export { Chatlist };
