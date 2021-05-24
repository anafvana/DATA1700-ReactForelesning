import React from "react";

export const Message = (props) => {
  return (
    <>
      <h1>{props.name} said</h1>
      <p>{props.msg}</p>
    </>
  );
};
