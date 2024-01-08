import { Link, Outlet, useParams } from "react-router-dom";

export default function OptionPage() {
  const { role } = useParams();
  console.log(role);
  return (
    <>
      <div className="container mx-auto w-[500px] p-7 border-[1px] border-gray-300 translate-y-2/4 rounded-xl">
        <div className="text-center my-5 italic">
          Please log in or create a{" "}
          {<span className="font-bold capitalize">{role}</span>} account
        </div>
        <div className="flex justify-center items-center gap-6 flex-col text-center">
          <Link
            to={`/role/${role}/login`}
            className="w-full py-3 border-[1px] border-gray-300 rounded-xl hover:border-blue-500 hover:bg-blue-500 hover:text-white duration-150 ease-linear"
          >
            Login
          </Link>

          <div className="w-[50px] py-[1px] bg-gray-300"></div>

          <Link
            to={`/role/${role}/register`}
            className="w-full py-3 border-[1px] border-gray-300 rounded-xl hover:border-blue-500 hover:bg-blue-500 hover:text-white duration-150 ease-linear"
          >
            Register
          </Link>
        </div>

      </div>
    </>
  );
}
