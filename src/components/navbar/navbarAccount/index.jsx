import { useDispatch } from "react-redux";
import { IconAccount, IconClose, IconDown } from "../icon";
import authSlice, { logout } from "../../../store/redux/features/authSlice";
import { useState } from "react";
import OverlayComponent from "../../overlay";
import ModelProfileAccount from "../../model/modelProfileAccount";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function NavBarAccount() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const [openMenuChildren, setOpenMenuChildren] = useState(false);
  const [modeProfile, setModelProfile] = useState(false);

  const handleOpenMenuChildren = () => {
    setOpenMenuChildren(!openMenuChildren);
  };

  const handleModelProfile = () => {
    setModelProfile(!modeProfile);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div
        onClick={handleOpenMenuChildren}
        className="relative flex justify-end items-center gap-1 cursor-pointer"
      >
        <IconAccount />
        <IconDown />

        <div
          className={`absolute translate-y-2  right-0 top-full w-[150px] border-[1px] border-gray-100 shadow-xl rounded-lg overflow-hidden ${
            openMenuChildren ? "block" : "hidden"
          }`}
        >
          <div
            onClick={handleModelProfile}
            className="w-full py-3  text-sm border-b-[1px] border-gray-300 text-center hover:bg-blue-200 duration-150 ease-linear"
          >
            Profile Setting
          </div>
          <div
            onClick={handleLogout}
            className="w-full py-3 text-sm text-center hover:bg-blue-200 duration-150 ease-linear"
          >
            Logout
          </div>
        </div>
      </div>

      {modeProfile ? (
        <OverlayComponent>
          <ModelProfileAccount handleModelProfile={handleModelProfile} />
        </OverlayComponent>
      ) : (
        ""
      )}
    </>
  );
}
