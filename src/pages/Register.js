import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { api } from "../config/api";
import { AuthLayouts } from "../layouts";

function Register() {
  const history = useHistory();
  const [form, setForm] = useState({
    phone: "",
    email: "",
    password: "",
  });

  const changeFormState = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitRegister = ({ setUserToken, setUserId }) => {
    axios
      .post(`${api.baseUrl}/auth/register`, form)
      .then((res) => {
        if (res.status === 201) {
          axios
            .post(`${api.baseUrl}/auth/login`, {
              email: form.email,
              password: form.password,
            })
            .then((res) => {
              if (res.status === 200) {
                localStorage.setItem("token", res.data.data.token);
                setUserToken(res.data.data.token);
                localStorage.setItem("userID", res.data.data.id);
                setUserId(res.data.data.id);
                history.push("/chat");
              }
            })
            .catch((err) => {
              Swal.fire({
                position: "top",
                icon: "error",
                title: `${err.response.data.message}`,
                showConfirmButton: false,
                toast: true,
                timer: 1500,
              });
            });
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
          history.push("/login");
        }
      });
  };

  const formfill = [
    {
      label: "Phone",
      id: "phone-Input",
      type: "text",
      name: "phone",
      placeholder: "Insert a phone...",
      hide: false,
    },
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
              onClickPrimary={(e) => submitRegister(e)}
              textPrimary="Register"
              textSecondary="Google"
              hr="Register with"
              title="Register"
              subTitle="Let’s create your account!"
              back="/login"
              isForLogin={false}
            />
          </div>
        </div>
      </main>
      {/* <!-- End Content --> */}
    </>
  );
}

export default Register;
