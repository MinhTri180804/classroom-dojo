import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import authApi from "../../apis/authApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const { role } = useParams();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const requestData = {
      fullName: data.fullName,
      username: data.username,
      phoneNumber: data.phone,
      email: data.email,
      password: data.password,
    };
    authApi
      .register(requestData, role)
      .then(() => toast.success("Register successfully"))
      .then(() => navigate("/role/" + role + "/login"))
  };

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto w-[500px] p-7 border-[1px] border-gray-300 rounded-xl mt-32">
        <div className="text-blue-600 text-center text-3xl uppercase font-bold mb-6">
          Register {role}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="fullName" className="block mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className={`p-2 w-full rounded-lg border-[1px] border-gray-300 outline-gray-400 ${
                errors.fullName?.message ? "border-red-500 outline-red-500" : ""
              }`}
              {...register("fullName", {
                required: "Full name cannot be blank",
              })}
            />
            <p className="mt-2 text-red-500 text-sm italic">
              {errors.fullName?.message?.toString()}
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="usernames" className="block mb-2">
              Username
            </label>
            <input
              type="text"
              id="fullName"
              className={`p-2 w-full rounded-lg border-[1px] border-gray-300 outline-gray-400 ${
                errors.username?.message ? "border-red-500 outline-red-500" : ""
              }`}
              {...register("username", {
                required: "Username cannot be blank",
              })}
            />
            <p className="mt-2 text-red-500 text-sm italic">
              {errors.username?.message?.toString()}
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="mb-2 block">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              className={`p-2 w-full rounded-lg border-[1px] border-gray-300 outline-gray-400 ${
                errors.phone?.message ? "border-red-500 outline-red-500" : ""
              }`}
              {...register("phone", {
                required: "Phone cannot be blank",
                pattern: {
                  value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                  message: "Phone is not valid",
                },
              })}
            />
            <p className="mt-2 text-red-500 text-sm italic">
              {errors.phone?.message?.toString()}
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`p-2 w-full rounded-lg border-[1px] border-gray-300 outline-gray-400 ${
                errors.email?.message ? "border-red-500 outline-red-500" : ""
              }`}
              {...register("email", {
                required: "Email cannot be blank",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email is not valid",
                },
              })}
            />
            <p className="mt-2 text-red-500 text-sm italic">
              {errors.email?.message?.toString()}
            </p>
          </div>

          <div className="form-group mt-5">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`p-2 w-full rounded-lg border-[1px] border-gray-300 outline-gray-400 ${
                errors.password?.message ? "border-red-500 outline-red-500" : ""
              }`}
              {...register("password", {
                required: "Password cannot be blank",
              })}
            />
            <p className="mt-2 text-red-500 text-sm italic">
              {errors.password?.message?.toString()}
            </p>
          </div>

          <button
            type="submit"
            className="mt-6 w-full text-center py-3 border-[1px] border-black text-black uppercase hover:bg-blue-600 hover:border-blue-600 hover:text-white duration-150 ease-linear"
          >
            Register
          </button>
        </form>
        <div className="w-[100px] mx-auto py-[1px] mt-5 mb-2 bg-gray-300"></div>
        <Link
          to={`/role/${role}/login`}
          className="text-center w-full block text-blue-500 underline"
        >
          Login now
        </Link>
      </div>
    </>
  );
}
