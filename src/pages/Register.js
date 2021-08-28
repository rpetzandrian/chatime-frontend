import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Register as register } from "../redux/actions/auth";
import { AuthLayouts } from "../layouts";
import { Loading } from "../components";
// import { addForm } from "../redux/actions/exp";

function Register() {
  const { data: auth, error, loading } = useSelector((s) => s.Auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [form, setForm] = useState({
    phone: "",
    email: "",
    password: "",
  });

  const changeFormState = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitRegister = () => {
    // dispatch(addForm(form));
    dispatch(register(form));
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
      {loading && <Loading />}

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
