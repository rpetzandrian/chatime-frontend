import React from "react";
import { AuthLayouts } from "../layouts";

function Register() {
  const formfill = [
    {
      label: "Phone",
      id: "phone-Input",
      type: "text",
      placeholder: "Insert a phone...",
      hide: false,
    },
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
