import { Outlet } from "react-router-dom";
import HeaderHomeComponent from "../components/header/headerHome";
import { ToastContainer } from "react-toastify";

export default function Root() {
  return (
    <>
      <header className="border-b-[1px] border-b-gray-300">
        <ToastContainer />

        <HeaderHomeComponent />
      </header>
      <Outlet />
    </>
  );
}
