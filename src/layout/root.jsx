import logoStudent from "../assets/role-student.webp"
import logoTeacher from "../assets/role-teacher.webp"
import { Outlet } from "react-router-dom";
import HeaderHomeComponent from "../components/header/headerHome";

export default function Root() {
  return (
    <>
      <header className="border-b-[1px] border-b-gray-300">
        <HeaderHomeComponent />
      </header>
      <Outlet />
    </>
  );
}
