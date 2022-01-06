import React from "react";
import { useNavigate } from "react-router-dom";

function TextButton({ className, label, handleClick, link, btnSwitch }) {
  const navigate = useNavigate();

  function HandleAndNav(e) {
    let result = handleClick(e);
    console.log("First 'result' is a promise: ", result);
    result.then(() => {
      console.log("When 'result' is fulfilled: ", result);
      navigate(link);
    });
    console.log("already navigated");
  }

  function Nav() {
    navigate(link);
  }

  switch (btnSwitch) {
    case "Nav":
      return (
        <button className={className} onClick={Nav}>
          {label}
        </button>
      );

    case "Handle":
      return (
        <button className={className} onClick={handleClick}>
          {label}
        </button>
      );

    case "HandleAndNav":
      return (
        <button className={className} onClick={HandleAndNav}>
          {label}
        </button>
      );

    default:
      return (
        <button className={className} onClick={Nav}>
          {label}
        </button>
      );
  }
}

export default TextButton;
