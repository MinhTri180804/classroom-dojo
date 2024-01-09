import { useState } from "react";
import avatarStudent from "../../../assets/studentAvatar.webp";

export default function StudentVertical({
  student,
  onAttendance,
  sessionClass,
}) {
  const [attendance, setAttendance] = useState(false);

  const handleSelected = () => {
    onAttendance(!attendance);
    setAttendance(!attendance);
  };

  const checkFail = sessionClass - student.attendance > 3 ? true : false;

  return (
    <>
      <div
        className={`flex justify-between items-center gap-4 w-full ${
          checkFail ? "bg-red-200" : ""
        } py-2 rounded px-2`}
      >
        <div className=" flex justify-start items-center gap-8 flex-2 w-full">
          <img
            src={avatarStudent}
            className="w-[50px] h-[50px] rounded-full object-cover"
            alt=""
          />
          <div className="text-base font-medium text-black">
            {student.fullName}
          </div>
        </div>

        <div className="flex justify-center items-center w-[100px] flex-1 gap-2">
          <div className="font-medium text-gray-500 text-lg">
            {student.attendance}
          </div>
          <div className="font-medium text-gray-500 text-lg">/</div>
          <div className="font-bold text-black text-lg">{sessionClass}</div>
        </div>

        <div className="flex justify-end items-center flex-2 w-full">
          <div className="flex justify-end items-center gap-5">
            {checkFail ? (
              <><div className="text-red-800 font-bold">Student fail attendance</div></>
            ) : (
              <>
                <div
                  onClick={() => handleSelected()}
                  className={`text-sm px-3 py-2 ${
                    attendance
                      ? "border-gray-500 border-2 text-black"
                      : "border-red-500 border-2 bg-red-500 text-white"
                  }  rounded cursor-pointer`}
                >
                  Absent
                </div>
                <div
                  onClick={() => handleSelected()}
                  className={`text-base font-medium px-3 py-2  rounded cursor-pointer ${
                    attendance
                      ? "border-blue-500 border-2 bg-blue-500 text-white"
                      : "border-gray-500 border-2 text-black "
                  } `}
                >
                  Present
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
