import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="text-slate-600 mt-5 text-center text-sm font-semibold">
        Dont Have Account
        <Link to="/register" className="text-blue-600 pl-1">
          Register
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
