import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormSignin from "../components/Fragments/FormSignin";

const SigninPage = () => {
  return (
    <AuthLayouts title ="Signin Page">
      <FormSignin />
    </AuthLayouts>
  );
};

export default SigninPage;
