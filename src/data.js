import Parse from "parse";

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

// export async function getDuties(c){
// // Reading parse objects is done by using Parse.Query
// const parseQuery = new Parse.Query("Duty");
// parseQuery.contains("excursionID", c);
// try {
//   let duties = await parseQuery.find();
//   // Be aware that empty or invalid queries return as an empty array
//   // Set results to state variable

//   return duties;
// } catch (error) {
//   // Error can be caused by lack of Internet connection
//   alert(error);
//   return false;
// }
// }

export async function postDuty(item, excursionPointer, context) {
  const postData = {
    title: item,
    excursionID: excursionPointer,
  };

  try {
    const response = await fetch("https://parseapi.back4app.com/classes/Duty", {
      method: "POST",
      headers: {
        "X-Parse-Application-Id": "uKmhjGneLQTgZWeNymG4kjyhBBvbl1q1A8lgPq1H",
        "X-Parse-REST-API-Key": "a754ZP4do9PlwAoxrkIEer56e6gjKNrnE0veYkGt",
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

export async function getDuties(excursionId) {
  // var query = JSON.stringify({
  //     where: JSON.stringify({
  //        excursionID: "JAIcFCXIN6"
  //     })
  // });

  const rawResponse = await fetch(
    "https://parseapi.back4app.com/classes/Duty",
    {
      method: "GET",
      headers: {
        "X-Parse-Application-Id": "uKmhjGneLQTgZWeNymG4kjyhBBvbl1q1A8lgPq1H",
        "X-Parse-REST-API-Key": "a754ZP4do9PlwAoxrkIEer56e6gjKNrnE0veYkGt",
      },
    }
  );
  const content = await rawResponse.json();
  console.log(content);
}
