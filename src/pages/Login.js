import React from "react";
import { Link } from "react-router-dom";
import { AuthLayouts } from "../layouts";

function Login() {
  const formfill = [
    {
      label: "Email",
      id: "email-Input",
      type: "email",
      placeholder: "Insert an email...",
      hide: false,
    },
    {
      label: "Password",
      id: "password-Input",
      type: "password",
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
              textPrimary="Login"
              toPrimary="/chatlist"
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
