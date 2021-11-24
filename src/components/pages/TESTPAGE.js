import React from "react";
import Card from "../Card";
import Steppers from "../Progress2";
import BasicSelect from "../InputDropRow";
import SimpleTextField from "../InputTextRow";
import MultiSelect from "../InputDropMultiRow";
import TextButton from "../TextButton";
import Parse from "parse";
import ConfirmDialog from "../ConfirmDialog";

import RadioButtonsGroup from "../RadioButtons";
import ItemCard from "../ItemCard";
import IconButtons from "../IconButtons";

function TestPage() {
  const B4aVehicle = Parse.Object.extend("B4aVehicle");
  const vehicle = new B4aVehicle();

  vehicle.set("name", "Smart");
  vehicle.set("price", 10000);
  vehicle.set("color", "Blue");

  async function addSmart(e) {
    e.preventDefault();
    console.log("prevented default");

    try {
      const savedObject = await vehicle.save();
      alert("succes");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="TestPage-component">
      <h1>Test Page</h1>
      <div className="flex-container"></div>
      <IconButtons trash />
      <Steppers
        steps={["Create Excursion", "Create duties", "Create shopping list"]}
        doneSteps={1}
      />
      <SimpleTextField title="Destination" />
      <BasicSelect title="Year" options={["2021", "2022", "2023", "2024"]} />
      <MultiSelect title="Year" options={["2021", "2022", "2023", "2024"]} />
      <TextButton
        className="green-button"
        label="Add car"
        handleClick={addSmart}
      ></TextButton>
      <RadioButtonsGroup label1="Member" label2="Extra" />

      <Card headline="This is a card">
        <ItemCard item="Coffee" amount="2.5" unit="Kilo"></ItemCard>

        <ItemCard item="Toilet paper" amount="15" unit="Roll" />
        <ItemCard item="Toilet paper" amount="15" unit="Roll" />
        <ItemCard item="Toilet paper" amount="15" unit="Roll" />
        <ItemCard item="Toilet paper" amount="15" unit="Roll" />
      </Card>
      <br></br>
      <ConfirmDialog></ConfirmDialog>
    </div>
  );
}

export default TestPage;
