import React, { useState} from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  const [selected, setSelected] = useState("");
  const options = props.options;

  return (
    <div className="Forms">
      <FormControl fullWidth>
        <Select
          id={props.title}
          value={props.value}
      
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={props.handleChange}
        >
          <MenuItem disabled value="">
            {props.title}
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
