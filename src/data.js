import ExcursionContext from "./ExcursionContext";
import Parse from "parse";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

export async function postExcursion(e, destination, year, context) {
  const Excursion = Parse.Object.extend("Excursion");
  const thisExcursion = new Excursion();
  thisExcursion.set("Destination", destination);
  thisExcursion.set("Year", year);
  e.preventDefault();
  console.log("prevented default");
  try {
    const savedObject = await thisExcursion.save();
    context(savedObject.id); //We successfully sets the context to be the newly created excursion id
  } catch (error) {
    alert(error);
  }
}

export async function postDuty(e, item, excursionPointer, context) {
  const Duty = Parse.Object.extend("Duty");
  const thisDuty = new Duty();
  thisDuty.set("title", item);
  thisDuty.set("excursionID", excursionPointer);

  e.preventDefault();
  console.log("prevented default");
  try {
    const savedObject = await thisDuty.save();
    context("");
  } catch (error) {
    alert(error);
  }
}

export async function getDuties(context) {
  // Reading parse objects is done by using Parse.Query
  const parseQuery = new Parse.Query("Duty");
  parseQuery.contains("excursionID", context);
  try {
    let duties = await parseQuery.find();
    // Be aware that empty or invalid queries return as an empty array
    // Set results to state variable

    return duties;
  } catch (error) {
    // Error can be caused by lack of Internet connection
    alert(error);
    return false;
  }
}
