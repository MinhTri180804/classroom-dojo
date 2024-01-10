import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { login } from "../../store/redux/features/authSlice";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "../../components/loading";

export default function LoginPage() {
  const dispatch = useDispatch();
  const { role } = useParams();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.AuthSlice.status);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (authStatus === "succeeded") {
      toast.success("Login success!");
      navigate("/launchpad/classes");
    } else if (authStatus === "failed") {
      toast.error("Login failed, please try again!");
    }else {
      return;
    }
  }, [authStatus, navigate]);

  return (
    <>
      <ToastContainer />
      {authStatus === "loading" ? (
        <Spinner />
      ) : (
        <div className="container mx-auto w-[500px] p-7 border-[1px] border-gray-300 translate-y-2/4 rounded-xl">
          <div className="text-blue-600 text-center text-3xl uppercase font-bold mb-6">
            Login {role}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="username" className="block mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                className={`p-2 w-full rounded-lg border-[1px] border-gray-300 outline-gray-400 ${
                  errors.username?.message
                    ? "border-red-500 outline-red-500"
                    : ""
                }`}
                {...register("username", {
                  required: "Username cannot be blank",
                })}
              />
              <p className="mt-2 text-red-500 text-sm italic"></p>
              {errors.username?.message?.toString()}
            </div>
            <div className="form-group mt-5">
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={`p-2 w-full rounded-lg border-[1px] border-gray-300 outline-gray-400 ${
                  errors.password?.message
                    ? "border-red-500 outline-red-500"
                    : ""
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
              Login
            </button>
          </form>
          <div className="w-[100px] mx-auto py-[1px] mt-5 mb-2 bg-gray-300"></div>
          <Link
            to={`/role/${role}/register`}
            className="text-center w-full block text-blue-500 underline"
          >
            Register now
          </Link>
        </div>
      )}
    </>
  );
}
