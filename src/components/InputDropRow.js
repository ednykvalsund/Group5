import React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";

export default function BasicSelect(props) {
  const options = props.options;
  const [selected, setSelected] = React.useState([]);


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
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
