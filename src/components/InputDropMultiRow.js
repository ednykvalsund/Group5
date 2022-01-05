import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { InputLabel } from "@mui/material";

export default function MultiSelect(props) {
  const [selected, setSelected] = React.useState([""]);
  const options = props.options;
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelected(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
   // props.handleChange(event);
  };
 

  let counterKey = 0;
  function genKey(option) {
    if (typeof option === "string") {
    counterKey = counterKey + 1;
    let test = counterKey.toString();
    let key = option + " " + "("+ test +")"
    return key;
  } else {
    return option;
  }
  }
  let counterVal = 0;

  function genVal(option) {
    if (typeof option === "string") {
      counterVal = counterVal + 1;
      let test = counterVal.toString();
      let val = option + " " + "("+test+")"
      return val;
    } else {
      return option;
    }
  }
  let array=[]
 
  for (const key in options) {
  let newItem = {
    value: genVal(options[key]),
    key: genKey(options[key])
  }
  array.push(newItem)
  }


  return (
    <div className="Forms">
      <FormControl variant="filled" fullWidth>
        <InputLabel id="label">{props.title}</InputLabel>

        <Select
          id={props.title}
          labelId="label"
          multiple
          value={selected}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{props.title}</em>;
            }

            return selected.slice(1).join(", ");
          }}
        >
          <MenuItem disabled value="">
            {props.title}
          </MenuItem>
          {array.map((option) => (
            <MenuItem key={option.key} value={option.value}>
              <Checkbox checked={selected.indexOf(option.value) > -1} />
              <ListItemText primary={option.value} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
