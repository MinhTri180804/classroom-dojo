import React from "react";
import PropTypes from "prop-types";
import { IconClose } from "../../navbar/icon";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createClass } from "../../../store/redux/features/classSlice";
import { toast } from "react-toastify";

ModelCreateClass.propTypes = {};

function ModelCreateClass({ handleModelCreateClass }) {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitForm = (data) => {
    const requestData = {
      title: data.nameClass,
    };

    dispatch(createClass(requestData))
      .then((res) => {
        const requestStatus = res.meta.requestStatus;

        if (requestStatus === "fulfilled") {
          handleModelCreateClass();
          toast.success("Create class success");
        } else {
          toast.error("Create class failed");
        }
      })
      .catch((error) => {
        toast.error(`Error creating class: ${error.message}`);
      });
  };

  return (
    <div className="w-1/4 rounded-xl bg-white relative">
      <div className="text-center text-2xl text-blue-500 pt-5 font-bold uppercase">
        create class
      </div>
      <div
        className="absolute top-2 right-3 cursor-pointer"
        onClick={handleModelCreateClass}
      >
        <IconClose />
      </div>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="container mx-auto px-10 py-3"
      >
        <label htmlFor="titleClass" className="text-base font-medium">
          Name Class
        </label>

        <input
          type="text"
          {...register("nameClass", {
            required: "Name class is not empty",
          })}
          className="w-full p-2 mt-2 rounded-xl outline-blue-500 border-gray-400 border"
        />

        <p className="text-red-500 text-sm italic mt-1">
          {errors.nameClass?.message?.toString()}
        </p>

        <button
          type="submit"
          className="w-full mt-3 py-2 rounded-xl text-white bg-blue-200 hover:bg-blue-500 duration-150 ease-linear"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default ModelCreateClass;
