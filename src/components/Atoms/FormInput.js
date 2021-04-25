import React from "react";

function FormInput(props) {
  return (
    <>
      <input
        id={props.id}
        data-testid={props.id}
        type={props.type}
        name={props.name}
        className="form-control form-custom"
        placeholder={props.placeholder}
        required
        onChange={(e) => props.onChange(e)}
      />
    </>
  );
}

export default FormInput;
