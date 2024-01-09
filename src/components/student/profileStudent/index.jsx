import avatarClass from "../../../assets/avatarClass.png";
import studentAvatar from "../../../assets/studentAvatar.webp";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { IconClose } from "../../navbar/icon";
import studentsApi from "../../../apis/studentsApi";

ProfileStudent.propTypes = {};

function ProfileStudent({ handleModelProfile, studentId }) {
  useEffect(() => {
    const fetchProfileStudent = async () => {
      const res = await studentsApi.getStudent(studentId);
      const data = await res;
      console.log(data);
    };

    fetchProfileStudent();
  }, []);

  return (
    <>
      <div className="w-3/4 bg-white rounded-xl relative">
        <div
          className="absolute top-2 right-3 cursor-pointer"
          onClick={handleModelProfile}
        >
          <IconClose />
        </div>

        <div className="grid grid-cols-5 py-9 px-3 gap-3">
          <div className=" col-span-2 w-full bg-red-50">
            <div className={`w-full rounded-xl bg-white shadow-xl`}>
              <div className="flex justify-center items-center gap-4 flex-col mb-8">
                <img
                  src={studentAvatar}
                  className="rounded-full object-cover w-[60px] h-[60px]"
                  alt=""
                />
                <div>Nguyễn Minh Tri</div>
              </div>

              <div className="px-3 py-6 gap-3 flex justify-center items-start shadow-sm hover:shadow-xl">
                <label htmlFor="" className="flex-1 text-left">
                  Username :{" "}
                </label>
                <div className="flex-1 text-left">nguyenminhtri1808t</div>
              </div>
              <div className="px-3 py-6 gap-3 flex justify-center items-start shadow-sm hover:shadow-xl">
                <label htmlFor="" className="flex-1 text-left">
                  Email :{" "}
                </label>
                <div className="flex-1 text-left">
                  nguyenminhtri1808t@gmail.com
                </div>
              </div>
              <div className="px-3 py-6 gap-3 flex justify-center items-start shadow-sm hover:shadow-xl">
                <label htmlFor="" className="flex-1 text-left">
                  Username :{" "}
                </label>
                <div className="flex-1 text-left">nguyenminhtri1808t</div>
              </div>
              <div className="px-3 py-6 gap-3 flex justify-center items-start shadow-sm hover:shadow-xl">
                <label htmlFor="" className="flex-1 text-left">
                  Phone :{" "}
                </label>
                <div className="flex-1 text-left">0398785643</div>
              </div>
              <div className="px-3 py-6 gap-3 flex justify-center items-start shadow-sm hover:shadow-xl">
                <label htmlFor="" className="flex-1 text-left">
                  Percentage of class participation :{" "}
                </label>
                <div className="flex-1 text-left">80%</div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full shadow-xl rounded-xl">
            <div className="w-full py-3 mb-3 flex justify-center items-center">
              <div className="text-xl font-bold uppercase">
                All class student join
              </div>
            </div>
            <div className="flex justify-between gap-3 px-3 items-center font-bold">
              <div className="flex-1 text-left">Class name</div>
              <div className="flex-1 text-left">Teacher</div>
              <div className="flex-1 text-center">Rate Attendance</div>
            </div>
            <div className="flex justify-between gap-3 px-3 items-center mt-5">
              <div className="flex-1 text-left flex justify-start items-center gap-2">
                <img src={avatarClass} alt="" className="w-[30px] h-[30px]s" />
                Class English
              </div>
              <div className="flex-1 text-left">Nguyen Minh Tri</div>
              <div className="flex-1 text-center text-green-500">80 %</div>
            </div>
            <div className="flex justify-between gap-3 px-3 items-center mt-5">
              <div className="flex-1 text-left flex justify-start items-center gap-2">
                <img src={avatarClass} alt="" className="w-[30px] h-[30px]s" />
                Class English
              </div>
              <div className="flex-1 text-left">Nguyen Minh Tri</div>
              <div className="flex-1 text-center text-green-500">80 %</div>
            </div>
            <div className="flex justify-between gap-3 px-3 items-center mt-5">
              <div className="flex-1 text-left flex justify-start items-center gap-2">
                <img src={avatarClass} alt="" className="w-[30px] h-[30px]s" />
                Class English
              </div>
              <div className="flex-1 text-left">Nguyen Minh Tri</div>
              <div className="flex-1 text-center text-green-500">80 %</div>
            </div>
            <div className="flex justify-between gap-3 px-3 items-center mt-5">
              <div className="flex-1 text-left flex justify-start items-center gap-2">
                <img src={avatarClass} alt="" className="w-[30px] h-[30px]s" />
                Class English
              </div>
              <div className="flex-1 text-left">Nguyen Minh Tri</div>
              <div className="flex-1 text-center text-green-500">80 %</div>
            </div>
            <div className="flex justify-between gap-3 px-3 items-center mt-5">
              <div className="flex-1 text-left flex justify-start items-center gap-2">
                <img src={avatarClass} alt="" className="w-[30px] h-[30px]s" />
                Class English
              </div>
              <div className="flex-1 text-left">Nguyen Minh Tri</div>
              <div className="flex-1 text-center text-green-500">80 %</div>
            </div>
            <div className="flex justify-between gap-3 px-3 items-center mt-5">
              <div className="flex-1 text-left flex justify-start items-center gap-2">
                <img src={avatarClass} alt="" className="w-[30px] h-[30px]s" />
                Class English
              </div>
              <div className="flex-1 text-left">Nguyen Minh Tri</div>
              <div className="flex-1 text-center text-green-500">80 %</div>
            </div>
            <div className="flex justify-between gap-3 px-3 items-center mt-5">
              <div className="flex-1 text-left flex justify-start items-center gap-2">
                <img src={avatarClass} alt="" className="w-[30px] h-[30px]s" />
                Class English
              </div>
              <div className="flex-1 text-left">Nguyen Minh Tri</div>
              <div className="flex-1 text-center text-green-500">80 %</div>
            </div>
            <div className="flex justify-between gap-3 px-3 items-center mt-5">
              <div className="flex-1 text-left flex justify-start items-center gap-2">
                <img src={avatarClass} alt="" className="w-[30px] h-[30px]s" />
                Class English
              </div>
              <div className="flex-1 text-left">Nguyen Minh Tri</div>
              <div className="flex-1 text-center text-red-500">20 %</div>
            </div>
            <div className="flex justify-between gap-3 px-3 items-center mt-5">
              <div className="flex-1 text-left flex justify-start items-center gap-2">
                <img src={avatarClass} alt="" className="w-[30px] h-[30px]s" />
                Class English
              </div>
              <div className="flex-1 text-left">Nguyen Minh Tri</div>
              <div className="flex-1 text-center text-green-500">80 %</div>
            </div>
            <div className="flex justify-between gap-3 px-3 items-center mt-5">
              <div className="flex-1 text-left flex justify-start items-center gap-2">
                <img src={avatarClass} alt="" className="w-[30px] h-[30px]s" />
                Class English
              </div>
              <div className="flex-1 text-left">Nguyen Minh Tri</div>
              <div className="flex-1 text-center text-green-500">60 %</div>
            </div>
            <div className="flex justify-between gap-3 px-3 items-center mt-5">
              <div className="flex-1 text-left flex justify-start items-center gap-2">
                <img src={avatarClass} alt="" className="w-[30px] h-[30px]s" />
                Class English
              </div>
              <div className="flex-1 text-left">Nguyen Minh Tri</div>
              <div className="flex-1 text-center text-red-500">40 %</div>
            </div>
            <div className="pb-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileStudent;
