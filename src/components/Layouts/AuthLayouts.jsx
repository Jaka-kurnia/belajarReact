// import React, { children } from "react";
import React from "react";

const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xs ">
        <h1 className="text-blue-600 text-2xl font-bold mb-2 text-center">{title}</h1>
        <p className="font-medium text-slate-500 mb-8 text-center">Welcome back! Please enter your credentials to access your account.</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
