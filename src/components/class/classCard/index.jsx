import avatarClass from "../../../assets/avatarClass.png";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { IconClose, IconQuestion } from "../../../components/navbar/icon";
import { useDispatch, useSelector } from "react-redux";
import OverlayComponent from "../../../components/overlay";
import {
  deleteClass,
  modifiedStatusClass,
} from "../../../store/redux/features/classSlice";
import { toast } from "react-toastify";

ClassCard.propTypes = {
  classItem: PropTypes.object.isRequired,
};

function ClassCard({
  classItem: { title, studentCount, classId, status, code },
}) {
  const dispatch = useDispatch();
  const fullName = useSelector((state) => state.AuthSlice.user.fullName);
  const role = useSelector((state) => state.AuthSlice.user.role);
  const [profileClass, setProfileClass] = useState(false);
  const navigation = useNavigate();

  const handleProfileClass = () => {
    setProfileClass(!profileClass);
  };

  const statusModified = status == "active" ? "inactive" : "active";

  const handleModifiedStatus = async (statusModified) => {
    const dataRequest = {
      status: statusModified,
    };

    try {
      const result = await dispatch(modifiedStatusClass(classId, dataRequest));
      const statusRequest = await result.meta.requestStatus;
      if (statusRequest === "fulfilled") {
        handleProfileClass();
        toast.success(`Modified status class ${title} success`);
      } else if (statusRequest === "rejected") {
        toast.error(`Modified status class ${title} failed`);
      }
    } catch (error) {
      console.error("Error modifying status:", error);
      toast.error(`An error occurred while modifying status for ${title}`);
    }
  };

  const handleDeleteClass = async () => {
    const result = await dispatch(deleteClass(classId));
    const statusRequest = await result.meta.requestStatus;
    if (statusRequest === "fulfilled") {
      handleProfileClass();
      toast.success(`Delete class ${title} success`);
    } else if (statusRequest === "rejected") {
      toast.error(`Delete class ${title} failed`);
    }
  };

  return (
    <div className="relative col-span-1 w-full rounded-xl shadow-xl h-[200px] bg-white hover:shadow-sm cursor-pointer duration-150 ease-linear flex justify-center items-center flex-col px-2 text-center">
      <img
        src={avatarClass}
        alt=""
        className="object-cover rounded-full w-[70px] h-[70px]"
      />
      <div className="class_name text-base font-medium text-black mt-2">
        {title}
        <div className="text-sm italic text-gray-400 text-center">
          {" "}
          ( {studentCount} Students ){" "}
        </div>
      </div>

      <div className={`absolute top-2 right-2`}>
        <span class="relative flex h-3 w-3">
          <span
            class={`animate-ping absolute inline-flex h-full w-full rounded-full ${
              status == "active" ? "bg-green-500" : "bg-red-500"
            } opacity-75`}
          ></span>
          <span
            class={`relative inline-flex rounded-full h-3 w-3 ${
              status == "active" ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
        </span>
      </div>

      <div className="absolute top-2 left-2" onClick={handleProfileClass}>
        <IconQuestion />
      </div>
      {profileClass ? (
        <OverlayComponent>
          <div className=" relative w-1/4 px-4 py-4 bg-white rounded-xl">
            <div
              className="absolute top-2 right-2"
              onClick={handleProfileClass}
            >
              <IconClose />
            </div>
            <div className="py-3 font-bold text-2xl text-blue-500 text-center">
              Class Profile
            </div>
            <div className="flex justify-center items-center my-5">
              <div className="w-[200px] shadow-xl">
                <div className="flex flex-col items-center justify-center gap-3 px-9 py-7">
                  <img
                    src={avatarClass}
                    alt=""
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <div className="text-base font-medium text-black">
                    {title}
                  </div>
                  <div className="text-sm italic text-gray-400 text-center">
                    {" "}
                    ( {studentCount} Students ){" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="px-3 py-2 bg-blue-500 rounded text-white mx-auto">
                Code Join : {code}
              </div>
            </div>
            <div className="flex justify-center items-center gap-5 mt-7 pb-2">
              <Link
                to={`${classId}`}
                className="w-[100px] py-2 bg-green-300 rounded text-white hover:bg-green-500 duration-200 ease-linear"
              >
                Join
              </Link>
              {role === "TEACHER" ? (
                <>
                  <button
                    onClick={() => handleDeleteClass()}
                    className="w-[100px] py-2 bg-yellow-300 rounded text-white hover:bg-yellow-500 duration-200 ease-linear"
                  >
                    Delete
                  </button>
                  <div
                    onClick={() => handleModifiedStatus(statusModified)}
                    className="w-[100px] py-2 bg-red-300 rounded text-white hover:bg-red-500 duration-200 ease-linear"
                  >
                    End of class
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </OverlayComponent>
      ) : (
        ""
      )}
    </div>
  );
}

export default ClassCard;
