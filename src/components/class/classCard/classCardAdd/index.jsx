import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconPlus } from "../../icon";
import ModelCreateClass from "../../../model/modelCreateClass";
import OverlayComponent from "../../../overlay";

ClassCardAdd.propTypes = {};

function ClassCardAdd(props) {
  const [modelCreateClass, setModelCreateClass] = useState(false);
  const handleModelCreateClass = () => {
    setModelCreateClass(!modelCreateClass);
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
          NEW CLASS
        </div>
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

export default ClassCardAdd;
