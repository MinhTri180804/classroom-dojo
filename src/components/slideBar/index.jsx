import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ClassVertical from "../../components/class/classVertical";
import ClassVerticalAll from "../../components/class/classVertical/classVerticalAll";
import ClassVerticalCreate from "../../components/class/classVertical/classVerticalCreate";
import logoBrand from "../../assets/logo.jpg";
import { formatRole } from "../../utils/format";
import { IconCalender, IconImage, IconMessage, IconPerson } from "./icon";
import ClassVerticalJoin from "../class/classCard/classVerticalJoin";

SlideBarComponent.propTypes = {};

function SlideBarComponent(props) {
  const fullName = useSelector((state) => state.AuthSlice.user.fullName);
  const email = useSelector((state) => state.AuthSlice.user.email);
  const classes = useSelector((state) => state.ClassSlice.classes);
  const loading = useSelector((state) => state.ClassSlice.loading);
  const role = useSelector((state) => state.AuthSlice.user.role);
  const roleFormat = formatRole(role);

  return (
    <div className="p-3 border-r-2 h-full min-h-screen border-gray-300 bg-white overflow-scroll no-scrollbar">
      <div className="">
        <img
          src={logoBrand}
          className="w-[50px] h-[50px] rounded-full object-cover"
          alt=""
        />
        <div className="text-2xl font-extrabold mt-2 text-[#2c2a50]">
          {fullName}
        </div>
        <div className=" text-base font-medium text-[#8689b8] italic">
          {email}
        </div>
        <div
          className={`text-xl font-bold ${
            roleFormat == "TEACHER" ? "text-blue-700" : "text-black"
          } py-2`}
        >
          {roleFormat}
        </div>
        <div className=""></div>
        <div className="flex items-start justify-start flex-col gap-5 my-5">
          <Link
            to={`/launchpad/school-story`}
            className="flex justify-start items-center gap-2 text-[#2c2a50] text-base px-2 font-[600]"
          >
            <IconImage />
            School Story
          </Link>
          <Link
            to={`/launchpad/school-calender`}
            className="flex justify-start items-center gap-2 text-[#2c2a50] text-base px-2 font-[600]"
          >
            <IconCalender />
            School Calender
          </Link>
          <Link
            to={`/launchpad/staff-messaging`}
            className="flex justify-start items-center gap-2 text-[#2c2a50] text-base px-2 font-[600]"
          >
            <IconMessage />
            Staff Messaging
          </Link>
          <Link
            to={`/launchpad/school-directory`}
            className="flex justify-start items-center gap-2 text-[#2c2a50] text-base px-2 font-[600]"
          >
            <IconPerson />
            School Directory
          </Link>
        </div>

        <div className="flex flex-col justify-start items-start gap-1">
          <div className="font-bold text-gray-600 font-xl text-left mb-2">
            My Classes
          </div>
          {roleFormat == "TEACHER" ? <ClassVerticalCreate /> : <ClassVerticalJoin />}
          <ClassVerticalAll />
          {classes.map((item, index) => {
            return <ClassVertical classes={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SlideBarComponent;
