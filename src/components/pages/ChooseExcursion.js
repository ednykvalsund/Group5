import React, { useEffect, useState, useContext } from "react";

import { getExcursions } from "../../data";
import BasicSelect from "../InputDropRow";
import TextButton from "../TextButton";
import ExcursionContext from "../../ExcursionContext";

function ChooseExcursion() {
  const [excursions, setExcursions] = useState([]);
  const { excursionContext, setExcursionContext } =
    useContext(ExcursionContext);

    useEffect(() => {
      loadExcursions()
      //Renders duties connected with current context upon load. Corresponds to the lifecycle-method: componentDidMount(). The second param [] ensures it only runs once upon load, otherwise it keeps running and we will get a parse-error from back4app
    }, []);
  
 async function loadExcursions(){
  let options = await getExcursions();
  setExcursions(options);
 }

  async function SaveExcursion(e) {
    setExcursionContext(e);
    console.log(excursionContext)
  }

  const [select, setSelect] = useState("");
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };
  return (
    <>
      <div className="page-container">
        <div className="center-container">
          <h1 className="page-title">Welcome!</h1>
          <h2>Which excursion are you joining?</h2>
          <BasicSelect
            title="Excursion"
            // options={excursions.map((element) => element.get("objectId"))}
            options={excursions}
            handleChange={handleSelect}
            value={select}
          />
          <TextButton
            className="green-button"
            label="Next"
            handleClick={SaveExcursion}
            link="/sign-up"
            btnSwitch="HandleAndNav"
          ></TextButton>
        </div>
      </div>
    </>
  );
}

export default ChooseExcursion;
