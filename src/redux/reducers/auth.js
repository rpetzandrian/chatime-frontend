const initialState = {
  data: [],
  error: null,
  isLogin: false,
  loading: false,
};

const Auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        error: null,
        isLogin: false,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: null,
        isLogin: true,
        loading: false,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        data: [],
        error: action.payload,
        isLogin: false,
        loading: false,
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        error: null,
        isLogin: false,
        loading: true,
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        data: [],
        error: action.payload,
        isLogin: false,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        data: [],
        isLogin: false,
        loading: false,
      };

    default:
      return state;
  }
};

// const Logout = (state = initialState, action = {}) => {
//   if (action.type === "LOGOUT") {
//     return {
//       ...state,
//       data: [],
//       isLogin: false,
//       loading: false,
//     };
//   }
// };

// export { Login, Logout };
export { Auth };
