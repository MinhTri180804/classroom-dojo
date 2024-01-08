import React from "react";
import PropTypes from "prop-types";

OverlayComponent.propTypes = {
    children: PropTypes.node.isRequired,
};

function OverlayComponent({children}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
      {children}
    </div>
  );
}

export default OverlayComponent;
