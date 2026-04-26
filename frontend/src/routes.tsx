import { createBrowserRouter } from "react-router";

import { AppLayout } from "./pages/_layout/app";
import { AuthLayout } from "./pages/_layout/auth";
import { HomeLayout } from "./pages/_layout/home";
import { Dashboard } from "./pages/app/dashboard";
import { Home } from "./pages/home/home";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
]);
