import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IconGroup } from "../../icon";

ClassVerticalAll.propTypes = {};

function ClassVerticalAll(props) {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <>
      <NavLink
        to={"/launchpad/classes"}
        className={`flex justify-start items-center gap-3 p-2 w-full rounded-xl ${
            pathName == "/launchpad/classes" ? "bg-gray-300" : ""
          
        }`}
      >
        <div className="w-[40px] h-[40px] font-bold rounded-full flex bg-gray-300 justify-center items-center text-xl">
          <IconGroup />
        </div>
        <div className="font-medium text-base">All Classes</div>
      </NavLink>
    </>
  );
}

export default ClassVerticalAll;
