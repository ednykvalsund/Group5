import "./components/ShoppingList";
import Shoppinglist from "./components/ShoppingList";
import Signup from "./components/Signup";
import AddDuties from "./components/AddDuties";
import AssignDuties from "./components/AssignDuties";
import BurgerMenu from "./components/BurgerMenu";
import CreateExcursion from "./components/CreateExcursion";
import PlanPage from "./components/PlanPage";
import Welcome from "./components/Welcome";
import Logo from "./components/Logo";
import DonePage from "./components/DonePage"

import Card from "./components/Card";
import BasicSelect from "./components/InputDropRow";

import { Routes, Route } from "react-router-dom";
//import { logo } from "./imagefiles/logo.png";

function App() {
  return (
    <div className="App">
      <BurgerMenu />
      <Logo />

      <BasicSelect title="Year" options={["2021", "2022", "2023", "2024"]}/>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/assign-duties" element={<AssignDuties />} />
        <Route path="/add-duties" element={<AddDuties />} />
        <Route path="/create-excursion" element={<CreateExcursion />} />
        <Route path="/plan-excursion" element={<PlanPage />} />
        <Route path="/shopping-list" element={<Shoppinglist />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
