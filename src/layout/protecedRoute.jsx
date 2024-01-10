import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LaunchPad from "./launchpad";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

export default function ProtectedRoute() {
  const isAuthenticated = useSelector(
    (state) => state.AuthSlice.isAuthenticated
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
      return null;
    }
  }, [isAuthenticated]);

  return <>
    <ToastContainer />
    <LaunchPad />
  </>;
}
