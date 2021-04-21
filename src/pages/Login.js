import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Login as login } from "../redux/actions/auth";
import Swal from "sweetalert2";
import { api } from "../config/api";
import { AuthLayouts } from "../layouts";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form, setForm] = useState({
    email: null,
    password: null,
  });
  const { data, error, loading } = useSelector((s) => s.Auth);

  const changeFormState = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    if (
      form.email === null ||
      form.email === "" ||
      form.password === null ||
      form.password === ""
    ) {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Input can't be empty ",
        showConfirmButton: false,
        toast: true,
        timer: 1500,
      });
    }
    dispatch(login(form));
    // axios
    //   .post(`${api.baseUrl}/auth/login`, form)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       localStorage.setItem("token", res.data.data.token);
    //       setUserToken(res.data.data.token);
    //       localStorage.setItem("userID", res.data.data.id);
    //       setUserId(res.data.data.id);
    //       history.push("/chat");
    //     }
    //   })
    //   .catch((err) => {
    //     Swal.fire({
    //       position: "top",
    //       icon: "error",
    //       title: `${err.response.data.message}`,
    //       showConfirmButton: false,
    //       toast: true,
    //       timer: 1500,
    //     });
    //   });
  };

  const formfill = [
    {
      label: "Email",
      id: "email-Input",
      type: "email",
      name: "email",
      placeholder: "Insert an email...",
      hide: false,
    },
    {
      label: "Password",
      id: "password-Input",
      type: "password",
      name: "password",
      placeholder: "Insert a password...",
      hide: true,
    },
  ];
  return (
    <>
      {/* <!-- Start Content --> */}
      <main className="container-fluid container-custom overflow-hidden">
        <div className="row justify-content-center align-content-center h-100">
          <div className="col-12 col-sm-5 col-md-3 card card-custom px-5">
            <AuthLayouts
              formfill={formfill}
              onChange={(e) => changeFormState(e)}
              textPrimary="Login"
              onClickPrimary={(e) => submitLogin(e)}
              textSecondary="Google"
              toSecondary="/google"
              hr="Login with"
              title="Login"
              subTitle="Hi, Welcome back!"
              isForLogin={true}
            />

            {/* <!-- Sign up --> */}
            <span className="mb-35 text-center">
              Don't have an account?
              <Link className="text-blue text-decoration-none" to="/register">
                Sign Up
              </Link>
            </span>
            {/* <!-- End Sign Up --> */}
          </div>
        </div>
      </main>
      {/* <!-- End Content --> */}
    </>
  );
}

export default Login;
