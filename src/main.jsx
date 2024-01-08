import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import HomePage from "./page/authentication/home.jsx";
import LoginPage from "./page/authentication/login.jsx";
import NotFound from "./page/authentication/notfound.jsx";
import OptionPage from "./page/authentication/option.jsx";
import RegisterPage from "./page/authentication/register.jsx";
import ClassesPage from "./page/launchpad/home.jsx";
import LaunchPad from "./layout/launchpad.jsx";
import Root from "./layout/root.jsx";
import { Provider } from "react-redux";
import { store } from "./store/redux/store.jsx";
import ProtectedRoute from "./layout/protecedRoute.jsx";
import ClassRoom from "./page/launchpad/class.jsx";
import AttendancePage from "./page/launchpad/attendance.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/role/:role",
        element: <OptionPage />,
      },
      {
        path: "/role/:role/login",
        element: <LoginPage />,
      },
      {
        path: "/role/:role/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/launchpad",
    element: <ProtectedRoute />,
    children: [
      {
        path: "classes",
        element: <ClassesPage />,
      },
      {
        path: "classes/:id",
        element: <ClassRoom />,
      },
      {
        path: "classes/:id/attendance",
        element: <AttendancePage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
