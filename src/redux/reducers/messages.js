const initialState = {
  data: [],
  error: null,
  loading: false,
};

const Messages = (state = initialState, action = {}) => {
  switch (action.type) {
    case "MESSAGE_REQUEST":
      return {
        ...state,
        error: null,
        loading: true,
      };
    case "MESSAGE_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case "MESSAGE_ERROR":
      return {
        ...state,
        data: [],
        error: action.payload,
        loading: true,
      };
    case "ADD_MESSAGE_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "ADD_MESSAGE_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "ADD_MESSAGE_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "DELETE_MESSAGE_REQUEST":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export { Messages };
