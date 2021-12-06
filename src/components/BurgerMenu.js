import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";

//https://www.npmjs.com/package/react-burger-menu

function BurgerMenu() {
  const navigate = useNavigate();

  return (
    <Menu>
      <button id="home" className="menu-item" onClick={() => navigate("/")}>
        Main page
      </button>
      <button
        id="organisator"
        className="menu-item"
        onClick={() => navigate("/organisator")} //Onclick needs a method to
      >
        Organisator
      </button>
      <button
        id="create-duties"
        className="menu-item"
        onClick={() => navigate("/add-duties")}
      >
        Add duties
      </button>
      <button
        id="assign-duties"
        className="menu-item"
        onClick={() => navigate("assign-duties")}
      >
        Assign duties
      </button>
      <button
        id="shopping-list"
        className="menu-item"
        onClick={() => navigate("/shopping-list")}
      >
        Shopping list
      </button>
      <button
        id="participant"
        className="menu-item"
        onClick={() => navigate("/choose-excursion")}
      >
        Participant
      </button>
    </Menu>
  );
}

export default BurgerMenu;
