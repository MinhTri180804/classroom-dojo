import { useState } from "react";
import studentAvatar from "../../../assets/studentAvatar.webp";
import OverlayComponent from "../../overlay";

export default function StudentCard({ student: { fullName, attendance } }) {
  const [modelProfile, setModelProfile] = useState(false);
  const handleModelProfile = () => {
    setModelProfile(!modelProfile);
  };
  return (
    <>
      <div
        onClick={handleModelProfile}
        className="w-full h-[250px] rounded-xl bg-white shadow-xl hover:shadow-sm cursor-pointer flex justify-center items-center gap-2 flex-col"
      >
        <img
          src={studentAvatar}
          className="rounded-full object-cover w-[60px] h-[60px]"
          alt=""
        />
        <div>{fullName}</div>
        <div>{attendance} / 24</div>
      </div>

      {/* {modelProfile ? (
        <OverlayComponent>
          <div className="w-3/4 h-3/4 bg-white rounded-xl relative">
            <div
              className="absolute top-2 right-3 cursor-pointer"
              onClick={handleModelProfile}
            >
              <IconClose />
            </div>
          </div>
        </OverlayComponent>
      ) : (
        ""
      )} */}
    </>
  );
}
