const initialState = {
  data: [],
  loading: false,
  error: null,
};

const User = (state = initialState, action = {}) => {
  switch (action.type) {
    case "PROFILE_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "PROFILE_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case "PROFILE_ERROR":
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { User };
