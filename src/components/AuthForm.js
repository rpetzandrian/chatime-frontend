import React from "react";
import { hiddenPassword } from "../assets/images";
import { FormLabel, FormInput } from "./Atoms";

function AuthForm(props) {
  return (
    <div className="mb-35">
      <FormLabel label={props.label} for={props.id} />
      <FormInput
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {props.hide && (
        <img
          id="hidden-password"
          data-testid="hidden-password"
          className="float-end"
          src={hiddenPassword}
          alt="hidden"
        />
      )}
    </div>
  );
}

export default AuthForm;
