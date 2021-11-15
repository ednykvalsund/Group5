import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup(props) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup 
      row
        aria-label=""
        defaultValue="1"
        name="radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio  className="Radios"/>} label={props.label1} />
        <FormControlLabel value="2" control={<Radio  color="primary" />} label={props.label2} />

      </RadioGroup>
    </FormControl>
  );
}
