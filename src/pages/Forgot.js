import React from "react";
import { AuthLayouts } from "../layouts";

function Forgot() {
  const formfill = [
    {
      label: "Email",
      id: "email-Input",
      type: "email",
      placeholder: "Insert an email...",
      hide: false,
    },
  ];

  return (
    <div>
      {/* <!-- Start Content --> */}
      <main className="container-fluid container-custom overflow-hidden">
        <div className="row justify-content-center align-content-center h-100">
          <div className="col-12 col-sm-5 col-md-3 card card-custom px-5">
            <AuthLayouts
              formfill={formfill}
              textPrimary="Send"
              title="Forgot Password"
              subTitle="You’ll get messages soon on your e-mail"
              back="/login"
              isForLogin={false}
            />
          </div>
        </div>
      </main>
      {/* <!-- End Content --> */}
    </div>
  );
}

export default Forgot;
