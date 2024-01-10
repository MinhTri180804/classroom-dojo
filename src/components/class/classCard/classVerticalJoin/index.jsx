import { useState } from "react";
import ModelJoinClass from "../../../model/modelJoinClass";
import OverlayComponent from "../../../overlay";
import { IconPlus } from "../../icon";

export default function ClassVerticalJoin() {
  const [modelJoinClass, setModelJoinClass] = useState(false);
  const handleModelJoinClass = () => {
    setModelJoinClass(!modelJoinClass);
  };
  return (
    <>
      <div
        onClick={handleModelJoinClass}
        className="flex justify-start items-center gap-3 p-2 cursor-pointer"
      >
        <div className="w-[40px] h-[40px] text-white font-bold rounded-full flex justify-center items-center text-xl bg-blue-500">
          <IconPlus />
        </div>
        <div className="font-medium text-base">Join Class</div>
      </div>

      {modelJoinClass ? (
        <OverlayComponent>
          <ModelJoinClass handleModelJoinClass={handleModelJoinClass} />
        </OverlayComponent>
      ) : (
        ""
      )}
    </>
  );
}
