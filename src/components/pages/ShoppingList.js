import React, { useState, useEffect } from "react";
import Steppers from "../Progress2";
import Card from "../Card";
import RadioButtons from "../RadioButtons";
import IconButtons from "../IconButtons";
import ItemCard from "../ItemCard";
import SimpleTextField from "../InputTextRow";
import TextButton from "../TextButton";
import { getShoppingList, getParticipants, getAgeGroup } from "../../data";
import Parse from "parse";

function Shoppinglist(props) {
  const currentExcursionId = localStorage.getItem("currentExcursionId");
  const [measure, setMeasure] = useState("Per Person");
  const [ShoppingList, setShoppingList] = useState([]);
  const [count, setCount] = useState(0);

  const [adults, setAdults] = useState(0);
  const [teenagers, setTeenagers] = useState(0);
  const [children, setChildren] = useState(0);

  const [ParticipantList, setParticipantList] = useState([]);

  const [amount, setAmount] = useState("");
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const [unit, setUnit] = useState("");
  const handleChangeUnit = (e) => {
    setUnit(e.target.value);
  };
  const [item, setItem] = useState("");
  const handleChangeItem = (e) => {
    setItem(e.target.value);
  };

  var divisionvalue = adults + teenagers * 0.75 + children * 0.5;

  async function saveItem() {
    try {
      const ShoppingList = Parse.Object.extend("ShoppingList");
      const thisShoppingList = new ShoppingList();
      thisShoppingList.set("quantity", amount);
      thisShoppingList.set("unit", unit);
      thisShoppingList.set("item", item);
      thisShoppingList.set("excursionPointer", excursionPointer);

      await thisShoppingList.save();

      setCount(count + 1);
      setAmount("");
      setUnit("");
      setItem("");
      getShoppingList(currentExcursionId, setShoppingList);
    } catch (error) {
      console.log("Error caught: ", error);
    }
  }

  //var currentExcursionId = localStorage.getItem("currentExcursionId");
  var excursionPointer = {
    __type: "Pointer",
    className: "Excursion",
    objectId: currentExcursionId,
  };

  useEffect(() => {
    getShoppingList(currentExcursionId, setShoppingList);
    getParticipants(currentExcursionId, setParticipantList);
    getAgeGroup(currentExcursionId, setAdults, "Adult");
    getAgeGroup(currentExcursionId, setTeenagers, "Teenager");
    getAgeGroup(currentExcursionId, setChildren, "Child");

    //Renders duties connected with current context upon load. Corresponds to the lifecycle-method: componentDidMount(). The second param [] ensures it only runs once upon load, otherwise it keeps running and we will get a parse-error from back4app
  }, [currentExcursionId, count]);

  return (
    <div className="page-container">
      <h1 className="page-title">{props.title}</h1>
      <div className="card-container">
        <Card>
          <div className="card-textfields-container">
            <div className="shopping-list-amount-info">
              <div className="left-wrapper">
                <RadioButtons
                  value={measure}
                  onChange={(e) => setMeasure(e.target.value)}
                  label1="Per Person"
                  label2="Total amount"
                />{" "}
              </div>
              <p>
                {" "}
                Adults: {adults} Teenagers: {teenagers} Children: {children}{" "}
                Division: {divisionvalue}{" "}
              </p>
            </div>

            <div className="inline-forms">
              <div className="shopping-amount-and-unit">
                {" "}
                <SimpleTextField
                  title="Amount"
                  onChange={handleChangeAmount}
                  value={amount}
                />
              </div>
              <div className="shopping-amount-and-unit">
                {" "}
                <SimpleTextField
                  title="Unit"
                  onChange={handleChangeUnit}
                  value={unit}
                />
              </div>
              <div className="shopping-add-item">
                <SimpleTextField
                  title="Item"
                  onChange={handleChangeItem}
                  value={item}
                >
                  <IconButtons add onClick={saveItem} />
                </SimpleTextField>
              </div>
            </div>
            {ShoppingList.map((shoppinglist) => (
              <ItemCard
                id={shoppinglist.get("objectId")}
                item={
                  shoppinglist.get("item") +
                  ": " +
                  shoppinglist.get("quantity") +
                  " " +
                  shoppinglist.get("unit")
                }
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="steppers-container">
        <Steppers
          steps={[
            "Create Excursion",
            "Create duties",
            "Create shopping list",
            "Done",
          ]}
          doneSteps={2}
        />
      </div>
      <TextButton
        btnSwitch="Nav"
        label="Next"
        className="green-button-right"
        link="/done"
      />
    </div>
  );
}

export default Shoppinglist;
