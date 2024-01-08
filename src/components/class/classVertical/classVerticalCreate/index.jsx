import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconPlus } from "../../icon";
import OverlayComponent from "../../../overlay";
import ModelCreateClass from "../../../model/modelCreateClass";

ClassVerticalCreate.propTypes = {};

function ClassVerticalCreate(props) {
  const [modelCreateClass, setModelCreateClass] = useState(false);
  const handleModelCreateClass = () => {
    setModelCreateClass(!modelCreateClass);
  };
  return (
    <>
      <div
        onClick={handleModelCreateClass}
        className="flex justify-start items-center gap-3 p-2 cursor-pointer"
      >
        <div className="w-[40px] h-[40px] text-white font-bold rounded-full flex justify-center items-center text-xl bg-blue-500">
          <IconPlus />
        </div>
        <div className="font-medium text-base">New Class</div>
      </div>

      {modelCreateClass ? (
        <OverlayComponent>
          <ModelCreateClass handleModelCreateClass={handleModelCreateClass} />
        </OverlayComponent>
      ) : (
        ""
      )}
    </>
  );
}

export default ClassVerticalCreate;
