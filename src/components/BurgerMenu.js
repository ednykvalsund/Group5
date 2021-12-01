import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";

//https://www.npmjs.com/package/react-burger-menu

function BurgerMenu() {
  const navigate = useNavigate();

  return (
    <Menu>
      <a id="home" className="menu-item" onClick={() => navigate("/")}>
        Main page
      </a>
      <a
        id="organisator"
        className="menu-item"
        onClick={() => navigate("/organisator")} //Onclick needs a method to
      >
        Organisator
      </a>
      <a
        id="create-duties"
        className="menu-item"
        onClick={() => navigate("/add-duties")}
      >
        Add duties
      </a>
      <a
        id="assign-duties"
        className="menu-item"
        onClick={() => navigate("assign-duties")}
      >
        Assign duties
      </a>
      <a
        id="shopping-list"
        className="menu-item"
        onClick={() => navigate("/shopping-list")}
      >
        Shopping list
      </a>
      <a
        id="participant"
        className="menu-item"
        onClick={() => navigate("/sign-up")}
      >
        Participant
      </a>
    </Menu>
  );
}

export default BurgerMenu;
