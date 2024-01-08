import { useState } from "react";
import { IconPlus } from "../../icon";
import ModelJoinClass from "../../../model/modelJoinClass";
import OverlayComponent from "../../../overlay";

export default function ClassCardJoin() {
  const [isShowModal, setIsShowModal] = useState(false);
  const handleModelCreateClass = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <>
      <div
        className="w-full rounded-xl shadow-xl h-[200px] bg-white hover:shadow-sm cursor-pointer duration-150 ease-linear flex justify-center items-center flex-col px-2 text-center"
        onClick={handleModelCreateClass}
      >
        <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-blue-500 text-white">
          <IconPlus />
        </div>
        <div className="class_name text-base font-medium text-black mt-2">
          Join Class
        </div>
      </div>

      {isShowModal ? (
        <OverlayComponent>
          <ModelJoinClass handleModelCreateClass={handleModelCreateClass} />
        </OverlayComponent>
      ) : (
        ""
      )}
    </>
  );
}
