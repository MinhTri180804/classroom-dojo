import avatarClass from "../../../assets/avatarClass.png";
import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

ClassVertical.propTypes = {};

function ClassVertical(props) {
  const { classes } = props;
  const { classId, title } = classes;
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <>
      <div
        className={`flex justify-start items-center gap-3 p-2 w-full rounded-xl ${
          pathName == `/launchpad/classes/${classId}` ? "bg-gray-200" : ""
        }`}
      >
        <img
          src={avatarClass}
          alt=""
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <Link to={`/launchpad/classes/${classId}`} className="">
          <div className="name__class font-medium text-base w-full">
            {title}
          </div>

          <div className="text-gray-500 italic text-base">you</div>
        </Link>
      </div>
    </>
  );
}

export default ClassVertical;
