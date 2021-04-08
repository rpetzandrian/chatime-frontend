import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { api } from "../config/api";
import { AuthLayouts } from "../layouts";

function Login() {
  const history = useHistory();
  const [form, setForm] = useState({
    email: null,
    password: null,
  });

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
      alert("emtpy");
    }
    axios
      .post(`${api.baseUrl}/auth/login`, form)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("userID", res.data.data.id);
          history.push("/chat");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   console.log(process.env.REACT_APP_API_BASE_URL);
  // }, []);

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
