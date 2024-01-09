import { useState } from "react";
import logo from "../../../assets/logo.jpg";
import ModelJoinClass from "../../../components/model/modelJoinClass";
import OverlayComponent from "../../../components/overlay";

export default function ClassEmpty() {
  const [modelJoin, setModelJoin] = useState(false);

  const handleModelJoin = () => {
    setModelJoin(!modelJoin);
  };
  return (
    <>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="flex justify-center items-center gap-3 flex-col">
          <div className="text-xl font-bold text-[#8689b8]">
            You haven't taken any classes yet
          </div>

          <div className="p-3 rounded-xl bg-white flex flex-col justify-center items-center gap-4">
            <img
              src={logo}
              alt=""
              className="w-[150px] h-[150px] rounded-full"
            />
            <button
              onClick={handleModelJoin}
              className="px-3 py-2 bg-blue-500 text-white rounded-xl uppercase font-bold hover:bg-blue-700 duration-150 ease-linear"
            >
              Join class now
            </button>
          </div>
        </div>
      </div>

      {modelJoin ? (
        <OverlayComponent>
          <ModelJoinClass handleModelJoinClass={handleModelJoin} />
        </OverlayComponent>
      ) : (
        ""
      )}
    </>
  );
}
