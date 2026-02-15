import React, { Children } from "react";

function Button(props) {
  const { children = '.....', variant = 'bg-black' } = props;
  return (
    <button type="submit" className={`h-10 px-6 font-semibold rounded-lg ${variant} text-white`}>
      {children}
    </button>
  );
}

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex gap-4">
        <Button variant="bg-red-700 hover:bg-red-600">Login</Button>
        <Button variant="bg-blue-700">Register</Button>
        <Button></Button>
      </div>
    </div>
  );
};

export default App;
