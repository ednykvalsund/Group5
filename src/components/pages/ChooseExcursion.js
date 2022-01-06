import React, { useEffect, useState } from "react";
import { getExcursions } from "../../data";
import BasicSelect from "../InputDropRow";
import TextButton from "../TextButton";

function ChooseExcursion() {
  const [excursions, setExcursions] = useState([]);
  const [select, setSelect] = useState("");

  useEffect(() => {
    loadExcursions();
  }, []);

  async function loadExcursions() {
    let options = await getExcursions();
    setExcursions(options);
  }

  const handleSelect = (e) => {
    setSelect(e.target.value);
    setExcursionId(e.target.value);
  };

  function setExcursionId(destination) {
    let obj = excursions.find((o) => o.title === destination);
    localStorage.setItem("currentExcursionId", obj.id);
  }
  return (
    <>
      <div className="page-container">
        <div className="center-container">
          <h1 className="page-title">Welcome!</h1>
          <h2>Which excursion are you joining?</h2>
          <BasicSelect
            title="Excursion"
            value={select}
            options={excursions.map((element) => element.title)}
            handleChange={handleSelect}
          />
          <TextButton
            className="green-button"
            label="Next"
            link="/sign-up"
            btnSwitch="Nav"
          ></TextButton>
        </div>
      </div>
    </>
  );
}

export default ChooseExcursion;
