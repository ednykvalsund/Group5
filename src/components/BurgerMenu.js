import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";

//https://www.npmjs.com/package/react-burger-menu

function BurgerMenu (){
  // showSettings(event) {
  //   event.preventDefault();
  // }
 
    const navigate = useNavigate();
    
    function NavHome() {
      navigate("/");
    };

    function NavOrganisator() {
      navigate("/organisator");
    };

    function NavCreateDuties() {
      navigate("/add-duties");
    };

    function NavAssignDuties() {
      navigate("assign-duties");
    };

    function NavShoppingList() {
      navigate("/shopping-list");
    };

    function NavParticipant() {
      navigate("/participant");
    };
  
    function NavTest() {
      navigate("/Test");
    };
  
    return (
      <Menu>
        <a id="home" className="menu-item" onClick={NavHome}>
          Main page
        </a>
        <a id="organisator" className="menu-item" onClick={NavOrganisator}>
          Organisator
        </a>
        <a id="create-duties" className="menu-item" onClick={NavCreateDuties}>
          Add duties
        </a>
        <a id="assign-duties" className="menu-item" onClick={NavAssignDuties}>
          Assign duties
        </a>
        <a id="shopping-list" className="menu-item" onClick={NavShoppingList}>
          Shopping list
        </a>
        <a id="participant" className="menu-item" onClick={NavParticipant}>
          Participant
        </a>
        <a id="participant" className="menu-item" onClick={NavTest}>
          Test Page
        </a>
      </Menu>
    );
  }

export default BurgerMenu;
