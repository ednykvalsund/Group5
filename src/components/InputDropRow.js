import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  const [selected, setSelected] = React.useState("");
  const options = props.options;
  const handleChange = (event) => {
    setSelected(event.target.value);
    props.handleChange(event);

  };

  return (
    <div className="Forms">
      <FormControl fullWidth>
        <Select
          id={props.title}
          value={selected}
          //label={props.title}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleChange}
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
