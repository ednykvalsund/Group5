import React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import { generatePath } from "react-router";

export default function BasicSelect(props) {
  const options = props.options;
  const [selected, setSelected] = React.useState([]);
  let counterKey = 0;

  function genKey(option) {
    if (typeof option === "string") {
    counterKey = counterKey + 1;
    let test = counterKey.toString();
    let key = option.concat(test);
    console.log(key);
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
      let val = option.concat(test);
      console.log(val);
      return val;
    } else {
      return option;
    }
  }

  console.log(options);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    if (typeof value === "string" || "number") setSelected(value);
    props.handleChange(event);
  };

  return (
    <div className="Forms">
      <FormControl variant="filled" fullWidth>
        <InputLabel id="label">{props.title}</InputLabel>

        <Select
          labelId="label"
          id={props.title}
          value={selected}
          onChange={handleChange}
        >
          <MenuItem disabled value="">
            {props.title}
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={genKey(option)} value={genVal(option)}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
