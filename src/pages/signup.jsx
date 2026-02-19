import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormSignup from "../components/Fragments/FormSignup";

const SignupPage = () => {
  return (
    <AuthLayouts title="signup">
      <FormSignup />
    </AuthLayouts>
  );
};

export default SignupPage;
