import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="text-slate-600 mt-5 text-center text-sm font-semibold">
        An Have Account
        <Link to="/login" className="text-blue-600 pl-1">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
