import React, { useEffect, useState, useContext } from "react";

import { getExcursions } from "../../data";
import BasicSelect from "../InputDropRow";
import TextButton from "../TextButton";
import ExcursionContext from "../../ExcursionContext";
import Parse from "parse";

function ChooseExcursion() {
  const [excursions, setExcursions] = useState([]);
  const { excursionContext, setExcursionContext } =
    useContext(ExcursionContext);

  useEffect(() => {
    loadExcursions();
    localStorage.setItem("currentExcursionId", select);
    //Renders duties connected with current context upon load. Corresponds to the lifecycle-method: componentDidMount(). The second param [] ensures it only runs once upon load, otherwise it keeps running and we will get a parse-error from back4app
  }, []);

  async function loadExcursions() {
    let options = await getExcursions();
    setExcursions(options);
  }

  async function SaveExcursion(e) {
    //Set context here
    setExcursionContext(e);
    //localStorage.setItem("currentExcursionId", excursionContext);
    //console.log(excursionContext);
  }
  const [select, setSelect] = useState("");
  const handleSelect = (e) => {
    setSelect(e.target.value);
    setExcursionId(e.target.value);
    //localStorage.setItem("currentExcursionId", e.target.value);
    //console.log("target ", e.target.value);
    //console.log("hook", select);
  };

  async function setExcursionId(name) {
    try {
      const query = new Parse.Query("Excursion");
      query.contains("destination", name);
      const queryResult = await query.find();
      const currentExcursion = queryResult[0];
      const excursionId = currentExcursion.id;
      localStorage.setItem("currentExcursionId", excursionId);
    } catch (error) {
      console.log("Error caught: ", error);
    }
  }

  /*
    const [memberId, setMemberId] = useState("");
  async function fetchMemberId() {
    try {
      const query = new Parse.Query("Participant");
      query.contains("firstName", firstName);
      const queryResult = await query.find();
      const currentPerson = queryResult[0];
      const memId = currentPerson.id;
      setMemberId(memId);
      //setMemberId(queryResult.get("objectId"));
    } catch (error) {
      printError(error);
    }
  }*/

  return (
    <>
      <div className="page-container">
        <div className="center-container">
          <h1 className="page-title">Welcome!</h1>
          <h2>Which excursion are you joining?</h2>
          <BasicSelect
            title="Excursion"
            options={excursions.map((element) => element.title)}
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
