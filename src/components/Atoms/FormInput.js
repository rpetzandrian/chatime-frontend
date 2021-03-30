import React from "react";

function FormInput(props) {
  return (
    <>
      <input
        id={props.id}
        type={props.type}
        className="form-control form-custom"
        placeholder={props.placeholder}
      />
    </>
  );
}

export default FormInput;
