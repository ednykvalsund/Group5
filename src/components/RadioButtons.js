import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtons(props) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup
        value={props.value}
        onChange={props.onChange}
        row
        aria-label=""
        defaultValue="1"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value={props.label1}
          control={
            <Radio
              sx={{
                color: "#007a75",
                "&.Mui-checked": {
                  color: "#007a75",
                },
              }}
            />
          }
          label={props.label1}
        />
        <FormControlLabel
          value={props.label2}
          control={
            <Radio
              sx={{
                color: "#007a75",
                "&.Mui-checked": {
                  color: "#007a75",
                },
              }}
            />
          }
          label={props.label2}
        />
      </RadioGroup>
    </FormControl>
  );
}
