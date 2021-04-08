import React from "react";

function FormLabel(props) {
  return (
    <>
      <label
        htmlFor={props.for}
        className="form-label text-secondary label-custom mb-1"
      >
        {props.label}
      </label>
    </>
  );
}

export default FormLabel;
