import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Fullname" type="text" name="fullname" placeholder="Input Fullname" />
      <InputForm label="Email" type="email" name="email" placeholder="Enter your email" />
      <InputForm label="password" type="password" name="password" placeholder="Enter your password" />
      <InputForm label="Confirm password" type="password" name="confirmpassword" placeholder="Enter yourConfirm  password" />
      <Button variant="bg-blue-600 hover:bg-blue-500 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
