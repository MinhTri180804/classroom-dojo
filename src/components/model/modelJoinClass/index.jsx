import { useForm } from "react-hook-form";
import { IconClose } from "../../navbar/icon";
import { useDispatch } from "react-redux";
import { joinClass } from "../../../store/redux/features/classSlice";
import { toast } from "react-toastify";

export default function ModelJoinClass({ handleModelJoinClass }) {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitForm = (data) => {
    const requestData = {
      code: data.codeJoin,
    };

    dispatch(joinClass(requestData)).then((res) => {
      const requestStatus = res.meta.requestStatus;

      if (requestStatus === "fulfilled") {
        handleModelJoinClass();
        toast.success("Join class success");
      } else {
        toast.error("Join class no exits");
      }
    });
  };

  return (
    <div className="w-1/4 rounded-xl bg-white relative">
      <div className="text-center text-2xl text-blue-500 pt-5 font-bold uppercase">
        create class
      </div>
      <div
        className="absolute top-2 right-3 cursor-pointer"
        onClick={() => handleModelJoinClass()}
      >
        <IconClose />
      </div>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="container mx-auto px-10 py-3"
      >
        <label htmlFor="codeJoin" className="text-base font-medium">
          Code Join Class
        </label>

        <input
          type="text"
          {...register("codeJoin", {
            required: "codeJoin class is not empty",
          })}
          className="w-full p-2 mt-2 rounded-xl outline-blue-500 border-gray-400 border"
        />

        <p className="text-red-500 text-sm italic mt-1">
          {errors.codeJoin?.message?.toString()}
        </p>

        <button
          type="submit"
          className="w-full mt-3 py-2 rounded-xl text-white bg-blue-200 hover:bg-blue-500 duration-150 ease-linear"
        >
          Join
        </button>
      </form>
    </div>
  );
}
