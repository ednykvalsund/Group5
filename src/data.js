import Parse from "parse";

export async function postExcursion(e, destination, year) {
  const Excursion = Parse.Object.extend("Excursion");
  const thisExcursion = new Excursion();
  thisExcursion.set("destination", destination);
  thisExcursion.set("year", year);
  e.preventDefault();
  console.log("prevented default");
  try {
    const savedObject = await thisExcursion.save(); //NOTE* We no longer set context after this line. We use local storage now
    localStorage.setItem("currentExcursionId", savedObject.id); //3. Setting excursion context before promise is resolved, but after the excursion object has been created (above step)
    return savedObject; //3. Resolving the promise
  } catch (error) {
    alert(error);
  }
}

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
  parseQuery.contains("excursionPointer", context);
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

export async function getAgeGroup(context, setAgeGroup, ageGroup) {
  // Reading parse objects is done by using Parse.Query
  const parseQuery = new Parse.Query("Participant");
  parseQuery.contains("excursionPointer", context);
  parseQuery.contains("ageGroup", ageGroup);
  try {
    let participants = await parseQuery.find();
    let ageGroupSize = participants.length;

    setAgeGroup(ageGroupSize);
    return ageGroupSize;
  } catch (error) {
    // Error can be caused by lack of Internet connection
    alert(error);
    return false;
  }
}

export async function getShoppingList(context, setShoppingList) {
  // Reading parse objects is done by using Parse.Query
  const parseQuery = new Parse.Query("ShoppingList");
  parseQuery.contains("excursionPointer", context);
  try {
    let shoppinglist = await parseQuery.find();
    // Be aware that empty or invalid queries return as an empty array
    // Set results to state variable
    setShoppingList(shoppinglist);
    return shoppinglist;
  } catch (error) {
    // Error can be caused by lack of Internet connection
    alert(error);
    return false;
  }
}


export async function postShoppingItem(divisionvalue, amount, unit, item, excursionPointer, setNewList, calc){
  try {
    const ShoppingList = Parse.Object.extend("ShoppingList");
      const thisShoppingList = new ShoppingList();
      thisShoppingList.set("quantity", amount);
      thisShoppingList.set("unit", unit);
      thisShoppingList.set("item", item);
      thisShoppingList.set("excursionPointer", excursionPointer);

      const savedItem = await thisShoppingList.save();
      let newItem = {
        id: savedItem.objectId,
        item: item,
        quantity: await calc(divisionvalue, amount),
        unit: unit,
      };
      setNewList((newList) => [newItem, ...newList])
    
  } catch (error) {
    
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
        "X-Parse-Application-Id": "uP2tBb8UgLEaoW8DLt7qsljfJdifHpqCBqzTHI3D",
        "X-Parse-REST-API-Key": "BdKQ1c0RvpuK7W4FCTgfCxUdhApMDUExzZav43WK",
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
          "X-Parse-Application-Id": "uP2tBb8UgLEaoW8DLt7qsljfJdifHpqCBqzTHI3D",
          "X-Parse-REST-API-Key": "BdKQ1c0RvpuK7W4FCTgfCxUdhApMDUExzZav43WK",
        },
      }
    );
    const content = await rawResponse.json();
    //const data = [];
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

export async function fetchMemberId(firstName) {
  try {
    const query = new Parse.Query("Participant");
    query.contains("firstName", firstName);
    const queryResult = await query.find();
    const currentPerson = queryResult[0];
    const memId = currentPerson.id;
    return memId;
    //setMemberId(memId);
    //setMemberId(queryResult.get("objectId"));
  } catch (error) {
    console.log("Error caught: ", error);
  }
}

export async function postExtra(
  firstName,
  ageGroup,
  participantPointer,
  excursionPointer
) {
  try {
    const Participant = Parse.Object.extend("Participant");
    const thisParticipant = new Participant();
    thisParticipant.set("firstName", firstName);
    thisParticipant.set("ageGroup", ageGroup);
    thisParticipant.set("memberId", participantPointer);
    thisParticipant.set("excursionPointer", excursionPointer);
    await thisParticipant.save();
  } catch (error) {
    console.log("Error caught: ", error);
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
