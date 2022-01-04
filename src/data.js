import Parse from "parse";

const appId = "uP2tBb8UgLEaoW8DLt7qsljfJdifHpqCBqzTHI3D";
const restAPIkey = "BdKQ1c0RvpuK7W4FCTgfCxUdhApMDUExzZav43WK";

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

export async function getParticipantById(id){

}

export async function deleteParticipant(userId, setParticipantList, participantList){
        //Retrieve your Parse Object
        const parseQuery = new Parse.Object("Participant");
        //set its objectId
        parseQuery.set("objectId",userId);

        try{
            //destroy the object
            let result = await parseQuery.destroy();
            const found = participantList.findIndex(element => element.id === userId)
            participantList.splice(found, 1)
            setParticipantList(participantList)
        }catch(error){
            alert('Failed to delete object, with error code: ' + error.message);
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

  async function calc(dvalue, damount) {
    try {
      const params = { value: dvalue, amount: damount };
      const result = await Parse.Cloud.run("calculateShopping", params);
      console.log(result);
      return result;
    } catch (error) {
      console.log("error: " + error);
    }
  }

export async function postShoppingItem(
  divisionvalue,
  amount,
  unit,
  item,
  excursionPointer,
  setNewList,
) {
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
      quantity: await calc(divisionvalue, amount), // get props for quantity the same way as item and 
      unit: unit,
    };
    setNewList((newList) => [newItem, ...newList]);
  } catch (error) {}
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
        "X-Parse-Application-Id": appId,
        "X-Parse-REST-API-Key": restAPIkey,
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
          "X-Parse-Application-Id": appId,
          "X-Parse-REST-API-Key": restAPIkey,
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
  name,
  email,
  phoneNumber,
  workPhoneNumber,
  address,
  ageGroup,
  excursionPointer,
  setParticipantList
) {
  try {
    const Participant = Parse.Object.extend("Participant");
    const thisParticipant = new Participant();
    thisParticipant.set("name", name);
    thisParticipant.set("email", email);
    thisParticipant.set("phoneNumber", phoneNumber);
    thisParticipant.set("workPhoneNumber", workPhoneNumber);
    thisParticipant.set("address", address);
    thisParticipant.set("ageGroup", ageGroup);
    thisParticipant.set("excursionPointer", excursionPointer);
    await thisParticipant.save();
    //fetchMemberId(); //Saves this persons object id to the memberId variable, that extra's (plus ones) use as a pointer
    const savedParticipant = await thisParticipant.save();
    let newParticipant = {
      id: savedParticipant.id,
      name: name,
    }; 
    console.log(newParticipant)
    setParticipantList((participantList) => [newParticipant, ...participantList])
  } catch (error) {
    console.log("Error caught while posting participant: ", error);
  }
}

export async function fetchMemberId(name) {
  try {
    const query = new Parse.Query("Participant");
    query.contains("name", name);
    const queryResult = await query.find();
    const currentPerson = queryResult[0];
    const memId = currentPerson.id;
    return memId;
    //setMemberId(memId);
    //setMemberId(queryResult.get("objectId"));
  } catch (error) {
    console.log("Error caught while fetching memberId: ", error);
  }
}

export async function postExtra(
  name,
  ageGroup,
  participantPointer,
  excursionPointer,
  setParticipantList
) {
  try {
    const Participant = Parse.Object.extend("Participant");
    const thisParticipant = new Participant();
    thisParticipant.set("name", name);
    thisParticipant.set("ageGroup", ageGroup);
    thisParticipant.set("memberId", participantPointer);
    thisParticipant.set("excursionPointer", excursionPointer);
    await thisParticipant.save();
    const savedParticipant = await thisParticipant.save();
    let newParticipant = {
      id: savedParticipant.objectId,
      name: name,
    };
    setParticipantList((participantList) => [newParticipant, ...participantList])
  } catch (error) {
    console.log("Error caught: ", error);
  }
}

export async function postCar(
  registrationNumber,
  color,
  seatsAvailable,
  leavesFrom,
  participantPointer
) {
  try {
    const Car = Parse.Object.extend("Car");
    const thisCar = new Car();
    thisCar.set("registrationNumber", registrationNumber);
    thisCar.set("color", color);
    thisCar.set("seatsAvailable", seatsAvailable);
    thisCar.set("leavesFrom", leavesFrom);
    thisCar.set("owner", participantPointer);
    await thisCar.save();
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
