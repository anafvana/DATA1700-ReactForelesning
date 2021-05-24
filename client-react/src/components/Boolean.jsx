import React, { useState } from "react";

export const Boolean = (props) => {
  const [bool, setBool] = useState(false);
  const updater = () => {
    setBool((prev) => !prev);
  };

  return (
    <button onClick={updater}>
      {bool ? props.myprop : "Press here for " + props.myprop}
    </button>
  );
};
