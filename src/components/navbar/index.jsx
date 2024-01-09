import avatarClass from "../../assets/avatarClass.png";
import React from "react";
import PropTypes from "prop-types";
import { IconNotification, IconQuestion } from "./icon";
import NavBarAccount from "./navbarAccount";

NavBarComponent.propTypes = {
  titleNavbar: PropTypes.string,
};

NavBarComponent.defaultProps = {
  titleNavbar: "Class Room",
};

function NavBarComponent(props) {
  return (
    <section className="pt-5 px-5 border-gray-300 border-b-2 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div className="flex justify-start items-center gap-3">
          <img
            src={avatarClass}
            className="w-[40px] h-[40px] rounded-full object-cover"
            alt=""
          />
          <h5 className="font-bold text-2xl text-black capitalize">
            {props.titleNavbar}
          </h5>
          <div className="font-medium text-xl">
            [ <span className="text-green-500">{props.codeJoin}</span> ]
          </div>
        </div>

        <div className="flex justify-center items-center gap-3">
          <IconNotification />
          <IconQuestion />
          <NavBarAccount />
        </div>
      </div>
    </section>
  );
}

export default NavBarComponent;
