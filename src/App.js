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
import OrganisePage from "./components/pages/OrganisePage";
import ExcursionContext from "./ExcursionContext";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ChooseExcursion from "./components/pages/ChooseExcursion";
import Parse from "parse";
import { HashRouter } from "react-router-dom";


function App() {
  const [excursionContext, setExcursionContext] = useState("");
  Parse.initialize(process.env.REACT_APP_APP_KEY, process.env.REACT_APP_JS_KEY);

  Parse.serverURL = "https://parseapi.back4app.com/";

  return (
    <div className="App">
      <ExcursionContext.Provider
        value={{ excursionContext, setExcursionContext }}
      >
        <BurgerMenu />
        <Logo />
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
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
          <Route path="/organiser" element={<OrganisePage />} />
          <Route path="/choose-excursion" element={<ChooseExcursion />} />
        </Routes>
      </ExcursionContext.Provider>
    </div>
  );
}

export default App;
