import React from "react";

const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="text-slate-700 text-sm block font-bold mb-2">
      {children}
    </label>
  );
};

export default Label;
