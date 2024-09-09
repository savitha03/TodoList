import React, { useState } from "react";
import { MdOutlineToggleOff, MdOutlineToggleOn } from "react-icons/md";

import "./ToggleIndicator.css";

const ToggleIndicator = ({ onChange }) => {
  const [isComplete, setIsComplete] = useState(false);

  const toggleHandler = () => {
    setIsComplete(!isComplete);
    onChange(!isComplete);
  };

  return (
    <div className="toggle-container">
      <div onClick={toggleHandler} className="toggle-icon-container">
        {isComplete ? (
          <MdOutlineToggleOn className="toggle-icon" />
        ) : (
          <MdOutlineToggleOff className="toggle-icon" />
        )}
      </div>
    </div>
  );
};

export default ToggleIndicator;
