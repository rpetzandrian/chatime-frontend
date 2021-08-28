import axios from "axios";
import Swal from "sweetalert2";
import { api } from "../../config/api";

const LoginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};

const LoginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

const LoginError = (err) => {
  return {
    type: "LOGIN_ERROR",
    payload: err,
  };
};

const RegisterRequest = () => {
  return {
    type: "REGISTER_REQUEST",
  };
};

// const RegisterSuccess = (data) => {
//   return {
//     type: "REGISTER_SUCCESS",
//     payload: data,
//   };
// };

const RegisterError = (err) => {
  return {
    type: "REGISTER_ERROR",
    payload: err,
  };
};

const Logout = () => {
  return {
    type: "LOGOUT",
  };
};

const Login = (form) => {
  return (dispatch) => {
    dispatch(LoginRequest());
    return axios
      .post(`${api.baseUrl}/auth/login`, form)
      .then((res) => {
        if (res.status === 200) {
          dispatch(LoginSuccess(res.data.data));
        }
      })
      .catch((err) => {
        dispatch(LoginError(err.response.data));
        Swal.fire({
          position: "top",
          icon: "error",
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          toast: true,
          timer: 1500,
        });
      });
  };
};

const Register = (form) => {
  return (dispatch) => {
    dispatch(RegisterRequest());
    return axios
      .post(`${api.baseUrl}/auth/register`, form)
      .then((res) => {
        if (res.status === 201) {
          dispatch(Login(form));
        }
      })
      .catch((err) => {
        if (err.response.data.message === "User exist") {
          Swal.fire({
            position: "top",
            icon: "error",
            title: `${err.response.data.message}`,
            showConfirmButton: false,
            toast: true,
            timer: 1500,
          });
          dispatch(RegisterError(err.response.data));
        }
      });
  };
};

export { Login, Logout, Register };
// export { Login };
