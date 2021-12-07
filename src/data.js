import Parse from "parse";
import { useState } from "react";

export async function postExcursion(e, destination, year, context) {
  const Excursion = Parse.Object.extend("Excursion");
  const thisExcursion = new Excursion();
  thisExcursion.set("destination", destination);
  thisExcursion.set("year", year);
  e.preventDefault();
  console.log("prevented default");
  try {
    const savedObject = await thisExcursion.save();
    context(savedObject.id); //We successfully sets the context to be the newly created excursion id
  } catch (error) {
    alert(error);
  }
}
/// EXEMPEL PÅ PARSE METODE
// export async function postDuty2(ev, i, ep, c){
//     const Duty = Parse.Object.extend("Duty");
//     const thisDuty = new Duty();
//       thisDuty.set("title", i);
//       thisDuty.set("excursionID", ep);

//       ev.preventDefault();
//     //  console.log("prevented default");
//       try {
//         const savedObject = await thisDuty.save();
//         c("");
//       } catch (error) {
//         alert(error);
//       }

// }

export async function getDuties(context, setDuties) {
  // Reading parse objects is done by using Parse.Query
  const parseQuery = new Parse.Query("Duty");
  parseQuery.contains("excursionId", context);
  try {
    let duties = await parseQuery.find();
    // Be aware that empty or invalid queries return as an empty array
    // Set results to state variable
    setDuties(duties);
    return duties;
  } catch (error) {
    // Error can be caused by lack of Internet connection
    alert(error);
    return false;
  }
}

export async function getParticipants(context, setParticipants) {
  // Reading parse objects is done by using Parse.Query
  const parseQuery = new Parse.Query("Participant");
  parseQuery.contains("excursionId", context);
  try {
    let participants = await parseQuery.find();
    // Be aware that empty or invalid queries return as an empty array
    // Set results to state variable
    setParticipants(participants);
    return participants;
  } catch (error) {
    // Error can be caused by lack of Internet connection
    alert(error);
    return false;
  }
}

export async function postDuty(item, excursionPointer, context) {
  const postData = {
    title: item,
    excursionId: excursionPointer,
  };

  try {
    const response = await fetch("https://parseapi.back4app.com/classes/Duty", {
      method: "POST",
      headers: {
        "X-Parse-Application-Id": "JZR7qAeKjlKQTGTUsB6MS80ZfUiCpdUNaviJnH6a",
        "X-Parse-REST-API-Key": "HhE6x96owxbIObVadQXzyt2ko4kyEUDBIZ0QrZPS",
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      const message = "Error with Status Code: " + response.status;
      throw new Error(message);
    }

    const data = await response.json();
    console.log(data);
    context("");
  } catch (error) {
    console.log("Error: " + error);
  }
}

export async function getExcursions() {
  let excursions = [];

  try {
    const rawResponse = await fetch(
      "https://parseapi.back4app.com/classes/Excursion",
      {
        method: "GET",
        headers: {
          "X-Parse-Application-Id": "JZR7qAeKjlKQTGTUsB6MS80ZfUiCpdUNaviJnH6a",
          "X-Parse-REST-API-Key": "HhE6x96owxbIObVadQXzyt2ko4kyEUDBIZ0QrZPS",
        },
      }
    );
    const content = await rawResponse.json();
    const data = [];
    for (var i in content.results) {
      let excursion = {
        title: content.results[i].destination,
        id: content.results[i].objectId,
      };
      excursions.push(excursion);
    }
    console.log(excursions);
    return excursions;
  } catch (error) {
    console.log(error);
  }
}

export async function postParticipant(
  firstName,
  email,
  phoneNumber,
  workPhoneNumber,
  address,
  ageGroup,
  excursionPointer
) {
  try {
    const Participant = Parse.Object.extend("Participant");
    const thisParticipant = new Participant();
    thisParticipant.set("firstName", firstName);
    thisParticipant.set("email", email);
    thisParticipant.set("phoneNumber", phoneNumber);
    thisParticipant.set("workPhoneNumber", workPhoneNumber);
    thisParticipant.set("address", address);
    thisParticipant.set("ageGroup", ageGroup);
    thisParticipant.set("excursionPointer", excursionPointer);
    await thisParticipant.save();
    //fetchMemberId(); //Saves this persons object id to the memberId variable, that extra's (plus ones) use as a pointer
  } catch (error) {
    console.log("Error caught: ", error);
  }
}

export async function fetchMemberId(firstName, setMemberId) {
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
}

export async function postExtra(firstName, ageGroup, participantPointer) {
  try {
    const Participant = Parse.Object.extend("Participant");
    const thisParticipant = new Participant();
    thisParticipant.set("firstName", firstName);
    thisParticipant.set("ageGroup", ageGroup);
    thisParticipant.set("memberId", participantPointer);
    await thisParticipant.save();
  } catch (error) {
    console.log("Error caught: ", error);
  }
}

function printError(err) {
  console.log("Error caught: ", err);
}
