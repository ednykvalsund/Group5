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
    setSelected(typeof value === "string" ? value.split(",") : value);
  };

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
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={selected.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
