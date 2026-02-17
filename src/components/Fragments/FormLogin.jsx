import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="Email" type="email" name="email" placeholder="Masukan email anda" />
      <InputForm label="password" type="password" name="password" placeholder="Masukan password" />
      <Button variant="bg-blue-600 hover:bg-blue-500 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
