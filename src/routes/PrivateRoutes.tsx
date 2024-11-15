import { Navigate } from "react-router-dom";
import Profile from "../components/auth/Profile";
import Layout from "../components/layout/Layout";
import { LandingLayout } from "../components/chat/LandingLayout";

export default function PrivateRoutes() {
  console.log(import.meta.env.VITE_IS_LOGGED_IN);
  const isLoggedIn = import.meta.env.VITE_IS_LOGGED_IN === 1 ? true : false;
  // const token = localStorage.getItem("token");
  // const isLoggedIn = token ? true : false;
  return {
    path: "/",
    element: isLoggedIn ? <Layout /> : <Navigate to="/auth/sign-in" />,
    children: [
      {
        path: "",
        element: <LandingLayout />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  };
}
