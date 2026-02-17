import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

const router = createBrowserRouter([
  // Index Route
  {
    path: "/",
    element: <div>Hello World King</div>,
  },
  // Login Route
  {
    path: "/login",
    element: <LoginPage />,
  },
  // Register Route
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
