import React from "react";
import { useNavigate } from "react-router-dom";

/*Textbuttons have three types, 'Nav' for buttons that only navigate, 'Handle' for buttons
  that executes code without navigation, and 'HandleAndNav for buttons that does both
  Use prop 'btnSwitch' to set type. No type declared defaults to 'Nav'.
  ~jkak*/

function TextButton({ className, label, handleClick, link, btnSwitch }) {
  const navigate = useNavigate();

  function HandleAndNav(e) {
    let result = handleClick(e);
    console.log(result);
    result.then(() => {
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
