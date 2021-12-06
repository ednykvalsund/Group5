import Shoppinglist from "./components/pages/ShoppingList";
import Signup from "./components/pages/Signup";
import AddDuties from "./components/pages/AddDuties";
import AssignDuties from "./components/pages/AssignDuties";
import BurgerMenu from "./components/BurgerMenu";
import CreateExcursion from "./components/pages/CreateExcursion";
import PlanPage from "./components/pages/PlanPage";
import Welcome from "./components/pages/Welcome";
import Logo from "./components/Logo";
import DonePage from "./components/pages/DonePage";
import TestPage from "./components/pages/TESTPAGE";
import OrganisePage from "./components/pages/OrganisePage";
import ExcursionContext from "./ExcursionContext";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getDuties } from "./data";
//import { logo } from "./imagefiles/logo.png";

function App() {
  getDuties();
  const [excursionContext, setExcursionContext] = useState("");
  return (
    <div className="App">
      <ExcursionContext.Provider
        value={{ excursionContext, setExcursionContext }}
      >
        <BurgerMenu />
        <Logo />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/assign-duties"
            element={<AssignDuties title="Assign duties" />}
          />
          <Route
            path="/add-duties"
            element={<AddDuties title="Add duties" />}
          />
          <Route
            path="/create-excursion"
            element={<CreateExcursion title="Create excursion" />}
          />
          <Route path="/plan-excursion" element={<PlanPage />} />
          <Route
            path="/shopping-list"
            element={<Shoppinglist title="Shopping list" />}
          />
          <Route path="/sign-up" element={<Signup title="Signup" />} />
          <Route path="/done" element={<DonePage />} />
          <Route path="/organisator" element={<OrganisePage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </ExcursionContext.Provider>
    </div>
  );
}

export default App;
