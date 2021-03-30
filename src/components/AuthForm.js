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
        placeholder={props.placeholder}
      />
      {props.hide && (
        <img
          id="hidden-password"
          class="float-end"
          src={hiddenPassword}
          alt="hidden"
        />
      )}
    </div>
  );
}

export default AuthForm;
