import React from "react";
import { useNavigate } from "react-router-dom";

/*Textbuttons have three types, 'Nav' for buttons that only navigate, 'Handle' for buttons
  that executes code without navigation, and 'HandleAndNav for buttons that does both
  Use prop 'btnSwitch' to set type. No type declared defaults to 'Nav'. ~jkak*/

/*Textbutton handleAndNav han been changes to use async function to only navigate when the 
promise has been resolved - it fixed the bug such that we can set a new excursion id to 
local storage before the next page renders the dutylist connected with that excursion. ~jept*/

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
