import React from "react";
import { Message } from "./Message";

export const Messages = () => {
  const msgs = [
    { name: "developer", msg: "hello world" },
    { name: "Simon", msg: "hello darkness" },
    { name: "Garfunkel", msg: "my old friend" },
  ];

  return (
    <div>
      {msgs.map((elem) => {
        return <Message name={elem.name} msg={elem.message} />;
      })}
    </div>
  );
};
