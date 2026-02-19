// import React, { children } from "react";
import React from "react";
import { Link } from "react-router-dom";
const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xs border border-gray-50 shadow-sm">
        <h1 className="text-blue-600 text-2xl font-bold mb-2 text-center">{title}</h1>
        <p className="font-medium text-slate-500 mb-8 text-center">Welcome back! Please enter your credentials to access your account.</p>
        {children}
        <Navigation type={type} />

        {/* <p className="text-slate-600 mt-5 text-center text-sm font-semibold">
          {type === "login" ? "Dont Have Account?" : "Alredy Have An Account"}

          {type === "login" && (
            <Link to="/register" className="text-blue-600 pl-1">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="text-blue-600 pl-1">
              Login
            </Link>
          )}
        </p> */}
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-slate-600 mt-5 text-center text-sm font-semibold">
        Dont Have Account
        <Link to="/register" className="text-blue-600 pl-1">
          Register
        </Link>
      </p>
    );
  } else {
     return(
       <p className="text-slate-600 mt-5 text-center text-sm font-semibold">
         Have Account
        <Link to="/login" className="text-blue-600 pl-1">
          Login
        </Link>
      </p>
     )
  }
};

export default AuthLayouts;
