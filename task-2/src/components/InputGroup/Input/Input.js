import React from "react";
import { MDBInput } from "mdbreact";

const InputPage = ({ type, name, label, handleInputValue }) => {
  return (
    <MDBInput type={type} name={name} label={label} onChange={handleInputValue} required/>
  );
}

export default InputPage;