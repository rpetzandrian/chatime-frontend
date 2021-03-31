import React from "react";
import { Link } from "react-router-dom";
import { AuthForm, AuthHeader } from "../components";
import { AuthButtonPrimary, AuthButtonSecondary } from "../components/Atoms";

function AuthLayouts(props) {
  return (
    <>
      {/* <!-- Start Form Header --> */}
      <AuthHeader title={props.title} back={props.back} />
      {/* <!-- End Form Header --> */}
      <div className="form-content mx-auto">
        <p className="form-text mb-35">{props.subTitle}</p>

        {/* <!-- Start Form --> */}
        <form>
          {props.formfill.map((e) => {
            return (
              <AuthForm
                label={e.label}
                id={e.id}
                type={e.type}
                placeholder={e.placeholder}
                hide={e.hide}
              />
            );
          })}
          {/* <!-- Forgot Password --> */}
          {props.isForLogin && (
            <Link
              className="text-blue float-end text-decoration-none mb-35"
              to="/forgot"
            >
              Forgot Pasword ?
            </Link>
          )}

          {/* <!-- End Forgot Password --> */}
        </form>
        {/* <!-- End Form --> */}

        {/* <!-- Button --> */}
        <AuthButtonPrimary text={props.textPrimary} to={props.toPrimary} />

        {props.hr && (
          <div className="hr-custom text-secondary d-flex justify-content-between align-content-center">
            <span></span>
            <p className="mb-35 text-center">{props.hr}</p>
            <span></span>
          </div>
        )}

        {props.textSecondary && (
          <AuthButtonSecondary
            text={props.textSecondary}
            to={props.toSecondary}
          />
        )}

        {/* <!-- End Button --> */}
      </div>
    </>
  );
}

export default AuthLayouts;
