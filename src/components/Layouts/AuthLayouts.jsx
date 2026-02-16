// import React, { children } from "react";
import React from "react";

const AuthLayouts = (props) => {
    const {children , title} = props;
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-blue-600 text-2xl font-bold mb-2">{title}</h1>
      <p className="font-medium text-slate-500 mb-8">Welcome back! Please enter your credentials to access your account.</p>
      {children}
    </div>
  );
};

export default AuthLayouts;
