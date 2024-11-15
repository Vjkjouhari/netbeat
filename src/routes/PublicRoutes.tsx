import { Navigate } from "react-router-dom";
import { SignIn } from "../components/auth/SignIn";
import SignUp from "../components/auth/Signup";
import PasswordChange from "../components/auth/PasswordChange";
import NonLoginLayout from "../components/layout/NonLoginLayout";
import { ForgetPassword } from "../components/auth/ForgetPassword";

export default function PublicRoutes() {
  console.log(import.meta.env.VITE_IS_LOGGED_IN);

  const isLoggedIn = import.meta.env.VITE_IS_LOGGED_IN === 1 ? true : false;
  // const isLoggedIn = import.meta.env.VITE_IS_LOGGED_IN === 1 ? false : true;

  // const token = localStorage.getItem("token");
  // const isLoggedIn = 1 ? true : false;

  console.log(isLoggedIn);
  return {
    path: "/auth/",
    element: isLoggedIn ? <Navigate to="/" /> : <NonLoginLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "password-change",
        element: <PasswordChange />,
      },
      {
        path: "forgot-password",
        element: <ForgetPassword />,
      },
    ],
  };
}
