import React from "react";

export const TabButton = ({ children }) => {
  const handelOnClick = () => {
    console.log("hello world");
  };

  return (
    <li>
      <button onClick={handelOnClick}>{children}</button>
    </li>
  );
};
