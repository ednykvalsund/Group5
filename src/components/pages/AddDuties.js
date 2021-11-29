import React from "react";
import Steppers from "../Progress2";
import Card from "../Card";
import SimpleTextField from "../InputTextRow";
import ItemCard from "../ItemCard";
import IconButtons from "../IconButtons";
import TextButton from "../TextButton";
import Parse from "parse";
import { useState, useContext } from "react";
import ExcursionContext from "../../ExcursionContext";
import {postDuty, getDuties} from  "../../data";



function AddDuties(props) {
  const { excursionContext } = useContext(ExcursionContext);
  const [DutyList, setDutyList] = useState([]);

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  var ExcursionPointer = {
    __type: "Pointer",
    className: "Excursion",
    objectId: excursionContext,
  };

  async function SaveDuty(e) {
    postDuty(e, value, ExcursionPointer, setValue);
    readDuties();
  }
  const readDuties = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query("Duty");
    parseQuery.contains("excursionID", excursionContext);
    try {
      let duties = await parseQuery.find();
      // Be aware that empty or invalid queries return as an empty array
      // Set results to state variable
      setDutyList(duties);
      console.log(DutyList);

      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(error);
      return false;
    }
   
  };

  return (
    <>
      <div className="page-container">
        <h1 className="page-title">{props.title}</h1>
        <div className="card-container-add-duties">
          <Card>
            <div className="card-textfields-container">
              <SimpleTextField
                title="Test"
                value={value}
                onChange={handleChange}
              >
                <IconButtons add onClick={SaveDuty} />
              </SimpleTextField>

              {DutyList.map((duty) => (
                <ItemCard
                  id={duty.get("objectId")}
                  item={duty.get("title")}
                />
              ))}
            </div>
          </Card>
        </div>
        <br />
      </div>
      <div className="steppers-container">
        <Steppers
          steps={[
            "Create Excursion",
            "Create duties",
            "Create shopping list",
            "Done",
          ]}
          doneSteps={1}
        />
      </div>

      <TextButton
        label="Next"
        className="green-button-right"
        link="/shopping-list"
      />
    </>
  );
}

export default AddDuties;
