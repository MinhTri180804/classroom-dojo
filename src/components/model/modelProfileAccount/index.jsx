import { useForm } from "react-hook-form";
import { IconAccount, IconClose } from "../../navbar/icon";

export default function ModelProfileAccount({ handleModelProfile }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="w-[500px] pb-6 my-2 bg-white rounded-xl">
        <div className="relative py-2 border-b-[1px] border-gray-300 text-center font-medium text-xl">
          Account Setting
          <div
            onClick={handleModelProfile}
            className="absolute right-2 top-1/2 translate-y-[-50%] cursor-pointer"
          >
            <IconClose />
          </div>
        </div>
        <div className="container w-3/4 mx-auto mt-5">
          <div className="w-full flex justify-center items-center">
            <div className="w-[100px] h-[100px] rounded-full border-[1px] border-black flex justify-center items-center">
              <IconAccount />
            </div>
          </div>
          <div className="text-center mt-4">Upload Avatar</div>
          <form
            action=""
            onSubmit={handleSubmit(handleSubmitForm)}
            className="mt-7"
          >
            <div className="form-group">
              <label
                htmlFor="fullName"
                className="block mb-2 color-[#2c2a50] font-medium text-base"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="p-3 rounded-xl border-gray-300 border-2 w-full outline-blue-500"
                {...register("fullName", {
                  required: "Full Name not empty",
                  minLength: {
                    value: 8,
                    message: "Length full name less 8 charter...",
                  },
                })}
              />
              <p
                className={`${
                  errors.fullName?.message ? "block" : "hidden"
                } text-red-500 text-sm italic mt-1`}
              >
                {errors.fullName?.message?.toString()}
              </p>
            </div>

            <div className="form-group mt-3">
              <label
                htmlFor="email"
                className="block mb-2 color-[#2c2a50] font-medium text-base"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email..."
                className="p-3 rounded-xl border-gray-300 border-2 w-full outline-blue-500"
                {...register("email", {
                  required: "Email is not empty...",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "Email is not validate...",
                  },
                })}
              />
              <p
                className={`${
                  errors.email?.message ? "block" : "hidden"
                } text-red-500 text-sm mt-2 italic`}
              >
                {errors.email?.message?.toString()}
              </p>
            </div>
            <div className="w-[150px] py-3 bg-gray-300 rounded-xl text-center text-blue-800 font-medium mt-5">
              Update password
            </div>
            <button
              type="submit"
              className="w-full py-5 bg-gray-200 rounded-xl text-center text-gray-500 font-bold mt-5 hover:bg-blue-700 hover:text-white duration-200 ease-linear"
            >
              Save Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
