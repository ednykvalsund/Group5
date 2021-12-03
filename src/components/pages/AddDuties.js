import React from "react";
import Steppers from "../Progress2";
import Card from "../Card";
import SimpleTextField from "../InputTextRow";
import ItemCard from "../ItemCard";
import IconButtons from "../IconButtons";
import TextButton from "../TextButton";
import Parse from "parse";
import { useState, useContext, useEffect } from "react";
import ExcursionContext from "../../ExcursionContext";
import { postDuty, getDuties } from "../../data";

function AddDuties(props) {
  //https://javascript.plainenglish.io/how-to-make-the-useeffect-hook-not-run-on-initial-render-e42bc3389724#:~:text=We%20can%20make%20the%20useEffect,set%20the%20variable%20to%20false%20.
  const { excursionContext } = useContext(ExcursionContext);
  const [DutyList, setDutyList] = useState([]);
  var ExcursionPointer = {
    __type: "Pointer",
    className: "Excursion",
    objectId: excursionContext,
  };

  useEffect(() => {
    readDuties();
    //console.log("An excursion context:", excursionContext);
    //Renders duties connected with current context upon load. Corresponds to the lifecycle-method: componentDidMount(). The second param [] ensures it only runs once upon load, otherwise it keeps running and we will get a parse-error from back4app
  }, [excursionContext, DutyList]);

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  async function SaveDuty(e) {
    postDuty(value, ExcursionPointer, setValue);
    console.log(DutyList);
    //Duties();
    readDuties();
  }

  const readDuties = async function () {
    // Reading parse objects is done by using Parse.Query
    if (excursionContext) {
      try {
        const parseQuery = new Parse.Query("Duty");
        parseQuery.contains("excursionID", excursionContext);
        //console.log("This", excursionContext);

        let duties = await parseQuery.find();

        //console.log(duties);
        // Be aware that empty or invalid queries return as an empty array
        // Set results to state variable
        setDutyList(duties);

        return true;
      } catch (error) {
        // Error can be caused by lack of Internet connection
        alert(error);
        return false;
      }
    } else {
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
                title="Duty"
                value={value}
                onChange={handleChange}
              >
                <IconButtons add onClick={SaveDuty} />
              </SimpleTextField>

              {DutyList.map((duty) => (
                <ItemCard id={duty.get("objectId")} item={duty.get("title")} />
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
