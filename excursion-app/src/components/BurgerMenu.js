import React from "react";
import { slide as Menu } from "react-burger-menu";

//https://www.npmjs.com/package/react-burger-menu

class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">
          Main page
        </a>
        <a id="organisator" className="menu-item" href="/plan-excursion">
          Organisator
        </a>
        <a id="create-duties" className="menu-item" href="/add-duties">
          Create duties
        </a>
        <a id="assign-duties" className="menu-item" href="/assign-duties">
          Assign duties
        </a>
        <a id="shopping-list" className="menu-item" href="/shopping-list">
          Shopping list
        </a>
        <a id="participant" className="menu-item" href="/sign-up">
          Participant
        </a>
      </Menu>

      /*
        <Route path="/" element={<Welcome />} />
        <Route path="/assign-duties" element={<AssignDuties />} />
        <Route path="/add-duties" element={<AddDuties />} />
        <Route path="/create-excursion" element={<CreateExcursion />} />
        <Route path="/plan-excursion" element={<PlanPage />} />
        <Route path="/shopping-list" element={<Shoppinglist />} />
        <Route path="/sign-up" element={<Signup />} />
        */
    );
  }
}

export default BurgerMenu;
