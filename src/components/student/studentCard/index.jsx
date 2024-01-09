import { useState } from "react";
import studentAvatar from "../../../assets/studentAvatar.webp";
import OverlayComponent from "../../overlay";
import { IconClose } from "../../navbar/icon";
import ProfileStudent from "../profileStudent";

export default function StudentCard({
  student: { fullName, attendance, studentId },
  sessionClass,
}) {
  const [modelProfile, setModelProfile] = useState(false);
  const checkFail = sessionClass - attendance > 3 ? true : false;
  const handleModelProfile = () => {
    setModelProfile(!modelProfile);
  };
  return (
    <>
      <div
        onClick={handleModelProfile}
        className={`w-full h-[250px] rounded-xl ${
          checkFail ? "bg-red-200" : ""
        } bg-white shadow-xl hover:shadow-sm cursor-pointer flex justify-center items-center gap-2 flex-col`}
      >
        <img
          src={studentAvatar}
          className="rounded-full object-cover w-[60px] h-[60px]"
          alt=""
        />
        <div>{fullName}</div>
        <div>
          {attendance} / {sessionClass}
        </div>
      </div>

      {modelProfile ? (
        <OverlayComponent>
          <ProfileStudent handleModelProfile={handleModelProfile} studentId={studentId}/>
        </OverlayComponent>
      ) : (
        ""
      )}
    </>
  );
}
