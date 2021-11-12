import Shoppinglist from "./components/pages/ShoppingList";
import Signup from "./components/pages/Signup";
import AddDuties from "./components/pages/AddDuties";
import AssignDuties from "./components/pages/AssignDuties";
import BurgerMenu from "./components/BurgerMenu";
import CreateExcursion from "./components/pages/CreateExcursion";
import PlanPage from "./components/pages/PlanPage";
import Welcome from "./components/pages/Welcome";
import Logo from "./components/Logo";
import DonePage from "./components/pages/DonePage"
import TestPage from "./components/pages/TESTPAGE";

import Card from "./components/Card";
import BasicSelect from "./components/InputDropRow";
import MultiSelect from "./components/InputDropMultiRow";
import SimpleTextField from "./components/InputTextRow";

import { Routes, Route } from "react-router-dom";
//import { logo } from "./imagefiles/logo.png";

function App() {
  return (
    <div className="App">
      <BurgerMenu />
      <Logo />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/assign-duties" element={<AssignDuties />} />
        <Route path="/add-duties" element={<AddDuties />} />
        <Route path="/create-excursion" element={<CreateExcursion />} />
        <Route path="/plan-excursion" element={<PlanPage />} />
        <Route path="/shopping-list" element={<Shoppinglist />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/test" element={<TestPage />} />

      </Routes>
    </div>
  );
}

export default App;
